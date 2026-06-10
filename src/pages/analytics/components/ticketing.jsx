import React, { useState } from "react";
import { tickets, todayEvents } from "../../../components/data";
import "./ticketing.css";

export default function Analytics() {
  const [ticketList] = useState(tickets);
  const [eventList] = useState(todayEvents);

  return (
    <>
      <div className="analytics-page">

        {/* LEFT */}
        <div className="analytics-left">

          <div className="d-flex justify-content-between align-items-center">
            <h1>Ticketing</h1>
            <button
              className="btn btn-light d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#analyticsPanel"
            >
              ☰
            </button>
          </div>

          {/* Stats */}
          <div className="ticket-stats">
            <div className="ticket-stat-card">
              <small>• Ticket Solds</small>
              <h3>8.900</h3>
              <p className="green">+0.5% than last month</p>
              <span>View more →</span>
            </div>
            <div className="ticket-stat-card">
              <small>• Ticket Refund</small>
              <h3>1234</h3>
              <p className="green">+0.5% than last month</p>
              <span>View more →</span>
            </div>
            <div className="ticket-stat-card">
              <small>• Total Sale</small>
              <h3>1123</h3>
              <p className="red">-0.5% than last month</p>
              <span>View more →</span>
            </div>
            <div className="ticket-stat-card">
              <small>• Target Sold</small>
              <h3>765/1000</h3>
              <p className="red">-0.5% than last month</p>
              <span>View more →</span>
            </div>
          </div>

          {/* Table */}
          <div className="ticket-table-section">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6>Latest Transaction</h6>
              <span className="view-all-btn">View all</span>
            </div>

            <table className="ticket-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Event</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>File</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {ticketList.map(t => (
                  <tr key={t.id}>
                    <td><input type="checkbox" defaultChecked /></td>
                    <td>
                      <p style={{margin:0, fontWeight:600, fontSize:13}}>{t.event}</p>
                      <small style={{color:"#aaa", fontSize:11}}>{t.date}</small>
                    </td>
                    <td style={{fontSize:12, color:"#777"}}>{t.email}</td>
                    <td>
                      <span className={`ticket-status ${t.status === "Completed" ? "completed" : "pending"}`}>
                        • {t.status}
                      </span>
                    </td>
                    <td style={{fontSize:12, color:"#4F45B6"}}>📎 {t.file}</td>
                    <td style={{fontWeight:700, fontSize:13}}>{t.amount}</td>
                    <td style={{color:"#aaa"}}>•••</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT - desktop */}
        <div className="analytics-right d-none d-lg-flex flex-column">
          <div className="today-header">
            <h6>Today</h6>
            <small>Tuesday, 13th Apr, 2021</small>
          </div>

          {eventList.map(event => (
            <div
              key={event.id}
              className="event-card"
              style={{borderLeft: `4px solid ${event.color}`}}
            >
              <small>{event.time}</small>
              <div className="event-avatars">
                <div className="e-avatar">A</div>
                <div className="e-avatar">B</div>
                <div className="e-avatar">C</div>
              </div>
              <h6>{event.title}</h6>
              <p>{event.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* OFFCANVAS - mobile */}
      <div
        className="offcanvas offcanvas-end"
        id="analyticsPanel"
        style={{ width: "300px", backgroundColor: "#F5EFFC" }}
      >
        <div className="offcanvas-header">
          <h5>Today</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas" />
        </div>
        <div className="offcanvas-body">
          {eventList.map(event => (
            <div
              key={event.id}
              className="event-card mb-3"
              style={{borderLeft: `4px solid ${event.color}`}}
            >
              <small>{event.time}</small>
              <h6>{event.title}</h6>
              <p>{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}