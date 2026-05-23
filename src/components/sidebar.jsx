import React from 'react'
import './sidebar.css'
import logo from "../assets/logo.png";
import email from "../assets/email.png";
import contact from "../assets/contact.png";
import crypto from "../assets/crypto.png";
import kanban from "../assets/kanban.png";
import invoicing from "../assets/invoicing.png";
import dolar from "../assets/dolar.png";
import pye from "../assets/pye.png";
import home from "../assets/home.png";


function Sidebar() {
  return (
    

    <div className="sidebar">

      <div className="card">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>


<div className="vector">
<div>
  <img src={home} alt="vector" />
</div>

<div>
  <img src ={email} alt="email" />
</div>

<div>
  <img src={contact} alt="contact" />
</div>

<div >
  <img src={crypto} alt="crypto" />
</div>

<div>
  <img src={kanban} alt="kanban" />
</div>

<div >
  <img src={invoicing} alt="invoice" />
</div>

<div>
  <img src={dolar} alt="vecto-1" />
</div>
 
 <div className="vector-2"> 
  <img src={pye} alt="vector-2" />
 </div>
 </div>
      </div>
    </div>
  
  );
}

export default Sidebar;