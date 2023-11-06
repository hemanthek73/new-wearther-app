const timeEl=document.getElementById('time');
const dateEl=document.getElementById('date');
const currentWeatherItemsEl=document.getElementById('current-weather-items');
const timezone=document.getElementById('time-zone');
const countryEl=document.getElementById('weather-forcast');
const currenttempEl=document.getElementById('current-temp');
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// setInterval(()=>{
//   let time = new Date();
//   const month=time.getMonth();
//   const date=time.getDate();
//   const day=time.getDay();
//   const hour=time.getHours();
//   const hoursintoformate= hour >= 13 ? hour %12: hour
//   const minutes=time.getMinutes();
  
//   const ampm=hour>=12 ?'PM' : 'AM'
// timeEl.innerHTML=hoursintoformate+':'+ minutes+''+ `<span id="am-pm">${ampm}</span>`
// dateEl.innerHTML=days[day]+', '+ date + ' '+months[month]
// },1000);
setInterval(() => {
  let time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIntoFormat = hour >= 13 ? (hour % 12) : hour;
  const minutes = time.getMinutes();

  const formattedHour = hoursIntoFormat.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  const ampm = hour >= 12 ? 'PM' : 'AM';

  timeEl.innerHTML = formattedHour + ':' + formattedMinutes + ' ' + `<span id="am-pm">${ampm}</span>`;
  dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 1000);

// function getWeatherData() {
 
//   const API_KEY = "b23738f4401ccddddc7e2c86dd482025"; 

//  navigator.geolocation.getCurrentPosition((success) => {
//   let { latitude, longitude } = success.coords;
//  fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid={API_KEY}`) 
//  .then((res) => res.json())
//      .then((data) => {
//        console.log(data);
//     })
//   })
// }

//  getWeatherData();
function getData(){
  var cityname=document.getElementById("city").value;
  var temp=";"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +
  "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
  .then((res) =>res.json())
  .then((data) =>{
      console.log(data);
      var temp=data.main.temp;
      
      document.getElementById("currentweather").innerText=
      temp+" "+data.weather[0].description;
    var discription=data.weather[0].description;
    console.log(discription);
  });
  
}
function hsn(){

  var cityname='hassan';
  var temp=";"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +
  "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
  .then((res) =>res.json())
  .then((data) =>{
      console.log(data);
      var temp=data.main.temp;
      var humidity=data.main.humidity;
      console.log(humidity);
      
      document.getElementById("hassan").innerText=
      `temp - ${temp} ` ;
      document.getElementById("hassandis").innerText=
      `climate - ${data.weather[0].description} `;
    document.getElementById("hassanhum").innerText=
      `Humidity -${humidity}`;
  });
  getData();
  
}
hsn();
function bng(){
  var cityname='bangalore';
  var temp=";"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +
  "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
  .then((res) =>res.json())
  .then((data) =>{
      console.log(data);
      var temp=data.main.temp;
      var humidity=data.main.humidity;
      console.log(humidity);
      
      document.getElementById("bangalore").innerText=
      `temp - ${temp} ` ;
      document.getElementById("bangaloredis").innerText=
      `climate - ${data.weather[0].description} `;
    document.getElementById("bangalorehum").innerText=
      `Humidity -${humidity}`;
  });
  getData();
  
}
bng();
function mys(){
  var cityname='mysore';
  var temp=";"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +
  "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
  .then((res) =>res.json())
  .then((data) =>{
      console.log(data);
      var temp=data.main.temp;
      var humidity=data.main.humidity;
      console.log(humidity);
      
      document.getElementById("mysore").innerText=
      `temp - ${temp} ` ;
      document.getElementById("mysoredis").innerText=
      `climate - ${data.weather[0].description} `;
    document.getElementById("mysorehum").innerText=
      `Humidity -${humidity}`;
  });
  getData();
  
}
mys();
function mng(){
  var cityname='mangalore';
  var temp=";"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +
  "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
  .then((res) =>res.json())
  .then((data) =>{
      console.log(data);
      var temp=data.main.temp;
      var humidity=data.main.humidity;
      console.log(humidity);
      
      document.getElementById("mangalore").innerText=
      `temp - ${temp} ` ;
      document.getElementById("mangaloredis").innerText=
      `climate - ${data.weather[0].description} `;
    document.getElementById("mangalorehum").innerText=
      `Humidity -${humidity}`;
  });
  getData();
  
}
mng();
function shi(){
  var cityname='madikeri';
  var temp=";"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +
  "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
  .then((res) =>res.json())
  .then((data) =>{
      console.log(data);
      var temp=data.main.temp;
      var humidity=data.main.humidity;
      console.log(humidity);
      
      document.getElementById("shivmogga").innerText=
      `temp - ${temp} ` ;
      document.getElementById("shivmoggadis").innerText=
      `climate - ${data.weather[0].description} `;
    document.getElementById("shivmoggahum").innerText=
      `Humidity -${humidity}`;
  });
  getData();
  
}
shi();


function dli(){
  var cityname='dehli';
  var temp=";"
  const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +
  "&units=metric&appid=e531ee07e71dc861807f7d9d983641e2";
  fetch(url)
  .then((res) =>res.json())
  .then((data) =>{
      console.log(data);
      var temp=data.main.temp;
      var humidity=data.main.humidity;
      console.log(humidity);
      
      document.getElementById("delhi").innerText=
      `temp - ${temp} ` ;
      document.getElementById("delhidis").innerText=
      `climate - ${data.weather[0].description} `;
    document.getElementById("delhihum").innerText=
      `Humidity -${humidity}`;
  });
  getData();
  
}
dli();
// function img(){
//   getData();
//   const images = {
//     sunny: 'sun.png',
//     cloudy: 'cloudy.png',
//     rainy: 'rain.png',
//     fog:'fog.png',
//     thunderstrome:'scattered-thunderstorms.png'
//   };
//   constdiscription= 'sunny'; // Replace this with the actual weather condition.

//   if (discription === 'sunny') {
    
//     document.querySelector('img')= images.sunny;
//   } else if (discription === 'cloudy') {
    
//     document.querySelector('img') = images.cloudy;
//   } else if (discription === 'rainy') {
    
//     document.querySelector('img')  = images.rainy;
//   } else {
    
//     document.querySelector('img')  = 'default.jpg';
//   }
  
// }