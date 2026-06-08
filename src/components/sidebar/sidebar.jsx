import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

import logo from "../../assets/logo.png";
import email from "../../assets/email.png";
import contact from "../../assets/contact.png";
import crypto from "../../assets/crypto.png";
import kanban from "../../assets/kanban.png";
import invoicing from "../../assets/invoicing.png";
import dolar from "../../assets/dolar.png";
import pye from "../../assets/pye.png";
import home from "../../assets/home.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="card">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="vector">

          
          <Link to="/">
            <img src={home} alt="home" />
          </Link>

          
          <Link to="/email">
            <img src={email} alt="email" />
          </Link>

          
          <Link to="/contact">
            <img src={contact} alt="contact" />
          </Link>

          
          <Link to="/crypto">
            <img src={crypto} alt="crypto" />
          </Link>
        
          <Link to="/kanban">
            <img src={kanban} alt="kanban" />
          </Link>

      
          <Link to="/invoicing">
            <img src={invoicing} alt="invoice" />
          </Link>

          
          <Link to="/finance">
            <img src={dolar} alt="dollar" />
          </Link>


          <div className="vector-2">
            <Link to="/analytics">
              <img src={pye} alt="pie" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;