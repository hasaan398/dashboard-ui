import React from "react";
import "./crypto1.css";

import overviewImg from "../../../assets/overview.png";
import chartImg from "../../../assets/crypto chart.png";
import marketImg from "../../../assets/market activity.png";
import buysellImg from "../../../assets/buy & sell.png";
import summaryImg from "../../../assets/summary.png";
import profitImg from "../../../assets/profit.png";
import tradingImg from "../../../assets/recent trading.png";

export default function Crypto() {
  return (
    <>
      <div className="crypto-page">

        {/* LEFT */}
        <div className="crypto-left">

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>Crypto</h1>
            <button
              className="btn btn-light d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#cryptoPanel"
            >
              ☰
            </button>
          </div>

          <div className="crypto-overview">
            <img src={overviewImg} alt="overview" />
          </div>

          <div className="crypto-chart-box">
            <img src={chartImg} alt="chart" />
          </div>

          <div className="crypto-bottom">
            <div className="market-activity">
              <img src={marketImg} alt="market" />
            </div>
            <div className="buy-sell">
              <img src={buysellImg} alt="buy sell" />
            </div>
          </div>

        </div>

        {/* RIGHT - desktop pe */}
        <div className="crypto-right d-none d-lg-flex flex-column">
          <img src={summaryImg} alt="summary" style={{width:"100%", borderRadius:"12px"}} />
          <img src={profitImg} alt="profit" style={{width:"100%", borderRadius:"12px"}} />
          <img src={tradingImg} alt="trading" style={{width:"100%", borderRadius:"12px"}} />
        </div>

      </div>

      {/* OFFCANVAS - mobile pe */}
      <div
        className="offcanvas offcanvas-end"
        id="cryptoPanel"
        style={{ width: "300px", backgroundColor: "#F5EFFC" }}
      >
        <div className="offcanvas-header">
          <h5>Summary</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas" />
        </div>
        <div className="offcanvas-body">
          <img src={summaryImg} alt="summary" style={{width:"100%", borderRadius:"12px", marginBottom:"16px"}} />
          <img src={profitImg} alt="profit" style={{width:"100%", borderRadius:"12px", marginBottom:"16px"}} />
          <img src={tradingImg} alt="trading" style={{width:"100%", borderRadius:"12px"}} />
        </div>
      </div>

    </>
  );
}