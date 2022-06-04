import React,{useContext} from "react";
import {dataGrapperContext} from "../../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import PeriodsOfDay from '../PeriodsOfDay';
import './index.css';



let DetailCompnonet = ({weatherToggler,weatherTodayDetailsComponentToggler}) => {
  const dataGr = useContext(dataGrapperContext);

  const {dataFinalHolder ,skyCondition , iconGeneratorMain} = dataGr;
  if (dataFinalHolder.forecast && dataFinalHolder.location){
    var morning = dataFinalHolder.forecast.forecastday[0].hour[0].temp_c
    var afternoon = dataFinalHolder.forecast.forecastday[0].hour[11].temp_c
    var evening = dataFinalHolder.forecast.forecastday[0].hour[20].temp_c
    var overNight = dataFinalHolder.forecast.forecastday[0].hour[23].temp_c
    var {name} = dataFinalHolder.location
    var {country} =   dataFinalHolder.location
    var morningR = dataFinalHolder.forecast.forecastday[0].hour[0].chance_of_rain
    var afternoonR = dataFinalHolder.forecast.forecastday[0].hour[11].chance_of_rain
    var eveningR = dataFinalHolder.forecast.forecastday[0].hour[20].chance_of_rain
    var overNightR = dataFinalHolder.forecast.forecastday[0].hour[23].chance_of_rain
    
  }else{
    morning = "no data"
    afternoon = "np data"
    evening = "no data"
    overNight = "no data"
    name = "Capital"
    country = "Country"
  }

  return (
      
                   <div className="col-md-6 map d-flex flex-column justify-content-between">
          <h2 className="text-muted my-5 my-md-0 text-capitalize fs-2">today's forcast in <span className="text-sky">{name} , {country}</span> </h2>
           {dataFinalHolder.forecast && dataFinalHolder.location &&
          <div className="row my-2 my-md-5 justify-content-center justify-content-md-start text-capitalize">
             
             <PeriodsOfDay period={"morning"} degree={morning} rainChance={morningR} skyCondition={skyCondition} iconGeneratorMain = {iconGeneratorMain} className="fs-5"/>
             <PeriodsOfDay period={"after noon"} degree={afternoon} rainChance={afternoonR} skyCondition={skyCondition} iconGeneratorMain = {iconGeneratorMain} className="fs-5"/>
             <PeriodsOfDay period={"evining"} degree={evening} rainChance={eveningR} skyCondition={skyCondition} iconGeneratorMain = {iconGeneratorMain}/>
             <PeriodsOfDay period={"over night"} degree={overNight} rainChance={overNightR} skyCondition={skyCondition} iconGeneratorMain = {iconGeneratorMain} className="fs-5"/>
          


          {!weatherTodayDetailsComponentToggler && <span className="d-flex my-5 align-items-center text-muted fw-light fs-6 text-uppercase pointer" onClick={weatherToggler}>
            <FontAwesomeIcon icon={solidIcons.faPlus}  className='my-2 mx-2'/>
            more details ...
          </span>}

          {weatherTodayDetailsComponentToggler && <span className="d-flex my-5 align-items-center text-muted fw-light fs-6 text-uppercase pointer" onClick={weatherToggler}>
            <FontAwesomeIcon icon={solidIcons.faMinus}  className='my-2 mx-2'/>
            less details ...
          </span>}
        </div>
           }
        </div>
      
    )
}

export default DetailCompnonet;