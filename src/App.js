import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <button className="btn btn-primary">Hi There!</button>
        <h1>Dajana's Weather App</h1>
        <Search />
        <footer>
          This project was coded by Dajana Nedic{" "}
          <span
            href="https://github.com/dajananedic/dn-weather-react-app"
            target="_blank"
          >
            open-sourced on Github
          </span>
        </footer>
      </div>
    </div>
  );
}
