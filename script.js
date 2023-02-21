// Searchbar
    // user searches for and selects a city

// Searchbar History
    // shows users recent searches in order

// Current Weather Card
    // populates based on users selection in searchbar

// 5-day Forecast
    // populates based on users selection in searchbar

// DEPENDENCIES

// DATA
var apiKey = "c88f55c4afe5f730770c8ce85607d5a9"

// FUNCTIONS
function getWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
        });
}

function searchButtonHandler(event) {
    event.preventDefault();
    let city = $("#city-input").val().trim();
    getWeather(city);
}

function showWeather(weather) {

}

function searchHistory() {

}

// INTERACTIONS
$("#city-button").click(searchButtonHandler)