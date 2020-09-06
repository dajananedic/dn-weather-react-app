import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function submitCity(event) {
    event.preventDefault();
    let apiKey = "d20a58d648eb51d7e157c9054ad03816";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={submitCity}>
        <input
          className="input"
          type="search"
          placeholder="search cities"
          autoFocus="on"
          onChange={updateCity}
        />
        <input className="search" type="submit" value="Search" />
      </form>
    </div>
  );

  //   return (
  //     <div>
  //       {form}
  //       <ul>
  //         <li>Temperature: {weather.temperature}°C </li>
  //         <li>Wind: {weather.wind} km/h</li>
  //         <li>Humidity: {weather.humidity}%</li>
  //         <li>Description: {weather.description}</li>
  //         <li>
  //           <img src={weather.icon} alt="Weather icon" />{" "}
  //         </li>
  //       </ul>
  //     </div>
  //   );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt="weather icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
