const AIR_NOW_API_KEY = "81EABAEC-E22B-443C-B080-241D62F60DD8";
const OPEN_WEATHER_API_KEY = "94e6bf67634acaba77df3c9e64af09de";
const WEATHER_BASE_PATH = "https://api.openweathermap.org/data/2.5/weather?q=";
const container = $('#weather-results')
const cityInput = $('#city-input');
const weatherButton = $('#weather-button');
const toastHTML = '<span>Please enter a valid city!</span>';
const cities = [];

const makeWeatherCard = (city, temperature, windspeed, humidity, description) => {
  const formattedCityName = city.toUpperCase()
  return `
    <div class="card">
      <div class="card-content">
        <p>Weather data for ${formattedCityName}</p>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a class="active" href="#temperature">Temperature</a></li>
          <li class="tab"><a href="#wind-speed">Wind Speed</a></li>
          <li class="tab"><a href="#humidity">Humidity</a></li>
          <li class="tab"><a href="#description">Description</a></li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="temperature">${temperature} \u00B0F</div>
        <div id="wind-speed">${windspeed} MPH</div>
        <div id="humidity">${humidity} %</div>
        <div id="description">${description}</div>
      </div>
    </div>
  `;
}

const fetchData = city => {
  fetch(WEATHER_BASE_PATH + city + "&units=imperial&appid=" + OPEN_WEATHER_API_KEY).then(function (response) {
    if (response.ok) {
      return response.json()
    }
  }).then(function (data) {
    const temperature = data.main.temp;
    const windspeed = data.wind.speed;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    const weatherCard = makeWeatherCard(city, temperature, windspeed, humidity, description);
    container.append(weatherCard);
    const tabs = document.querySelector(".tabs");
    M.Tabs.init(tabs, {})
  })
}

const getWeatherData = event => {
  event.preventDefault();
  const city = cityInput.val();

  if (!city && !cities.includes(city.toUpperCase())) {
    M.toast({ html: toastHTML });
    return;
  } else {
    cities.push(city.toUpperCase());
    fetchData(city);
  }
}


weatherButton.on("click", getWeatherData);







// $("#form").on("submit", function (event) {
//   event.preventDefault()
//   const city = $("#city").val()
//   console.log(city)
//   let form = event.target
//   const queryType = $(".search-button").children().each(function(event) {
//     console.log(event.target)
//     let buttonSelection = $(this).attr("id")
//     console.log(buttonSelection)
//   }) 
// console.log(queryType)
// fetch ("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+OPEN_WEATHER_API_KEY).then(function(response){
// if (response.ok) {
//   return response.json()
// }
// }).then(function(data){
//   console.log(data)
// })


// const searchPageUrl = "https://jarettdesanti.github.io/Air_Quality_Website/html/search.html";
// $(location).attr('href', searchPageUrl);
// });



// $("#form").on("click", function () {
//   const searchPageUrl = "https://jarettdesanti.github.io/Air_Quality_Website/html/search.html";
//   $(location).attr('href', searchPageUrl);
// });










document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, 'left');
});


$(':radio').change(function () {
  console.log('New star rating: ' + this.value);
});
