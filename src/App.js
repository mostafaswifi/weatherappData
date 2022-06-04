import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import MainLayout from "./Layouts/MainLayout";

export const dataGrapperContext = React.createContext();

function App() {
  const [dataFinal, setDataFinal] = useState([]);
  const [dataFinalHolder, setDataFinalHolder] = useState([]);
  useEffect(() => {
    let time = setTimeout(() => {
      setDataFinalHolder(dataFinal);
    }, 1200);

    return () => clearTimeout(time);
  }, [dataFinal, dataFinalHolder]);

  const dataGrapper = async (country) => {
    try {
      
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: `${country}`, days: `3` },
        headers: {
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          "X-RapidAPI-Key": "0087212ed6mshff45158872007abp13e6bcjsn30a0250621d1",
        },
      };
  
      const data = await (await axios.request(options)).data;
  
      setDataFinal(data);
    } catch (error) {
      return
    }
  };

  let currentLocation = () => {

    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      addresserGrapper(lat,lon)
    });

  }

  currentLocation()
var [address,setAddress] = useState('')
  let addresserGrapper = async (latitude,logtitude) => {
    var config = {
      method: 'get',
      url: `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${logtitude}&apiKey=a947b4e03ef445e487a2eca2168c3bcb`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
     
        setAddress(response.data.features[0].properties.country)

        let min =  response.data.features[0].properties.country
        
        return min
     
        
      })
    .catch(function (error) {
      console.log(error);
    });
  }
useEffect(() => {

  dataGrapper(address)
} , [address])

var currentdate = new Date();
var index = currentdate.getHours()

let skyCondition = (dayIndex,hourIndex) => {
  if(dataFinalHolder.forecast){
    return dataFinalHolder.forecast.forecastday[`${dayIndex}`].hour[`${hourIndex}`].condition.text
  }
}



let iconGeneratorMain = (condition) => {

  switch (condition) {
    case "Sunny":
     return <FontAwesomeIcon icon={solidIcons.faSun}  className=' fs-1 fw-bloder'/>
     
    case "Partly cloudy":
      return <FontAwesomeIcon icon={solidIcons.faCloudSun}  className=' fs-1 fw-bloder'/>

    case "Mostly cloudy":
      return <FontAwesomeIcon icon={solidIcons.faCloud}  className=' fs-1 fw-bloder'/>
    
    case "Light rain shower":
      return <FontAwesomeIcon icon={solidIcons.faCloudShowersHeavy}  className=' fs-1 fw-bloder'/>
    
    case "Light rain":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Heavy rain":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Light snow":
      return <FontAwesomeIcon icon={solidIcons.faSnowflake}  className=' fs-1 fw-bloder'/>

    case "Heavy snow":
      return <FontAwesomeIcon icon={solidIcons.faSnowflake}  className=' fs-1 fw-bloder'/>

    case "Light sleet":
      return <FontAwesomeIcon icon={solidIcons.faLightbulb}  className=' fs-1 fw-bloder'/>

    case "Heavy sleet":
      return <FontAwesomeIcon icon={solidIcons.faLightbulb}  className=' fs-1 fw-bloder'/>

    case "Light rain and snow":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Heavy rain and snow":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Clear":
      return <FontAwesomeIcon icon={solidIcons.faSun}  className=' fs-1 fw-bloder'/>

    case "Cloudy" :
      return <FontAwesomeIcon icon={solidIcons.faCloud}  className=' fs-1 fw-bloder'/>

    case "Rainy" :
      return <FontAwesomeIcon icon={solidIcons.faCloudShowersHeavy}  className=' fs-1 fw-bloder'/>

    case "Snowy" :
      return <FontAwesomeIcon icon={solidIcons.faSnowflake}  className=' fs-1 fw-bloder'/>

    case "Mist" :
      return <FontAwesomeIcon icon={solidIcons.faCloud}  className=' fs-1 fw-bloder'/>

    default:
      return <FontAwesomeIcon icon={solidIcons.faWater}  className=' fs-1 fw-bloder'/>

  }
}



var me = skyCondition(0,index)
let iconGenerator = () => {

  switch (me) {
    case "Sunny":
     return <FontAwesomeIcon icon={solidIcons.faSun}  className=' fs-1 fw-bloder'/>
     
    case "Partly cloudy":
      return <FontAwesomeIcon icon={solidIcons.faCloudSun}  className=' fs-1 fw-bloder'/>

    case "Mostly cloudy":
      return <FontAwesomeIcon icon={solidIcons.faCloud}  className=' fs-1 fw-bloder'/>
    
    case "Light rain shower":
      return <FontAwesomeIcon icon={solidIcons.faCloudShowersHeavy}  className=' fs-1 fw-bloder'/>
    
    case "Light rain":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Heavy rain":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Light snow":
      return <FontAwesomeIcon icon={solidIcons.faSnowflake}  className=' fs-1 fw-bloder'/>

    case "Heavy snow":
      return <FontAwesomeIcon icon={solidIcons.faSnowflake}  className=' fs-1 fw-bloder'/>

    case "Light sleet":
      return <FontAwesomeIcon icon={solidIcons.faLightbulb}  className=' fs-1 fw-bloder'/>

    case "Heavy sleet":
      return <FontAwesomeIcon icon={solidIcons.faLightbulb}  className=' fs-1 fw-bloder'/>

    case "Light rain and snow":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Heavy rain and snow":
      return <FontAwesomeIcon icon={solidIcons.faCloudRain}  className=' fs-1 fw-bloder'/>

    case "Clear":
      return <FontAwesomeIcon icon={solidIcons.faSun}  className=' fs-1 fw-bloder'/>

    case "Cloudy" :
      return <FontAwesomeIcon icon={solidIcons.faCloud}  className=' fs-1 fw-bloder'/>

    case "Rainy" :
      return <FontAwesomeIcon icon={solidIcons.faCloudShowersHeavy}  className=' fs-1 fw-bloder'/>

    case "Snowy" :
      return <FontAwesomeIcon icon={solidIcons.faSnowflake}  className=' fs-1 fw-bloder'/>

    case "Mist" :
      return <FontAwesomeIcon icon={solidIcons.faCloud}  className=' fs-1 fw-bloder'/>

    default:
      return <FontAwesomeIcon icon={solidIcons.faWater}  className=' fs-1 fw-bloder'/>

  }
}



  return (
    <React.StrictMode>
      <div className="App">
        <dataGrapperContext.Provider value={{ dataFinalHolder, dataGrapper , iconGenerator,skyCondition , iconGeneratorMain}}>
          <MainLayout />
        </dataGrapperContext.Provider>
      </div>
    </React.StrictMode>
  );
}

export default App;
