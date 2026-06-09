import React, { useState } from "react";
import "./invoicing1.css";
import { invoices as invoiceData } from "../../../components/data";

export default function Invoicing1() {
  const [invoices] = useState(invoiceData);

  return (
    <>
      <div className="invoicing-page">

        {/* LEFT */}
        <div className="invoicing-left">

          <div className="d-flex justify-content-between align-items-center">
            <h1>Invoicing</h1>
            <button
              className="btn btn-light d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#invoicePanel"
            >
              ☰
            </button>
          </div>

          {/* Stats Cards */}
          <div className="invoice-stats">
            <div className="stat-card">
              <h3>1234</h3>
              <span>Sent</span>
              <p>+10% <small>this week</small></p>
            </div>
            <div className="stat-card">
              <h3>654</h3>
              <span>Pending</span>
              <p>+10% <small>this week</small></p>
            </div>
            <div className="stat-card">
              <h3 className="yellow">765</h3>
              <span>Unpaid</span>
              <p>+10% <small>this week</small></p>
            </div>
            <div className="stat-card">
              <h3 className="green">456</h3>
              <span>Paid</span>
              <p>+10% <small>this week</small></p>
            </div>
          </div>

          {/* Table */}
          <div className="invoice-table-section">
            <h6>Latest Invoice</h6>
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv, i) => (
                  <tr key={i}>
                    <td>{inv.id}</td>
                    <td>{inv.date}</td>
                    <td>{inv.amount}</td>
                    <td>{inv.dueDate}</td>
                    <td>
                      <span className={`status-badge ${inv.status === "Paid" ? "paid" : "unpaid"}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td>
                      <span className="table-actions">⚙ •••</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="invoice-pagination">
              <span>Showing 1-5 from 100</span>
              <div className="pages">
                <button>‹</button>
                <button className="active-page">1</button>
                <button>2</button>
                <button>3</button>
                <button>›</button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - desktop */}
        <div className="invoicing-right d-none d-lg-flex flex-column">

          <div className="my-card">
            <div className="card-top">
              <span>Visa</span>
              <span>•••• •••• •••• 1234</span>
            </div>
            <p>Nella Vita</p>
            <div className="card-bottom">
              <div>
                <small>Balance</small>
                <h4>$4811.21</h4>
              </div>
              <div className="toggle-btn">
                <div className="toggle active"></div>
              </div>
            </div>
          </div>

          <div className="send-invoice">
            <h6>Send Invoices</h6>
            <div className="tabs">
              <button className="tab active-tab">Important</button>
              <button className="tab">Socials</button>
            </div>
            <label>Region</label>
            <select className="invoice-select">
              <option>Select from list</option>
            </select>
            <label>Amount</label>
            <div className="invoice-input">
              <span>$</span>
              <input type="text" placeholder="Insert amount" />
            </div>
            <label>Reference</label>
            <input type="text" placeholder="Enter reference here" className="invoice-ref" />
            <button className="confirm-btn">Confirm</button>
          </div>

        </div>
      </div>

      {/* OFFCANVAS - mobile */}
      <div
        className="offcanvas offcanvas-end"
        id="invoicePanel"
        style={{ width: "300px", backgroundColor: "#F5EFFC" }}
      >
        <div className="offcanvas-header">
          <h5>My Card</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas" />
        </div>
        <div className="offcanvas-body">
          <div className="my-card mb-3">
            <div className="card-top">
              <span>Visa</span>
              <span>•••• •••• •••• 1234</span>
            </div>
            <p>Nella Vita</p>
            <div className="card-bottom">
              <div>
                <small>Balance</small>
                <h4>$4811.21</h4>
              </div>
            </div>
          </div>

          <div className="send-invoice">
            <h6>Send Invoices</h6>
            <label>Region</label>
            <select className="invoice-select">
              <option>Select from list</option>
            </select>
            <label>Amount</label>
            <div className="invoice-input">
              <span>$</span>
              <input type="text" placeholder="Insert amount" />
            </div>
            <label>Reference</label>
            <input type="text" placeholder="Enter reference here" className="invoice-ref" />
            <button className="confirm-btn">Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}