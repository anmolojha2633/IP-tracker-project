const lookupbtn = document.querySelector(".lookupbutton");
const ipdisplaybtn = document.querySelector(".ipdisplay");
const locationdisplaybtn = document.querySelector(".locationdisplay");
const geodisplaybtn = document.querySelector(".geodisplay");
const postalcodebutton = document.querySelector(".postalcode");



lookupbtn.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then(response => {
        ipdisplaybtn.textContent = `IP: ${response.data.ip}`;
        locationdisplaybtn.textContent = `LOCATION:${response.data.city},${response.data.country_name},${response.data.region_code}`;
        geodisplaybtn.textContent = `GEOGRAPHICAL LOCATION : ${response.data.latitude},${response.data.longitude}`;
        postalcodebutton.textContent = `CURRENT POSTAL CODE :${response.data.postal}`;
    });

});