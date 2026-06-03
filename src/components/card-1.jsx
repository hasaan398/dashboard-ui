import React from "react";
import "./card-1.css";
import chart from "../assets/chart.png";
import detail from "../assets/detail.png";
import chart1 from "../assets/chart1.png";
import userprofile from "../assets/userprofile.png";
import statistic from "../assets/statistic.png";
import chart2 from "../assets/chart2.png";
export function Card() {
  return (
    <div className="main-card">
      <div className="card">
        <div className="card-top">
          <h3>Visitors</h3>
          <h2>345,678</h2>
        </div>

        <img src={chart} alt="chart" />

      </div>
    </div>
  );
}
function Card1({ icon, title, value }) {
  return (


    <div className="dashboard-card">
      <div className="dashboard-card-left">
        <div className="dashboard-card-icon ">
          <img src={icon} alt={title} />
        </div>

        <span>{title}</span>
      </div>

      <h4>{value}</h4>
    </div>
  );
}

export function Card2() {
  return (
    <div className="details">

      <img src={detail} alt="detail" />

      <div className="chart">
        <img src={chart1} alt="chart1" />
      </div>

      <div className="row">
       
        <div className="tag col-4">
          <img src={userprofile} alt="user1" className="profile-img" />
        </div>

        <div className="tag col-4">
          <img src={statistic} alt="user2" className="statistic" />
        </div>


      </div>
    </div>
  );
}

export function Card3(){
  return(
      <div className="right-card">
    <div className="right">
      <h2>Server Status</h2>
      <img src={chart2} alt="chart2"/>
    </div>
  </div>
  );

}



export default Card1;
