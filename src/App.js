import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Dajana's Weather App</h1>
      <Search />
      <footer>
        This project was coded by Dajana Nedic{" "}
        <a
          href="https://github.com/dajananedic/dn-weather-react-app"
          target="_blank"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
