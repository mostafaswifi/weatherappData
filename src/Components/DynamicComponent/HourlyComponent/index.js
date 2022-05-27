import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import './index.css';

let HourlyComponent = () => {
    return (

        <section className="container my-3 my-md-5 px-4">
        <h2>Hourly Weather <span className="text-sky text-capitalize">cairo , egypt </span> </h2>
        <h6 className="text-muted">Wednesday, May 25</h6>
      <div className="accordion my-5" id="hourlyWeatherAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="aa1">
              <button className="accordion-button fs-5 d-flex text-sky" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true" aria-controls="a1">
                <span className="me-3">8am</span>
                <span className="me-3">72°</span>
                <span className="me-3">
                  <FontAwesomeIcon icon={solidIcons.faCloud}/>
                  Cloudy
                </span>
              </button>
            </h2>
            <div id="a1" className="accordion-collapse collapse show" aria-labelledby="aa1" data-bs-parent="#hourlyWeatherAccordion">
              <div className="accordion-body text-muted p-1 p-md-3">
                  <div className="container mx-1 mx-md-3 p-1">
                      <div className="row">
                          <div className="col-4 d-flex flex-nowrap justify-content-center">
                              <div className="d-flex px-2">
                                  <FontAwesomeIcon icon={solidIcons.faTemperatureHalf}  className='mt-1'/>
                              </div>
                              <div className="d-flex flex-column">
                                  <p className="text-capitalize">feels like</p>
                                  <p>72°</p>
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
                                      <span>14mph</span>
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
                                  <p>97%</p>
                              </div>
                          </div>
                          
                          <div className="col-4 d-flex flex-nowrap justify-content-center">
                              <div className="d-flex px-2">
                                  <FontAwesomeIcon icon={solidIcons.faCertificate}  className='mt-1'/>
                              </div>
                              <div className="d-flex flex-column">
                                  <p className="text-capitalize">UV index</p>
                                  <p>0 of 10</p>
                              </div>
                          </div>

                          <div className="col-4 d-flex flex-nowrap justify-content-center">
                              <div className="d-flex px-2">
                                  <FontAwesomeIcon icon={solidIcons.faCloud}  className='mt-1'/>
                              </div>
                              <div className="d-flex flex-column">
                                  <p className="text-capitalize">condition</p>
                                  <p className="text-capitalize">clear</p>
                              </div>
                          </div>

                          <div className="col-4 d-flex flex-nowrap justify-content-center">
                              <div className="d-flex px-2">
                                  <i className="fa-solid fa-cloud-showers-water mt-1"></i>
                                  <FontAwesomeIcon icon={solidIcons.faCloudShowersWater}  className='mt-1'/>
                              </div>
                              <div className="d-flex flex-column">
                                  <p className="text-capitalize">rain chance</p>
                                  <p>0</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

        





        </div>
    </section>

    )
}

export default HourlyComponent