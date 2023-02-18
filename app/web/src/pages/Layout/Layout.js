import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Aside, Header, Sidebar } from "../../components";
import "./layout.scss";

export default function Layout() {
  const [open, setOpen] = useState(true);
  const toggleAside = () => {
    setOpen(!open);
  };
  return (
    <div className="site-content">
      <div className="site-content-sidebar">
        <Sidebar />
        <button className="toggle-btn" onClick={toggleAside}>
          <i className="togg-btn bx bx-chevron-right"></i>
        </button>
      </div>
      <div className={`site-content-aside ${open ? "open" : ""}`}>
        <Aside />
      </div>
      <div className="site-content-container">
        <header className="site-content-header">
          <Header />
        </header>
        <main className="site-content-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
