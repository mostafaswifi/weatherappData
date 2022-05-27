import React from "react";
import './index.css';

let AdvancedReprtComponent = () => {
    return (
        <section className="container my-2 my-md-5 px-4">

        <div className="fs-3 mx-2 my-5">
          <h2 className="text-uppercase text-sky">advanced weather report for <span className="text-capitalize text-muted">cairo , egypt</span></h2>
        </div>
        <div className="bd-example  table-responsive">
          <table className="table table-borderless text-muted">
             
          <tbody>
            <tr>
              <td>Average Humidety</td>
              <td>13.2</td>
              <td>Average VIS</td>
              <td>25</td>
              <td>Average Tepm</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Min Temp</td>
              <td>10</td>
              <td>Max Temp</td>
              <td>10</td>
              <td>Total Precip</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Chance of Rain</td>
              <td>15</td>
              <td>Chance of Snow</td>
              <td>0</td>
              <td>Will it Rain</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Will it snow</td>
              <td>15</td>
              <td>Min Wind</td>
              <td>30</td>
              <td>Max Wind</td>
              <td>60</td>
            </tr>
  
          </tbody>
        
          </table>
        </div>
        
      </section>
    )
}

export default AdvancedReprtComponent;