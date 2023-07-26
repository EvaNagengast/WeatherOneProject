// DATE TIME/Date
//
//
let months = [
  // "Jan",  "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  //"Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();

let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

document.querySelector(
  "#today-date"
).innerHTML = `${day}, ${date}.${month}, ${hour}:${minute}`;

//
//
// SEARCH BAR
//
//

//search bar
function logToday(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#feels").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#today-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function findcity(city) {
  let apiKey = "4cc095d48157ba3cc2e7da6b0b98bc8a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(logToday);
}

//
//current button
function getCurrentCity(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "4cc095d48157ba3cc2e7da6b0b98bc8a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(getCurrentCityTemperature);
}

function getCurrentCityTemperature(currentCResponse) {
  document.querySelector("#city").innerHTML = currentCResponse.data.name;
  document.querySelector("#today-temperature").innerHTML = Math.round(
    currentCResponse.data.main.temp
  );
  document.querySelector("#feels").innerHTML = Math.round(
    currentCResponse.data.main.feels_like
  );
  document.querySelector("#wind").innerHTML = currentCResponse.data.wind.speed;
  document.querySelector("#humid").innerHTML =
    currentCResponse.data.main.humidity;
  document.querySelector("#weather-description").innerHTML =
    currentCResponse.data.weather[0].main;
}
//
// generate city
function citySearch(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search-input").value;
  findcity(city);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentCity);
}
//
//button pressed
document.querySelector("#city-search").addEventListener("submit", citySearch);

document
  .querySelector("#current-button")
  .addEventListener("click", getPosition);

  findcity("London");

//
// CHANGE TO FAHRENHEIT / CELSIUS
//
//

//let celsius = document.querySelector("#celsius");
//let fahrenheit = document.querySelector("#fahrenheit");

//function changeUnit(event) {
//  event.preventDefault();
//  let todayTemperatue = document.querySelector("#today-temperature");
//  let temperature = todayTemperatue.innerHTML;
//  todayTemperatue.innerHTML = `${Math.round((temperature * 9) / 5 + 32)}`;
//}

//function changeUnitagain(event) {
//  event.preventDefault();
//  let todayTemperatue = document.querySelector("#today-temperature");
//  todayTemperatue.innerHTML = `25`;
//}

//fahrenheit.addEventListener("click", changeUnit);
//celsius.addEventListener("click", changeUnitagain);
