var searchInput = document.getElementById('search-input');
var searchBtn = document.getElementById('search-btn');


// weather conditions for today
var today = document.getElementById('now');
today.textContent = dayjs(); 

async function logJSONData() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + "&units=imperial&appid=d0880a2b7ca4d9938fbc3ffd962f6cd0");
  const jsonData = await response.json();
  console.log(jsonData.city);

var tempNow = document.getElementById('temp-now');
tempNow.textContent = "temperature: " + jsonData.list[0].main.temp + "\u00B0";
var city = document.getElementById('city');
city.textContent = searchInput.value;
var windNow = document.getElementById('wind-now');
windNow.textContent = "wind speed: " + jsonData.list[0].wind.speed + "mph";
var humidityNow = document.getElementById('humidity-now');
humidityNow.textContent = "humidity: " + jsonData.list[0].main.humidity;

// weather for day 1 after current day
//var dayOneIcon = document.getElementById('day-one-icon')
//dayOneIcon.textContent = 
var dayOneTemp = document.getElementById('day-one-temp') 
dayOneTemp.textContent = "temperature: " + jsonData.list[1].main.temp + "\u00B0";
var dayOneWind = document.getElementById('day-one-wind')
dayOneWind.textContent = "wind speed: " + jsonData.list[1].wind.speed + "mph";
var dayOneHumidity = document.getElementById('day-one-humidity')
dayOneHumidity.textContent = "humidity: " + jsonData.list[1].main.humidity;

// weather for day 2 after current day
//var dayTwoIcon = document.getElementById('day-two-icon')
//dayTwoIcon.textContent = 
var dayTwoTemp = document.getElementById('day-two-temp') 
dayTwoTemp.textContent = "temperature: " + jsonData.list[2].main.temp + "\u00B0";
var dayTwoWind = document.getElementById('day-two-wind')
dayTwoWind.textContent = "wind speed: " + jsonData.list[2].wind.speed + "mph";
var dayTwoHumidity = document.getElementById('day-two-humidity')
dayTwoHumidity.textContent = "humidity: " + jsonData.list[2].main.humidity;

// weather for day 3 after current day
//var dayThreeIcon = document.getElementById('day-three-icon')
//dayThreeIcon.textContent = 
var dayThreeTemp = document.getElementById('day-three-temp')
dayThreeTemp.textContent =  "temperature: " + jsonData.list[3].main.temp + "\u00B0";
var dayThreeWind = document.getElementById('day-three-wind')
dayThreeWind.textContent = "wind speed: " + jsonData.list[3].wind.speed + "mph";
var dayThreeHumidity = document.getElementById('day-three-humidity')
dayThreeHumidity.textContent = "humidity: " + jsonData.list[3].main.humidity;

// weather for day 4 after current day
//var dayFourIcon = document.getElementById('day-four-icon')
//dayFourIcon.textContent = 
var dayFourTemp = document.getElementById('day-four-temp') 
dayFourTemp.textContent = "temperature: " + jsonData.list[4].main.temp + "\u00B0";
var dayFourWind = document.getElementById('day-four-wind')
dayFourWind.textContent = "wind speed: " + jsonData.list[4].wind.speed + "mph";
var dayFourHumidity = document.getElementById('day-four-humidity')
dayFourHumidity.textContent = "humidity: " + jsonData.list[4].main.humidity;

// weather for day 5 after current day
//var dayFiveIcon = document.getElementById('day-five-icon')
//dayFiveIcon.textContent = 
var dayFiveTemp = document.getElementById('day-five-temp')
dayFiveTemp.textContent = "temperature: " + jsonData.list[5].main.temp + "\u00B0";
var dayFiveWind = document.getElementById('day-five-wind')
dayFiveWind.textContent = "wind speed: " + jsonData.list[5].wind.speed + "mph";
var dayFiveHumidity = document.getElementById('day-five-humidity')
dayFiveHumidity.textContent = "humidity: " + jsonData.list[5].main.humidity; 
}

function saveToLocalStorage() {
var citiesSearched = localStorage.getItem('city') ? JSON.parse (localStorage.getItem('city')) : []
citiesSearched.push(city) 
localStorage.setItem("city", JSON.stringify(citiesSearched));
}

let citiesShown = localStorage.getItem('city') && JSON.stringify (localStorage.getItem('city'));
var citiesDisplayed = document.getElementById('cities-displayed');
citiesDisplayed.textContent = citiesShown;

  
searchBtn.addEventListener('click', logJSONData);
searchBtn.addEventListener('click', saveToLocalStorage);