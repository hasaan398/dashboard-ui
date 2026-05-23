import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";
import content from "./assets/content.png";
import rightcontent from "./assets/rightcontent.png";

function App() {
  return (
    <>
      <Sidebar />
      <Header />

      <h1>Dashboard</h1>

      <div className="main-content">
        <div className="content">
          <img src={content} alt="content" />
        </div>

        <div className="right-side">
          <img src={rightcontent} alt="content" />
        </div>
      </div>
    </>
  );
}

export default App;