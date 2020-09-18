import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:30</li>
        <li>Mostly Cloudy</li>
      </ul>
      <Search />
    </div>
  );
}
