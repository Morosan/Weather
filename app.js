window.addEventListener('load', ()=> {
  let lon;
  let lat;
  let temperatureDescription = document.querySelector (".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}
      https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e85e0fe973e8e411f2a30161c9ab043a`;
      const apiWithoutProxy = api.replace("https://cors-anywhere.herokuapp.com/","");


      
      fetch(apiWithoutProxy)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const {temp, description} = data.main;
        //Set DOM Elements from the API
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = description;
        locationTimezone.textContent = data.name;

        console.log(temperatureDescription.textContent);    
      });
    });
  }
});