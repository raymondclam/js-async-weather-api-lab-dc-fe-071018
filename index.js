const API_KEY = "e68984af4783cdfe425e604d390fc92d"

function handleFormSubmit(event) {
  console.log("== handleFormSubmit ==")
  event.preventDefault();
  let city = document.getElementById("city").value;
  console.log("city:", city);
  fetchCurrentWeather(city);
  //handle submit event
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
})
