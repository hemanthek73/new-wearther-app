const timeEl=document.getElementById('time');
const dateEl=document.getElementById('date');
const currentWeatherItemsEl=document.getElementById('current-weather-items');
const timezone=document.getElementById('time-zone');
const countryEl=document.getElementById('weather-forcast');
const currenttempEl=document.getElementById('current-temp');
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

setInterval(()=>{
  let time = new Date();
  const month=time.getMonth();
  const date=time.getDate();
  const day=time.getDay();
  const hour=time.getHours();
  const hoursintoformate= hour >= 13 ? hour %12: hour
  const minutes=time.getMinutes();
  const ampm=hour>=12 ?'PM' : 'AM'
timeEl.innerHTML=hoursintoformate+':'+ minutes+''+ `<span id="am-pm">${ampm}</span>`
dateEl.innerHTML=days[day]+', '+ date + ' '+months[month]
},1000);
// function getWeatherData() {
 

// navigator.geolocation.getCurrentPosition((success) => {
//   let { latitude, longitude } = success.coords;
//   const API_KEY = "b23738f4401ccddddc7e2c86dd482025"; 
// fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid={API_KEY}`) 
// .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
// })
// }

// getWeatherData();
function getData() {
  const city = "hassan";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
    "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

getData();
