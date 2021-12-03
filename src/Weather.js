import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(props.city);

  function displayWeather(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });

    function handleSubmit(event) {
      event.preventDefault();
      const apiKey = "04e088e25ccb622f4891c5136c21db30";
      let city = "New York";
      let apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";
      axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
      setCity(event.target.value);
    }

    if (weatherData.ready) {
      return (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={updateCity}
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
            <li>
              <FormattedDate date={weatherData.date} />{" "}
            </li>
            <li>
              Description:
              {weatherData.description}
            </li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img src={weatherData.icon} alt={weatherData.description} />
              <span className="temperture">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="units">°C </span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind}m/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      search();
      return "Loading...";
    }
  }
}
