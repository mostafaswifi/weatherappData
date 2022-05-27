import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import './index.css';

let DetailCompnonet = () => {
    return (
      
                   <div className="col-md-6 map d-flex flex-column justify-content-between">
          <h2 className="text-muted  text-capitalize fs-2">today's forcast in <span className="text-sky">cairo , egypt</span> </h2>
          <div className="row my-2 my-md-5 justify-content-center justify-content-md-start text-capitalize">
           
            <div className="col d-flex flex-column">
              <p className="text-sky fw-bold text-nowrap">
              morning
              </p>
              <span>20°</span>
              <div className="d-flex justify-content-start">
              <FontAwesomeIcon icon={solidIcons.faCloudSun}  className=' my-2 justify-content-start'/>
            </div>
              <span>10%</span>
            </div>

            <div className="col d-flex flex-column">
              <p className="text-sky fw-bold text-nowrap">
              after noon
              </p>
              <span>25°</span>
              <div className="d-flex justify-content-start">
                <FontAwesomeIcon icon={solidIcons.faSun}  className='my-2 justify-content-start'/>
            </div>
              <span>0%</span>
            </div>

            <div className="col d-flex flex-column">
              <p className="text-sky fw-bold text-nowrap">
              evining
              </p>
              <span>15°</span>
              <div className="d-flex justify-content-start">
                <FontAwesomeIcon icon={solidIcons.faCloudSun}  className='my-2 justify-content-start'/>
            </div>
              <span>11%</span>
            </div>

            <div className="col d-flex flex-column">
              <p className="text-sky fw-bold text-nowrap">
              over night
              </p>
              <span>14°</span>
              <div className="d-flex justify-content-start">
              <FontAwesomeIcon icon={solidIcons.faCloudSun}  className='my-2 justify-content-start'/>
            </div>
              <span>10%</span>
            </div>
          </div>
          <span className="d-flex align-items-center text-muted fw-light fs-6 text-uppercase">
            <FontAwesomeIcon icon={solidIcons.faPlus}  className='my-2 mx-2'/>
            more details ...
          </span>
        </div>
      
    )
}

export default DetailCompnonet;