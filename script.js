const form = document.querySelector("form");
const body = document.querySelector('body');
const search = document.getElementById("search");
const weather = document.getElementById("weather");
const API_KEY = "326b8891620d0f22725fb855480e8ffa";

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url).then((res) => {
    return res.json();
  });
  showWeather(response);
};

const showWeather = (data) => {
  console.log(data);
  if (data.cod >= "404") {
    weather.innerHTML = `<h2>Oops! City not found!</h2>`;
    return;
  }

  weather.innerHTML = `
  <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
</div>
<div>
    <h2>${data.main.temp} &#8451</h2>
    <h4>${data.weather[0].main}</h4>
</div>`;
};

body.onload = () => {
    weather.innerHTML = `
  <div>
    <img src="https://openweathermap.org/img/wn/50n@2x.png" alt="weather">
</div>
<div>
    <h2>32 &#8451</h2>
    <h4>Haze</h4>
</div>`;
};

form.addEventListener("submit", (event) => {
  getWeather(search.value);
  event.preventDefault();
});
