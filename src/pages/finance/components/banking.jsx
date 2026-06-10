import React, { useState } from "react";
import { transactions, savings } from "../../../components/data";
import cardImg from "../../../assets/card.png";
import profitsImg from "../../../assets/profits.png";
import "./banking.css";

export default function Finance() {
  const [transactionList] = useState(transactions);
  const [savingsList] = useState(savings);

  return (
    <div className="finance-page">
      <h1>Banking</h1>

      {/* TOP SECTION */}
      <div className="finance-top">

        {/* My Card */}
    <div className="finance-card-section">
  <img src={cardImg} alt="card" style={{width:"100%", borderRadius:"16px"}} />
</div>
        {/* Quick Transfer */}
        <div className="quick-transfer">
          <h6>Quick Transfer</h6>
          <div className="transfer-box">
            <div className="transfer-avatars">
              <div className="t-avatar">T<p>Tony</p></div>
              <div className="t-avatar">K<p>Karen</p></div>
              <div className="t-avatar">J<p>Jordan</p></div>
              <div className="t-avatar add">+</div>
            </div>
            <div className="transfer-amount">
              <label>Amount</label>
              <input type="text" defaultValue="$100" />
            </div>
            <button className="transfer-btn">Transfer ➤</button>
          </div>
        </div>

        {/* Profits */}
        <div className="profits-section">
          <img src={profitsImg} alt="profits" style={{width:"100%", borderRadius:"12px"}} />
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="finance-bottom">

        {/* Latest Transactions */}
        <div className="transactions-section">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6>Latest Transaction</h6>
            <span className="view-all">View all</span>
          </div>

          {transactionList.map(t => (
            <div key={t.id} className="transaction-item">
              <input type="checkbox" defaultChecked={t.checked} />
              <div className="transaction-info">
                <p>{t.name}</p>
                <small>{t.category}</small>
              </div>
              <span className="transaction-date">{t.date}</span>
              <span className="transaction-amount">{t.amount}</span>
              <span className="transaction-dots">•••</span>
            </div>
          ))}
        </div>

        {/* Savings */}
        <div className="savings-section">
          <h6>Savings</h6>

          {savingsList.map(s => (
            <div key={s.id} className="saving-item">
              <div className="saving-header">
                <div className="d-flex align-items-center gap-2">
                  <span
                    className="saving-dot"
                    style={{background: s.color}}
                  ></span>
                  <span>{s.name}</span>
                </div>
                <span>•••</span>
              </div>
              <div className="saving-bar">
                <div
                  className="saving-progress"
                  style={{
                    width: `${(s.current / s.total) * 100}%`,
                    background: s.color
                  }}
                ></div>
              </div>
              <div className="saving-amounts">
                <span>{s.current.toLocaleString()} / ${s.total.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}