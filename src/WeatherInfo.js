import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">
          Description:
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperture">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="units">°C </span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity:{props.data.humidity}%</li>
                <li>Wind:{props.data.wind}m/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
