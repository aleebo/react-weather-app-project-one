import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather city="New York/>
        <div className="footer">
         
          This project is coded by Alicia Vuong and is

        <a 
        href="https://github.com/aleebo/react-weather-app-project-one"
            target="_blank"
            rel="noreferrer" 
            >
              {" "}
            open-sourced on Github.
             </a>
        
        </div>
      </div>
    </div> 
    );
}
