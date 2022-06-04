import React, { useContext } from "react";
import { dataGrapperContext } from "../../../App";
import "./index.css";

let AdvancedReprtComponent = () => {
  const dataGr = useContext(dataGrapperContext);
  const { dataFinalHolder } = dataGr;
  if (dataFinalHolder.forecast) {
    var {
      maxwind_kph,
      uv,
      totalprecip_in,
      mintemp_c,
      maxtemp_c,
      avghumidity,
      avgvis_km,
      daily_will_it_rain,
      daily_chance_of_rain,
      daily_will_it_snow,
      daily_chance_of_snow,
      avgtemp_c,
    } = dataFinalHolder.forecast.forecastday[0].day;
    var {country,name} = dataFinalHolder.location
  }

  return (
    <section className="container my-2 my-md-5 px-1 px-md-4">
      <div className="fs-3 mx-2 my-5">
        <h2 className="text-uppercase  text-sky">
          advanced weather report for{" "}
          <span className="text-capitalize text-muted">{name} , {country}</span>
        </h2>
      </div>
      <div className="bd-example  table-responsive">
        <table className="table table-borderless text-muted">
          <tbody>
            <tr>
              <td>Average Humidety</td>
              <td>{avghumidity}</td>
              <td>Average VIS</td>
              <td>{avgvis_km} km</td>
              <td>Average Temp</td>
              <td>{avgtemp_c}</td>
            </tr>
            <tr>
              <td>Min Temp</td>
              <td>{mintemp_c}</td>
              <td>Max Temp</td>
              <td>{maxtemp_c}</td>
              <td>Total Precip</td>
              <td>{totalprecip_in} in</td>
            </tr>
            <tr>
              <td>Chance of Rain</td>
              <td>{daily_chance_of_rain} %</td>
              <td>Chance of Snow</td>
              <td>{daily_chance_of_snow} %</td>
              <td>Will it Rain</td>
              <td>{daily_will_it_rain} %</td>
            </tr>
            <tr>
              <td>Will it snow</td>
              <td>{daily_will_it_snow} %</td>
              <td>UV</td>
              <td>{uv}</td>
              <td>Max Wind</td>
              <td>{maxwind_kph} kph</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdvancedReprtComponent;
