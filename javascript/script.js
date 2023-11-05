const AIR_QUALITY_API_KEY = "43319462c8a346ff8e5ec4097702f70d";
const OPEN_WEATHER_API_KEY = "94e6bf67634acaba77df3c9e64af09de";
const WEATHER_BASE_PATH = "https://api.openweathermap.org/data/2.5/weather?q=";
const AIR_QUALITY_BASE_PATH = "https://api.weatherbit.io/v2.0/current/airquality?";
const containerWeather = $('#weather-results');
const containerAirQuality = $('#air-quality-results');
const cityInput = $('#city-input');
const weatherButton = $('#weather-button');
const airQualityButton = $('#air-quality-button');
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

const makeAirQualityCard = (city, airQuality, no2Level, so2Level, pm10Level) => {
  const formattedCityName = city.toUpperCase()
  return `
    <div class="card">
      <div class="card-content">
        <p>Air Quality data for ${formattedCityName}</p>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a class="active" href="#air-quality">Air Quality Index</a></li>
          <li class="tab"><a class="active" href="#nitrogen-dioxide">Nitrogen Dioxide(NO2)</a></li>
          <li class="tab"><a class="active" href="#sulfur-dioxide">Sulfur Dioxide(SO2)</a></li>
          <li class="tab"><a class="active" href="#pm-10">PM10</a></li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
      <div id="air-quality">AQI = ${airQuality} <br><br> *The Air Quality Index (AQI) is used for reporting daily air quality. It tells you how clean or polluted your air is. <br><br>0 - 50: Air quality is satisfactory and poses little or no risk. <br>51 - 100: Air quality is acceptable, however there may be a risk for some people sensitive to air pollution. <br>101 - 150: There may be health effects experienced by sensitive groups. <br>151 - 200: Some members of the general public may experience health effects. <br>201+ : This is considered a serious health alert. The risk is increased for all groups of people.</div>
      <div id="nitrogen-dioxide">NITROGEN DIOXIDE(NO2) = ${no2Level} <br><br> *Breathing air with a high concentration of NO2 can irritate airways in the human respiratory system. Such exposures over short periods can aggravate respiratory diseases, particularly asthma, leading to respiratory symptoms (such as coughing, wheezing or difficulty breathing).</div>
      <div id="sulfur-dioxide">SULFUR DIOXIDE(SO2) = ${so2Level} <br><br> *Short-term exposures to SO2 can harm the human respiratory system and make breathing difficult. People with asthma, particularly children, are sensitive to these effects of SO2.</div>
      <div id="pm-10">PM10 Level = ${pm10Level} <br><br> *PM10 (particle matter with a diameter of 10 microns or less) can include dust from construction sites, landfills, wildfires, pollen, and bacteria. These particles are inhalable into the lungs and can induce adverse health effects. </div>
      </div>
    </div>
  `;
}



const fetchDataWeather = city => {
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
    containerWeather.append(weatherCard);
    const tabs = document.querySelector(".tabs");
    M.Tabs.init(tabs, {})
  })
}


const fetchDataAirQuality = city => {
  fetch(AIR_QUALITY_BASE_PATH + "&city=" + city + "&units=imperial" + "&key=" + AIR_QUALITY_API_KEY)
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
    }).then(function (data) {
      const airQuality = data.data[0].aqi;
      const no2Level = data.data[0].no2;
      const so2Level = data.data[0].so2;
      const pm10Level = data.data[0].pm10;
      const airQualityCard = makeAirQualityCard(city, airQuality, no2Level, so2Level, pm10Level);
      containerAirQuality.append(airQualityCard);
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
    fetchDataWeather(city);
  }
}

const getAirQualityData = event => {
  event.preventDefault();
  const city = cityInput.val();

  if (!city && !cities.includes(city.toUpperCase())) {
    M.toast({ html: toastHTML });
    return;
  } else {
    cities.push(city.toUpperCase());
    fetchDataAirQuality(city);
  }
}

$(document).keypress(
  function (event) {
    if (event.which == '13') {
      event.preventDefault();
    }
  });


weatherButton.on("click", getWeatherData);
airQualityButton.on("click", getAirQualityData);




document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, 'left');
});


$(':radio').change(function () {
  console.log('New star rating: ' + this.value);
});