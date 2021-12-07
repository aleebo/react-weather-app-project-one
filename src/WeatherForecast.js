import React from "react";
import weatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return;
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
  </div>;
}
