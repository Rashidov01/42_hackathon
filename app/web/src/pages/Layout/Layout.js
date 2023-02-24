import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Aside, Header, Sidebar } from "../../components";
import { ThemeContext } from "../../themeContext";
import "./layout.scss";

export default function Layout() {
  const [open, setOpen] = useState(true);
  const { isLightMode, toggleTheme } = useContext(ThemeContext);
  const toggleAside = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        isLightMode ? "site-content dark-mode" : "site-content light-mode"
      }
    >
      <div className="site-content-sidebar">
        <Sidebar
          toggleTheme={toggleTheme}
          icon={
            isLightMode
              ? "site-content-icon  bxs-sun"
              : "site-content-icon bxs-moon"
          }
        />
        <button className="toggle-btn" onClick={toggleAside}>
          <i
            className={`togg-btn bx bx-chevron-${open ? "left" : "right"}`}
          ></i>
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
