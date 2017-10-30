const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function getDataFromApi (citySearch, callback) {
  let query = {
    APPID: "712e536a903b255041854df8a4537f82",
    q: citySearch,
    units: 'imperial'
  }

  $.getJSON(`${BASE_URL}/weather`, query, callback);
}

// function to render data
function render (data) {
  let cityName = data.name ;
  let weatherDescription = data.weather[0].description;
  let currentTemp = data.main.temp;
  let minTemp = data.main.temp_min ;
  let maxTemp = data.main.temp_max;
  let humidity = data.main.humidity;


  return `
    <div class="">
      <ul>
      <li>The city you searched: ${cityName}</li>
      <li>The current weather is: ${weatherDescription}</li>
      <li>The current temperature(Fahrenheit) is: ${currentTemp}</li>
      <li>The low temperature(Fahrenheit) today is: ${minTemp}</li>
      <li>The high temperature(Fahrenheit) today is: ${maxTemp}</li>
      <li>Humidity is ${humidity} %.</li>
      </ul>
    </div>
  `;
}
// this function should match a weather icon with conditions returned

// function watchCondition {
//   if (`${weatherDescription}` == 'scattered clouds' || 'clouds') {
//     return cloudy.png
//   }
//   else if (`${weatherDescription}` == 'clear sky') {
//     return sun.png
//   }
//   else if (`${weatherDescription}` == 'snow') {
//     return snow.png
//   }
//   else (`${weatherDescription}` == 'rain') {
//     return rain.png
//   }
// }

function watchSubmit() {
  $('.js-search-area').submit(function (event) {
   event.preventDefault();

   const $input = $('.js-city-search', event.currentTarget);
   const $results = $input.parent().parent().find('.js-search-results');

   getDataFromApi($input.val(), function (data) {
    const html = render(data);

    $results.html(html);
    $results.addClass('zoomInDown');
   });
  });
}

$(watchSubmit);
