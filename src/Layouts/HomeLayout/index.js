import React from "react";
import TodayForcastComponent from "../../Components/DynamicComponent/TodayForcastComponent";
import WeatherTodayDetailsComponent from "../../Components/DynamicComponent/WeatherTodayDetailsComponent";
import AdvancedReprtComponent from "../../Components/DynamicComponent/AdvancedReprtComponent";
import "./index.css";

let HomeLayout = () => {
  return (
    <div className="container">
      <TodayForcastComponent />
      {true && <WeatherTodayDetailsComponent />}
      {true && <AdvancedReprtComponent />}
    </div>
  );
};

export default HomeLayout;
