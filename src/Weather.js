import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Wed 7:00</li>
        <li> Mostly Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
            <div className="float-left">
              <span className="temperture">
                {" "}
                6<span className="units">°C</span>{" "}
              </span>

              <div className="col-6">
                <ul>
                  <li>Precipitation: 15%</li>
                  <li>Humidity: 72%</li>
                  <li>Wind:13 m/h</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="weather">
            <form />
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  autoFocus="on"
                  className="form-control"
                />
                <div className="col-3">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-primary"
                    w-100
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
