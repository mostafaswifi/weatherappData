import React,{useState} from "react";
import TodayForcastComponent from "../../Components/DynamicComponent/TodayForcastComponent";
import WeatherTodayDetailsComponent from "../../Components/DynamicComponent/WeatherTodayDetailsComponent";
import AdvancedReprtComponent from "../../Components/DynamicComponent/AdvancedReprtComponent";
import "./index.css";

let HomeLayout = () => {

  var [weatherTodayDetailsComponentToggler,setWatherTodayDetailsComponentToggler] = useState(false)
  var  [advancedReprtComponentToggler,setAdvancedReprtComponentToggler] = useState(false)

  let weatherToggler = () =>{
    setWatherTodayDetailsComponentToggler(!weatherTodayDetailsComponentToggler)
    
  }

  let advancedToggler = () =>{
    setAdvancedReprtComponentToggler(!advancedReprtComponentToggler)
  }
  return (
    <div className="container p-0">
      <TodayForcastComponent weatherToggler={weatherToggler} weatherTodayDetailsComponentToggler={weatherTodayDetailsComponentToggler}/>
      { weatherTodayDetailsComponentToggler && <WeatherTodayDetailsComponent advancedToggler={advancedToggler} advancedReprtComponentToggler={advancedReprtComponentToggler}/>}
      { advancedReprtComponentToggler && <AdvancedReprtComponent />}
    </div>
  );
};

export default HomeLayout;
