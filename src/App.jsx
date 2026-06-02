import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";
// import contact from "./assets/contact.png";
import emailpage from "./assets/emailpage.png";
import mailpage from "./assets/mailpage.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import content from "./assets/content.png";
import rightcontent from "./assets/rightcontent.png";
import Card1, { Card } from "./components/card-1";
import bag from "./assets/bag.png";
import invest from "./assets/invest.png";
import asset from "./assets/asset.png";
import sideproject from "./assets/sideproject.png";


function Dashboard() {
  return (
    <>

        <div className="main-content">

          <div className="content">

            <h1>Dashboard</h1>

            <div className="cards-container">

              <Card1 icon={bag} title="Project" value="127" />

              <Card1 icon={invest} title="Investment" value="932" />

              <Card1 icon={asset} title="Assets" value="845" />

              <Card1 icon={sideproject} title="Users" value="456" />

            </div>

          </div>
{/* 
          <div className="side-card">
            <Card />

          </div> */}

          <div className="right-side">
            <img src={rightcontent} alt="content" />
          </div>

        </div>

    </>
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
              <Card1></Card1>

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

