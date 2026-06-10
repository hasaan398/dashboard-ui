import React from "react";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Email from "./pages/email/email.jsx";
import Contact from "./pages/contact/contact.jsx";
import Crypto from "./pages/crypto/crypto.jsx";
import Kanban from "./pages/kanban/kanban.jsx";
import Invoicing from "./pages/invoicing/invoicing.jsx";
import Finance from "./pages/finance/finance.jsx";
import Analytics from "./pages/analytics/analytics";
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