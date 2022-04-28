import React, { useEffect, useState } from "react";
import Recipe from "./recipe";

import "./App.css";

const App = () => {
    const APP_ID = "4d320fcd";
    const APP_KEY = "d57924711ff8d220be049be1007878c6";
    const [recipe, setrecipe] = useState([]);

    //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const [counter, setcounter] = useState(0);
    const [search, setsearch] = useState(""); //yahaan search bar me searching k liye hmlog bydefault empty string daal rhe hain
    const [query, setQuery] = useState("chicken");
    useEffect(() => {
        //console.log("effect has been run");
        getrecipe();
    }, [query]);

    const getrecipe = async() => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setrecipe(data.hits);
        console.log(data.hits);
    };
    const UpdateSearch = (e) => {
        setsearch(e.target.value);
        // console.log(search);
    };
    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setsearch("");
    };

    return ( <
        div className = "App" >
        <
        form onSubmit = { getSearch }
        className = "search-form" >
        <
        input className = "search-bar"
        type = "text"
        value = { search }
        onChange = { UpdateSearch }
        />{" "} <
        button className = "search-button"
        type = "submit" > { " " }
        Search { " " } <
        /button>{" "} <
        /form>{" "} <
        div className = "recipes" > { " " } {
            recipe.map((recipe) => ( <
                Recipe key = { recipe.recipe.label }
                title = { recipe.recipe.label }
                calorie = { recipe.recipe.calories }
                image = { recipe.recipe.image }
                ingredients = { recipe.recipe.ingredients }
                />
            ))
        } <
        /div>{" "} <
        /div>
    );
};

export default App;