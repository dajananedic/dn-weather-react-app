import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 city-col">
          <h1>{props.data.city}</h1>
          <br />
          <div className="clearfix">
            <div className="float-right">
              <WeatherIcon code={props.data.icon} />
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>

        <div className="col-4 des-col">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
