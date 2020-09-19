import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
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
        <div className="col col-6 city-col">
          <h1>New York</h1>
          <br />
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>

        <div className="col col-3 des-col">
          <ul>
            <li>Wednesday 07:30</li>
            <li>Mostly Cloudy</li>
            <li>Precipitation: </li>
            <li>Wind speed: </li>
            <li>Humidity: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
