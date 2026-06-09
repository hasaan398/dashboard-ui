import React from "react";
import "./dashboard.css";
import Card1, { Card, Card2, Card3 } from "../../components/card/card-1";
import UserReviews from "../../components/reviews/reviews";
import bag from "../../assets/bag.png";
import invest from "../../assets/invest.png";
import asset from "../../assets/asset.png";
import sideproject from "../../assets/sideproject.png";
import "../../components/card/card-1.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard-layout">

        {/* LEFT SIDE */}
        <div className="dashboard-left">

          <div className="d-flex justify-content-between align-items-center">
            <h1 className="dashboard-title">Dashboard</h1>

            {/* Mobile pe burger - sirf lg se choti screen pe dikhega */}
            <button
              className="btn  d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#rightPanel"
            >
              ☰
            </button>
          </div>

          <div className="row gx-3">

            {/* 4 cards */}
            <div className="col-md-7">
              <div className="row">
                <div className="col-xl-6">
                  <Card1 icon={bag} title="Project" value="127" />
                </div>
                <div className="col-xl-6">
                  <Card1 icon={invest} title="Investment" value="932" />
                </div>
                <div className="col-xl-6">
                  <Card1 icon={asset} title="Assets" value="845" />
                </div>
                <div className="col-xl-6">
                  <Card1 icon={sideproject} title="Users" value="456" />
                </div>
              </div>
            </div>

            {/* Visitors card */}
            <div className="col-xl-5 col-md-7">
              <Card />
            </div>

          </div>

          <Card2 />
        </div>

        
        <div className="dashboard-right d-none d-lg-block">
          <Card3 />
        </div>

      </div>

    
      <div
        className="offcanvas offcanvas-end"
        id="rightPanel"
        style={{ width: "300px" }}
      >
    
        <div className="offcanvas-body p-0">
          <Card3 />
        </div>
      </div>

      {/* USER REVIEWS */}
      <UserReviews />
    </>
  );
}

export default Dashboard;