import React from "react";
import './index.css';

let PeriodsOfDay = ({period,degree,rainChance,skyCondition,iconGeneratorMain}) => {
var morning = skyCondition(0,0)
var afternoon = skyCondition(0,11)
var evening = skyCondition(0,20)
var overNight = skyCondition(0,23)

let innerDrawer = (time) => {
 if (time === "morning") {
    return iconGeneratorMain(morning)
 }

 if (time === "after noon") {
  return iconGeneratorMain(afternoon)
}

if (time === "evining") {
  return iconGeneratorMain(evening)
}

if (time === "over night") {
  return iconGeneratorMain(overNight)
}
}

    
    return(
        
        <div className="col d-flex flex-column">
        <p className="text-sky fw-bold text-nowrap">
        {period}
        </p>
        <span>{degree}°</span>
        <div className="d-flex justify-content-start">

        <div className="my-2 justify-content-start sizer">
        {innerDrawer(period)}
        </div>
      </div>
        <span>{rainChance}%</span>
      </div>
    )
}

export default PeriodsOfDay;