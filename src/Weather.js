import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Search />
        <form>
          <input
            className="input-city"
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
          />
          <input className="search-city" type="submit" value="Search" />
        </form>
        <div className="row">
          <div className="col-6 city-col">
            <h1>{weatherData.city}</h1>
            <br />
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-right"
              />

              <div className="float-right">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>

          <div className="col-4 des-col">
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Humidity: {weatherData.humidity} %</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d20a58d648eb51d7e157c9054ad03816";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
