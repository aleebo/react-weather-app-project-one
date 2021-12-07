import React from "react";
import weatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "04e088e25ccb622f4891c5136c21db30";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://apiopenweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);

  return (
    <div classname="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <weatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19­°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
