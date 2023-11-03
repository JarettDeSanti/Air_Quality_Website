const airNowApiKey = "81EABAEC-E22B-443C-B080-241D62F60DD8";
const openWeatherApiKey = "94e6bf67634acaba77df3c9e64af09de";




$("#form").on("submit", function (event) {
  event.preventDefault()
  const city = $("#city").val()
  console.log(city)
  let form = event.target
  const queryType = $(".search-button").children().each(function(event) {
    console.log(event.target)
    let buttonSelection = $(this).attr("id")
    console.log(buttonSelection)
  }) 
  console.log(queryType)
  // fetch ("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+openWeatherApiKey).then(function(response){
  // if (response.ok) {
  //   return response.json()
  // }
  // }).then(function(data){
  //   console.log(data)
  })

  
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


$(':radio').change(function() {
  console.log('New star rating: ' + this.value);
});
