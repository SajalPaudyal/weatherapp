window.addEventListener('load', () =>{
  let long;
  let lat;
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureDescription = document.querySelector('.temperature-description');

  

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(long);

      const api = `https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${long}&key=3bad621b6b47457f9b15c003a2d3290e`
      

      fetch(api)
      .then (response =>{
        return response.json();
      })
      .then (data =>{
        weatherstat = data;
        console.log(weatherstat);
        const temperature = weatherstat.data[0].temp;
        console.log(temperature);
        const timezone = weatherstat.data[0].city_name;
        console.log(timezone);
        const description = weatherstat.data[0].weather.description;
        console.log(description);

        //DOM element lai modify garne

        temperatureDegree.textContent = temperature;
        locationTimezone.textContent = timezone;
        temperatureDescription.textContent = description;
      })
    } )
    
  }
})
  const ctapi = {
    key : "3bad621b6b47457f9b15c003a2d3290e",
    base : "https://api.weatherbit.io/v2.0/"
    //mero style https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY
  }
  const searchBox = document.querySelector('.search-txt');
  searchBox.addEventListener('keypress',setQuery);
  
  
  function setQuery(e){
    if(e.keyCode === 13){
      getResults (searchBox.value);
      console.log(searchBox.value);

    }

  }

  function getResults (query){
    let tapkramDegree = document.querySelector('.temperature-degree');
    let thauTimezone = document.querySelector('.location-timezone');
    let tapkramDescription = document.querySelector('.temperature-description');
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=34127c91494010566c8115cc8c184179&units=metric`)
    .then(responsea => {
      return responsea.json();
    })
    .then ( results => {
       mausam = results;
      console.log(mausam);

      let tapkram = mausam.main.temp;
      console.log(tapkram);
      tapkramDegree.textContent = tapkram;
      let thau = mausam.name;
      console.log(thau);
      thauTimezone.textContent = thau;
      let awasta= mausam.weather[0].description;
      console.log(awasta);
      tapkramDescription.textContent = awasta;



    } );
  }

  var d = new Date();
document.getElementById("date").innerHTML = d;