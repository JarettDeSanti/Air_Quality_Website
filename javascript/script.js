const airNowApiKey = "81EABAEC-E22B-443C-B080-241D62F60DD8";
const openWeatherApiKey = "94e6bf67634acaba77df3c9e64af09de";










$("#weather-button").on("click", function () {
  const searchPageUrl = "https://jarettdesanti.github.io/Air_Quality_Website/html/search.html";
  $(location).attr('href', searchPageUrl);
});



$("#air-quality-button").on("click", function () {
  const searchPageUrl = "https://jarettdesanti.github.io/Air_Quality_Website/html/search.html";
  $(location).attr('href', searchPageUrl);
});




document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, 'left');
});
