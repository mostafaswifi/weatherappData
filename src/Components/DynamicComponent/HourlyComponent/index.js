import React,{useContext} from "react";
import {dataGrapperContext} from "../../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import './index.css';

let HourlyComponent = () => {


    const dataGr = useContext(dataGrapperContext);
    const { dataFinalHolder } = dataGr;
   

    if (dataFinalHolder.forecast && dataFinalHolder.location){
    var {country,name} = dataFinalHolder.location;
    var {hour} = dataFinalHolder.forecast.forecastday[0];
    var {last_updated} =   dataFinalHolder.current
     var r = new Date (last_updated.split(" ").shift()).toString()
   
}
return (
    
    <section className="container my-3 my-md-5 px-4">
        <h2>Hourly Weather <span className="text-sky text-capitalize">{name} , {country} </span> </h2>
        <h6 className="text-muted">{r}</h6>
        <div className="accordion my-2" id="dbp" >
        {hour? hour.map((h,index) =>{
            
            return(
                
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`w${index}`}>
                    <button className="accordion-button fs-5 d-flex text-sky" type="button" data-bs-toggle="collapse" data-bs-target={`#d${index}`} aria-expanded="true" aria-controls={`d${index}`}>
                    <FontAwesomeIcon icon={solidIcons.faBriefcaseClock}  className='text-sky me-2'/>
                      <span className="me-3">{ index++ +` : 00` } {index<13?"am":"pm"}</span>
                    <FontAwesomeIcon icon={solidIcons.faTemperature0}  className='text-sky me-2'/>
                      <span className="me-3">{h.temp_c}°</span>
                    </button>
                  </h2>
                  <div id={`d${index - 1}`} className="accordion-collapse collapse" aria-labelledby={`w${index - 1 }`} data-bs-parent="#dbp">
                    <div className="accordion-body text-muted p-1 p-md-3">
                        <div className="container mx-1 mx-md-3 p-1">
                            <div className="row">
                                <div className="col-4 d-flex flex-nowrap justify-content-center">
                                    <div className="d-flex px-2">
                                        <FontAwesomeIcon icon={solidIcons.faTemperatureHalf}  className='mt-1'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-capitalize">feels like</p>
                                        <p>{h.feelslike_c}°</p>
                                    </div>
                                </div>
                                <div className="col-4 d-flex flex-nowrap justify-content-center">
                                    <div className="d-flex px-2">
                                        <FontAwesomeIcon icon={solidIcons.faWind}  className='mt-1'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-capitalize">wind</p>
                                        <p>
                                            <span className="text-uppercase">se</span>
                                            <span>{h.wind_kph}mph</span>
                                        </p>
                                    </div>
      
                                </div>
      
                                <div className="col-4 d-flex flex-nowrap justify-content-center">
                                    <div className="d-flex px-2">
                                        <i className="fa-solid fa-water mt-1"></i>
                                        <FontAwesomeIcon icon={solidIcons.faWater}  className='mt-1'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-capitalize">humidety</p>
                                        <p>{h.humidity}%</p>
                                    </div>
                                </div>
                                
                                <div className="col-4 d-flex flex-nowrap justify-content-center">
                                    <div className="d-flex px-2">
                                        <FontAwesomeIcon icon={solidIcons.faCertificate}  className='mt-1'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-capitalize">UV index</p>
                                        <p>{h.uv} of 10</p>
                                    </div>
                                </div>
      
                                <div className="col-4 d-flex flex-nowrap justify-content-center">
                                    <div className="d-flex px-2">
                                        <FontAwesomeIcon icon={solidIcons.faCloud}  className='mt-1'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-capitalize">condition</p>
                                        <p className="text-capitalize">{h.condition.text}</p>
                                    </div>
                                </div>
      
                                <div className="col-4 d-flex flex-nowrap justify-content-center">
                                    <div className="d-flex px-2">
                                        <i className="fa-solid fa-cloud-showers-water mt-1"></i>
                                        <FontAwesomeIcon icon={solidIcons.faCloudShowersWater}  className='mt-1'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="text-capitalize">rain chance</p>
                                        <p>{h.chance_of_rain}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
      

            )
        }):null}
     </div>
    </section>

    )
}

export default HourlyComponent