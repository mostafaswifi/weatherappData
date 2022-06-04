import React, { useContext } from "react";
import { dataGrapperContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import "./index.css";

let WeatherTodayDetailsComponent = ({
  advancedToggler,
  advancedReprtComponentToggler,
}) => {
  const dataGr = useContext(dataGrapperContext);
  const { dataFinalHolder } = dataGr;

  return (
    <section className="container my-2 my-md-5 px-1 px-md-4 ">
      <h2 className="text-sky text-uppercase fs-3">
        weather today's details in{" "}
        <span className="text-muted text-capitalize">
          {dataFinalHolder.location ? dataFinalHolder.location.name : "Capital"}
          ,{" "}
          {dataFinalHolder.location
            ? dataFinalHolder.location.country
            : "Country"}
        </span>{" "}
      </h2>
      <div className="d-flex justify-content-between flex-row">
        <div className="d-flex flex-column justify-content-center align-items-center my-2">
          <span className="text-sky">{dataFinalHolder.location ? dataFinalHolder.current.feelslike_c : "No Data"}°</span>
          <span className="text-muted text-capitalize text-center">feels like</span>
        </div>
        <div className="arch position-relative d-flex justify-content-center align-items-center me-0 me-md-4">
          <div className="sunMoon rounded-circle">
            <span className="position-absolute d-flex flex-column left text-muted">
              Sun rise
              <span>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].astro.sunrise : "sunrise"}</span>
            </span>
            <span className="position-absolute d-flex flex-column right text-muted">
              Sun set
              <span>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].astro.sunset : "sunset"}</span>
            </span>
          </div>
          <div className="w-100 h-25 bg-white position-absolute dimmer"></div>
        </div>
      </div>
      <div className="container my-2 my-md-4">
        <div className="row text-muted justify-content-between">
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={solidIcons.faTemperatureQuarter}
                className="text-sky"
              />
              <span className="text-capitalize mx-2">high / low</span>
            </div>
            <div>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].day.maxtemp_c : "max temp"}° / {dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].day.mintemp_c : "min temp"}°</div>
          </div>
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={solidIcons.faWind} className="text-sky" />
              <span className="text-capitalize mx-2">wind</span>
            </div>
            <div>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].hour[0].vis_km : "wind"} km</div>
          </div>
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <i className="text-sky  fa-solid fa-water"></i>
              <FontAwesomeIcon icon={solidIcons.faWater} className="text-sky" />
              <span className="text-capitalize mx-2">humidity</span>
            </div>
            <div>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].hour[0].humidity : "humidity"}%</div>
          </div>
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={solidIcons.faCloudRain}
                className="text-sky"
              />
              <span className="text-capitalize mx-2">chance of rain</span>
            </div>
            <div>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].hour[0].chance_of_rain : "rain"}%</div>
          </div>
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={solidIcons.faWeightScale}
                className="text-sky"
              />
              <span className="text-capitalize mx-2">preasure</span>
            </div>
            <div>
              <FontAwesomeIcon icon={solidIcons.faArrowUp} />
              {dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].hour[0].pressure_in : "pressure"} in
            </div>
          </div>
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={solidIcons.faMoon} className="text-sky" />
              <span className="text-capitalize mx-2">moon phase</span>
            </div>
            <div>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].astro.moon_phase : "moon"}</div>
          </div>
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={solidIcons.faEye} className="text-sky" />
              <span className="text-capitalize mx-2">visiblity</span>
            </div>
            <div>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].hour[0].vis_km : "visibility"} km</div>
          </div>
          <div className="col-md-5 my-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={solidIcons.faCertificate}
                className="text-sky"
              />
              <span className="text-capitalize mx-2">UV index</span>
            </div>
            <div>{dataFinalHolder.location ? dataFinalHolder.forecast.forecastday[0].hour[0].uv : "uv"} of 10</div>
          </div>
        </div>
      </div>
      {!advancedReprtComponentToggler && (
        <span
          className="text-muted fw-light fs-6 text-uppercase d-block my-5 pointer"
          onClick={advancedToggler}
        >
          <FontAwesomeIcon icon={solidIcons.faPlus} className="mx-2" />
          advanced report ...
        </span>
      )}

      {advancedReprtComponentToggler && (
        <span
          className="text-muted fw-light fs-6 text-uppercase d-block my-5 pointer"
          onClick={advancedToggler}
        >
          <FontAwesomeIcon icon={solidIcons.faMinus} className="mx-2" />
          advanced report ...
        </span>
      )}
    </section>
  );
};

export default WeatherTodayDetailsComponent;
