import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
let NavBar = () => {
    return (
        <nav
        className="navbar navbar-expand-lg pt-0 my-2 my-md-5"
        aria-label="Eighth navbar example"
      >
        <div className="container px-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarsExample07"
          >
            <ul className="navbar-nav d-flex justify-content-start ms-2 mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center me-3">
                <FontAwesomeIcon icon={solidIcons.faCalendarDay}  className='text-sky'/>
                <NavLink className="nav-link" to="/">Today</NavLink>
              </li>
              <li className="nav-item d-flex align-items-center me-3">
                <FontAwesomeIcon icon={solidIcons.faHourglassStart}  className='text-sky'/>
                <NavLink className="nav-link" to="./Hourly">Hourly</NavLink>
              </li>
              <li className="nav-item d-flex align-items-center me-3">
                <FontAwesomeIcon icon={solidIcons.faCalendarDays}  className='text-sky'/>
                <NavLink className="nav-link" to="./3Days">3Days</NavLink>
              </li>
            </ul>
          </div>
  
          <div className="d-flex fs-1 shadow p-3">
            <div className="d-flex align-items-center text-sky mx-1 mx-md-4">
              <FontAwesomeIcon icon={solidIcons.faSun}  className=' mx-1 mx-md-2'/>
              <span className="fs-4 text-muted">81°</span>
            </div>
            <div className="d-flex align-items-center text-sky mx-1 mx-md-4">
              <FontAwesomeIcon icon={solidIcons.faLocationDot}  className='mx-1 mx-md-2'/>
              <span className="text-uppercase fs-4 text-muted">egypt</span>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default NavBar;