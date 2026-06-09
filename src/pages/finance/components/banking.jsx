import React from "react";
import "./banking.css";

export default function CardSection() {
  return (
    <div className="container-fluid mt-4">
      <div className="row ">

        {/* LEFT CARD */}
        <div className="col-lg-7">
          <h3 className="section-title">My Card</h3>

          <div className="bank-card">
            <div className="card-circles">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>

            <div className="card-number">
              4444 55454 5454 1234
            </div>

            <div className="card-balance">
              <p>Balance</p>
              <h1>$4811,21</h1>
            </div>

            <div className="yellow-shape"></div>
            <div className="orange-shape"></div>
          </div>
        </div>

        {/* RIGHT TRANSFER */}
        <div className="col-lg-5">
          <h3 className="section-title">Quick Transfer</h3>

          <div className="transfer-box">

            <div className="users">
              <div className="user">
                <div className="avatar"></div>
                <span>Tony</span>
              </div>

              <div className="user">
                <div className="avatar"></div>
                <span>Karen</span>
              </div>

              <div className="user">
                <div className="avatar"></div>
                <span>Jordan</span>
              </div>

              <div className="user">
                <div className="avatar add-user">+</div>
              </div>
            </div>

            <div className="amount-box">
              <label>Amount</label>
              <input type="text" value="$100" readOnly />
            </div>

            <button className="transfer-btn">
              Transfer ➤
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}