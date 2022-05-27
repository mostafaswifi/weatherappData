import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import logo from '../../../assets/imgs/weaZer-logos.jpeg'
import { NavLink } from "react-router-dom";
let SearchBar = () => {
    return(
        <section
        className="navbar navbar-expand-lg sticky-top pb-0 bg-white"
        aria-label="Top nav bar"
      >
        <div className="container">
          <NavLink
            className="navbar-brand d-flex align-items-center justify-content-between justify-content-md-start flex-grow-2"
            to="/"
          >
            <img
              className="img-fluid mx-1 mx-md-3 logo"
              src={logo}
              alt="logo"
            />
            <span className="slogan text-sky text-uppercase fs-6"
              >sky limit accurecy</span
            >
          </NavLink>
  
          <div className="d-flex flex-md-nowrap flex-wrap-reverse flex-grow-1 my-3">
            <form role="search" className="d-flex flex-grow-1 form-control my-3">
              <input
                className="border-0 flex-grow-1 h-100"
                type="search"
                placeholder="Search By City Name"
                aria-label="Search"
              />
              <FontAwesomeIcon icon={solidIcons.faMagnifyingGlass}  className='text-sky my-auto'/>
            </form>
            <div
              className="d-none d-sm-flex d-none d-sm-flex align-items-center mx-0 mx-md-5"
            >
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-language text-sky fs-4 fw-light"></i>
                <FontAwesomeIcon icon={solidIcons.faLanguage}  className='text-sky  fs-4 fw-light'/>
              </div>
              <select name="lang" id="lang" className="text-sky">
                <option value="us">US</option>
                <option value="fr">FR</option>
                <option value="ar">عربي</option>
              </select>
            </div>
            <div className="d-none d-sm-flex align-items-center">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={solidIcons.faTemperatureLow}  className='text-sky  fs-4 fw-light'/>
              </div>
              <select name="temp" id="temp" className="text-sky">
                <option value="c">C °</option>
                <option value="f">F °</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    )
};

export default SearchBar