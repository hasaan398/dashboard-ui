import React from "react";
import "./card-1.css";

export function Card() {
    return (
        <div className="side-card">
            <h3>Visitors</h3>
            <h3>345,678</h3>
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

export default Card1;