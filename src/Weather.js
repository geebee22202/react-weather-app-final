import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 04:59</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://openweathermap.org/img/wn/04n@2x.png"
              alt="cloudy"
              className="float-left"
            />
            <span className="weather-temp">
              <span className="temperature">50</span>
              <span className="unit">°F |°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 30%</li>
            <li>Humidity: 10%</li>
            <li>Wind: 15mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
