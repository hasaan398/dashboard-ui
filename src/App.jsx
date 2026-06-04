import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";
// import contact from "./assets/contact.png";
import emailpage from "./assets/emailpage.png";
import mailpage from "./assets/mailpage.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import content from "./assets/content.png";
import Card1, { Card, Card2 , Card3 } from "./components/card-1";
import bag from "./assets/bag.png";
import invest from "./assets/invest.png";
import asset from "./assets/asset.png";
import sideproject from "./assets/sideproject.png";
import "./components/card-1.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <div className="dashboard-left">

        <h1 className="dashboard-title">Dashboard</h1>

<div className="row  gx-3 ">

   <div className="col-5">

      <div className="row ">
        <div className="col-md-6">
          <Card1 icon={bag} title="Project" value="127" />
        </div>

        <div className="col-md-6 ">
          <Card1 icon={invest} title="Investment" value="932" />
        </div>

        <div className="col-md-6">
          <Card1 icon={asset} title="Assets" value="845" />
        </div>

        <div className="col-md-6 ">
          <Card1 icon={sideproject} title="Users" value="456" />
        </div>
      </div>

   </div>

   <div className="col-4">
                              <Card />
   </div>

</div>
      </div>
                              <Card2 />
      {/* <div className="dashboard-right"> */}
                               <Card3/>
      {/* </div> */}

    </div>
  );
}

function Email() {
  return (
    <>
      <h1>Email</h1>
      {/* <img src={mailpage} alt="mail" />
      <img src={emailpage} alt="email list" /> */}
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>

    </>
  );
}

function Crypto() {
  return (
    <>
      <h1>Crypto</h1>
      <img src="https://via.placeholder.com/150" />
    </>
  );
}

function Kanban() {
  return (
    <>
      <h1>Kanban</h1>
    </>
  );
}

function Invoicing() {
  return (
    <>
      <h1>Invoicing</h1>
    </>
  );
}

function Finance() {
  return (
    <>
      <h1>Finance</h1>
    </>
  );
}

function Analytics() {
  return (
    <>
      <h1>Analytics</h1>

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
          <Sidebar />
    
        <div className="main-area">
              <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/email" element={<Email />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/invoicing" element={<Invoicing />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
 
    </BrowserRouter>
 


 
  );
}

export default App;

