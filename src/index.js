function showTemp(response) {
  let temperatureElement = document.querySelector("#big-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector("#big-city");
  cityElement.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-id");
  let city = searchInput.value;

  let apiKey = "0to1c5e82ab3ce410bae0704083170ff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

function formatDate(date) {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes} `;
}

let changeCity = document.querySelector("#search-form");
changeCity = addEventListener("submit", search);

let currentDate = new Date();

let updatedDate = document.querySelector("#current-time-details");
updatedDate.innerHTML = formatDate(currentDate);
