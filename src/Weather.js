import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <div className="row">
        <div className="col col-6 city-col">
          <h1>New York</h1>
          <br />
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
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
