import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import "./index.css";

let MapComponent = () => {
  return (
    
      <div className="col-md-6 details d-flex flex-column shadow position-relative">
        <div className="sun position-absolute top-0 start-0">
          <FontAwesomeIcon icon={solidIcons.faSun}  className=' fs-1 fw-bloder  text-white m-5'/>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle text-white fs-3 fw-lighter wind-dir">
          <FontAwesomeIcon icon={solidIcons.faArrowUpLong} className="mx-3"/>
          <FontAwesomeIcon icon={solidIcons.faArrowUpLong} className="mx-3"/>
          <FontAwesomeIcon icon={solidIcons.faArrowUpLong} className="mx-3"/>
        </div>
        <div className="d-flex px-0 pt-3 mt-2 frame-holder">
          <iframe
          title="map"
            className="flex-grow-1"
            src="https://api.maptiler.com/maps/hybrid/?key=HGPSwzDQY26yZCdA2ptF#7.0/40.52/-0.11"
          ></iframe>
        </div>
        <p className="text-muted text-capitalize fw-bold d-block my-1 py-3">
          last updated : 22 - 5 - 2002
        </p>
      </div>
   
  );
};

export default MapComponent;
