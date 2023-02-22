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
var searchHistory = []

// FUNCTIONS
function getWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
          showWeather(data)
        });
}

function getForecast(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
          showForecast(data)
        });
}

function searchButtonHandler(event) {
    event.preventDefault();
    var city = $("#city-input").val();
    getWeather(city);
    getForecast(city);
    saveSearchHistory(city);
}

function saveSearchHistory(city) {
    searchHistory.push(city);
    localStorage.setItem("weatherSearchHistory", JSON.stringify(searchHistory));
    searchHistory = JSON.parse(localStorage.getItem("weatherSearchHistory"));
    $("#search-history").empty();
    for(i = 0 ; i < searchHistory.length; i++) {
        $("#search-history").append("<a href='#' class='list-group-item list-group-item-action' id='" + searchHistory[i] + "'>" + searchHistory[i] + "</a>");
    }
};
saveSearchHistory();

function showWeather(weather) {
    $("#current-forecast-title").text(weather.name + " (" + dayjs().format("M/DD/YY") + ") ");
    $("#current-forecast-temp").text("Temperature: " + weather.main.temp + "°F");
    $("#current-forecast-wind").text("Wind Speed: " + weather.wind.speed + " mph");
    $("#current-forecast-humidity").text("Humidity: " + weather.main.humidity + "%");
}

function showForecast(forecast) {

}

// INTERACTIONS
$("#city-button").click(searchButtonHandler)