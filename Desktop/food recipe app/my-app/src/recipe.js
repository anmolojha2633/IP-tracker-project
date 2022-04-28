import React from "react";
//passing the props
import style from "./recipe.module.css";
const recipe = ({ title, calorie, image, ingredients }) => {
    return ( <
        div className = { style.recipe } >
        <
        h1 > { title } < /h1>{" "} <
        ol > { " " } {
            ingredients.map((ingredient) => ( <
                li > { ingredient.text } < /li>
            ))
        } { " " } <
        /ol>{" "} <
        p > { calorie } < /p> <img className={style.image} src={image} alt="" / >
        <
        /div>
    );
};
export default recipe;