import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
 
  const [weatherData, setWeatherData] = useState({ready: false});
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
  console.log(response.data);
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      wind: response.data.wind.speed,
      city:response.data.name,
      humidity:response.data.main.humidity,
      description:response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date:"Wednesday 07:00",
      precipitation:response.data.main.precipitation

      }) ;

 

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>Wednesday 7:00</li>
          <li> {weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
            <span className="temperture">{Math.round(weatherData.temperature)}</span>{" "}
            <span className="units">°C </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}m/h</li>
            </ul>
          </div>
        </div>
      </div>
    );


  } else {
        const apiKey = "04e088e25ccb622f4891c5136c21db30";
    let city = "New York";
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
  }