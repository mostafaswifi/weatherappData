import React,{useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import {dataGrapperContext} from "../../../App"

let MapComponent = () => {



  const dataGr = useContext(dataGrapperContext);

  const { iconGenerator } = dataGr;
  const { dataFinalHolder } = dataGr;
  let {lat,lon} = dataFinalHolder.location || 30.2;
  return (
    
      <div className="col-md-6 mb-4 details d-flex flex-column shadow position-relative">
        <div className="sun position-absolute top-0 start-0">
     
        <div className=' fs-1 fw-bloder  text-white m-5'>
          {iconGenerator()}
        </div>

    
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
            src={`https://api.maptiler.com/maps/hybrid/?key=HGPSwzDQY26yZCdA2ptF#10.0/${lat}/${lon}`}
          ></iframe>
        </div>
        <p className="text-muted text-capitalize fw-bold d-block my-1 py-3">
          last updated : {dataFinalHolder.current ? dataFinalHolder.current.last_updated : "24 Hours system"}
        </p>
      </div>
   
  );
};

export default MapComponent;
