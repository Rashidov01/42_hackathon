import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner container">
        <div className="header-inp">
          <i className="header-inp__icon bx bx-search"></i>
          <input className="header-input" type="text" placeholder="search..." />
        </div>
        <div className="header-not">
          <h2 className="header-inner__title">
            Welcome, <span className="username">Ibouch!</span>
          </h2>
          <div className="header-wrapper">
            <button className="header-not__btn">
              <i className="header-not__icon bx bxs-bell"></i>
              <span className="header-not__count"></span>
            </button>
          </div>
          <div className="header-wrapper">
            <button className="header-not__btn">
              <i className="header-not__icon bx bx-log-out"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
