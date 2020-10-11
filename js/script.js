
// Fonction appelée lors du click du bouton
function start() {
  // Récuperation de ce que j'ai entré dans mon text field
  //ville = document.getElementById('city-input').value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById('city-input').value);
  
  // Appel de la fonction fetchTodayForecast
  apiWeather
    .fetchTodayForecast()
    
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    

    apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);
      // On récupère l'information principal
      const main1 = data.list[0].weather[0].main;
      const description1 = data.list[0].weather[0].description;
      const temp1 = data.list[0].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('demain-forecast-main').innerHTML = main1;
      document.getElementById('demain-forecast-more-info').innerHTML = description1;
      document.getElementById('demain-icon-weather-container').innerHTML = icon1;
      document.getElementById('demain-forecast-temp').innerHTML = `${temp1}°C`;

      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const temp2 = data.list[1].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('apres-demain-forecast-main').innerHTML = main2;
      document.getElementById('apres-demain-forecast-more-info').innerHTML = description2;
      document.getElementById('apres-demain-icon-weather-container').innerHTML = icon2;
      document.getElementById('apres-demain-forecast-temp').innerHTML = `${temp2}°C`;

      const main3 = data.list[2].weather[0].main;
      const description3 = data.list[2].weather[0].description;
      const temp3 = data.list[2].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('encore-apres-demain-forecast-main').innerHTML = main3;
      document.getElementById('encore-apres-demain-forecast-more-info').innerHTML = description3;
      document.getElementById('encore-apres-demain-icon-weather-container').innerHTML = icon3;
      document.getElementById('encore-apres-demain-forecast-temp').innerHTML = `${temp3}°C`;
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    })
    ;
}

//.getThreeDayForecast()