const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);

function getInput (event) {
    event.preventDefault();
    if (event.type == "click") {
        getData(search.value);
        console.log(search.value);
    }
}
function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
        
}
function displayData (response) {
    // console.log(response);
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "ciudad no válida";
        search.value = "";
    } else {
        const city = document.querySelector(".outciudad");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".outdia");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".outtemperatura1");
        temp.innerHTML = `Temperatura: ${Math.round(response.main.temp)} <span>°C</span>`;

        const weather = document.querySelector(".outtemperatura2");
        weather.innerText = `Tiempo: ${response.weather[0].main}`;

        const tempRange = document.querySelector(".outtemperatura3");
        tempRange.innerText = `Rango: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png";

        search.value = "";
    }
}

function dateFunction (d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}