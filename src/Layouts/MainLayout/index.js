import React from "react";
import NavBar from "../../Components/DynamicComponent/NavBar";
import SearchBar from "../../Components/DynamicComponent/SearchBar";
import HomeLayout from "../HomeLayout";
import HourlyLayout from "../HourlyLayout";
import DaysLayout from "../DaysLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

let MainLayout = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="container">
          <SearchBar />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/Hourly" element={<HourlyLayout />} />
            <Route path="/3Days" element={<DaysLayout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MainLayout;
