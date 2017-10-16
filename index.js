const BASE_URL = 'https://api.openweathermap.org/data/2.5';
// want information returned in imperial units (fahrenheit)...
// imperial api.openweathermap.org/data/2.5/find?q=London&units=imperial

function getDataFromApi (citySearch, callback) {
  let query = {
    APPID: "712e536a903b255041854df8a4537f82",
    q: citySearch, 
    units: 'imperial'
  }

  $.getJSON(`${BASE_URL}/weather`, query, callback);
  // $.getJSON(`${BASE_URL}/weather`, query, callback);

}

// function to render data
function render (data) {
  let cityName = data.name ;
  let weatherDescription = data.weather[0].description;
  let currentTemp = data.main.temp;
  let minTemp = data.main.temp_min ;
  let maxTemp = data.main.temp_max;
  let humidity = data.main.humidity;


  let cityData = `
    <div>
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



  $('.one .js-search-results').html(cityData);

}



function watchSubmit() {
  $('.one .js-search-area').submit(event=> {
   event.preventDefault();
   console.log('hi');
   const queryTarget = $(event.currentTarget).find('.js-city-search');
   const query = queryTarget.val();
   queryTarget.val("");
   getDataFromApi(query, render);
  });
}

$(watchSubmit);

// code to render second search area
function renderTwo (data) {
  let cityName = data.name ;
  let weatherDescription = data.weather[0].description;
  let currentTemp = data.main.temp;
  let minTemp = data.main.temp_min ;
  let maxTemp = data.main.temp_max;
  let humidity = data.main.humidity;


  let cityData = `
    <div>
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



  $('.two .js-search-results').html(cityData);

}


function watchSubmitTwo() {
  $('.two .js-search-area').submit(event=> {
   event.preventDefault();
   const queryTarget = $(event.currentTarget).find('.js-city-search');
   const query = queryTarget.val();
   queryTarget.val("");
   getDataFromApi(query, renderTwo);
  });
}

$(watchSubmitTwo);