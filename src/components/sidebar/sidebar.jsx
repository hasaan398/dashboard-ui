import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="card">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="vector">

          <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
            <img src={home} alt="home" />
          </Link>

          <Link to="/email" className={location.pathname === "/email" ? "active-link" : ""}>
            <img src={email} alt="email" />
          </Link>

          <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>
            <img src={contact} alt="contact" />
          </Link>

          <Link to="/crypto" className={location.pathname === "/crypto" ? "active-link" : ""}>
            <img src={crypto} alt="crypto" />
          </Link>

          <Link to="/kanban" className={location.pathname === "/kanban" ? "active-link" : ""}>
            <img src={kanban} alt="kanban" />
          </Link>

          <Link to="/invoicing" className={location.pathname === "/invoicing" ? "active-link" : ""}>
            <img src={invoicing} alt="invoice" />
          </Link>

          <Link to="/finance" className={location.pathname === "/finance" ? "active-link" : ""}>
            <img src={dolar} alt="dollar" />
          </Link>

          <div className="vector-2">
            <Link to="/analytics" className={location.pathname === "/analytics" ? "active-link" : ""}>
              <img src={pye} alt="pie" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;