const notifElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp-value p");
const descElement = document.querySelector(".temp-desc p");
const locationElement = document.querySelector(".location p");

const weather = {};
weather.temperature ={
    unit : 'celsius'
}

//API KEY
const weather_key = "eefbb71df1f6fa6e3b45a3f8fc34cd08";

const KELVIN = 273;

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_key}`

    fetch(api).then(function(response) {
        let data = response.json();
        return data;
    }).then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    }).then(function(){
        displayWeather();
    })

}

// DISPLAY WEATHER TO UI

function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}&#186;<span>C</span>`
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// GEOLOCATION SET-UP
if ("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
   notifElement.style.display = "block";
   notifElement.innerHTML = "<p>Geolocation Not Supported</p>";
}

// SET UP GEOLOCATION POSTION
function setPosition(position) {
   let latitude = position.coords.latitude;
   let longitude = position.coords.longitude;
   getWeather(latitude, longitude);
}

//SHOW ERROR WITH LOCATION
function showError(error) {
    notifElement.style.display = 'block';
    notifElement.innerHTML =`<span> ${error.message} </span>`
}

// CELSIUS TO FARH

function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}


// GET DEGREE TYPE
tempElement.addEventListener("click", function () {
   if (weather.temperature.value === undefined) return;

   if (weather.temperature.unit == "celsius") {
      let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
      fahrenheit = Math.floor(fahrenheit);

      tempElement.innerHTML = `${fahrenheit}&#186;<span> F </span>`;
      weather.temperature.unit = "fahrenheit";
   } else {
      tempElement.innerHTML = `${weather.temperature.value}&#186;<span> C </span>`;
      weather.temperature.unit = "celsius";
   }
});

