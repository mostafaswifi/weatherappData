import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import "./index.css";

let WeatherTodayDetailsComponent = () => {
    return (
       
        <section className="container my-2 my-md-5 px-4">

        <h2 className="text-sky text-uppercase fs-3">weather today's details in <span className="text-muted text-capitalize">cairo , egypt</span> </h2>
  
        <div className="d-flex justify-content-between flex-row">
          <div className="d-flex flex-column justify-content-center align-items-center my-2">
            <span className="text-sky">81°</span>
            <span className="text-muted text-capitalize">feels like</span>
          </div>
          <div className="arch position-relative d-flex justify-content-end align-items-center me-0 me-md-4">
            <div className="sunMoon rounded-circle">
              <span className="position-absolute d-flex flex-column left">
                Sun rise
                <span>6:35 pm</span>
              </span>
              <span className="position-absolute d-flex flex-column right">
                Sun set
                <span>6:35 am</span>
              </span>
            </div>
            <div className="w-100 h-25 bg-white position-absolute dimmer"></div>
          </div>
        </div>
        <div className="container my-2 my-md-4">
          <div className="row text-muted justify-content-between">
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faTemperatureQuarter} className="text-sky"/>
                <span className="text-capitalize mx-2">high / low</span>
              </div>
              <div>83° / 65°</div>
            </div>
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faWind}  className="text-sky"/>
                <span className="text-capitalize mx-2">wind</span>
              </div>
              <div>23 mph</div>
            </div>
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <i className="text-sky  fa-solid fa-water"></i>
                <FontAwesomeIcon icon={solidIcons.faWater}  className='text-sky'/>
                <span className="text-capitalize mx-2">humedity</span>
              </div>
              <div>30%</div>
            </div>
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faCloudRain}  className='text-sky'/>
                <span className="text-capitalize mx-2">chance of rain</span>
              </div>
              <div>0%</div>
            </div>
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faWeightScale}  className='text-sky'/>
                <span className="text-capitalize mx-2">preasure</span>
              </div>
              <div>
                <FontAwesomeIcon icon={solidIcons.faArrowUp} />
                29.25 in
              </div>
            </div>
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faMoon}  className='text-sky'/>
                <span className="text-capitalize mx-2">moon phase</span>
              </div>
              <div>last quarter</div>
            </div>
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faEye}  className='text-sky'/>
                <span className="text-capitalize mx-2">visiblity</span>
              </div>
              <div>6 mi</div>
            </div>
            <div className="col-md-5 my-2 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faCertificate}  className='text-sky'/>
                <span className="text-capitalize mx-2">UV index</span>
              </div>
              <div>8 of 10</div>
            </div>
          </div>
        </div>
        <span className="text-muted fw-light fs-6 text-uppercase d-block my-5">
          <FontAwesomeIcon icon={solidIcons.faPlus} className="mx-2"/>
          advanced report ...
        </span>
        </section>
     )

}

export default WeatherTodayDetailsComponent;