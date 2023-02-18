import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner container">
        <div className="header-inp">
          <i class="header-inp__icon bx bx-search"></i>
          <input className="header-input" type="text" placeholder="search..." />
        </div>
        <div className="header-not">
          <h2 className="header-inner__title">
            Welcome, <span className="username">Abdulloh!</span>
          </h2>
          <button className="header-not__btn">
            <i class="header-not__icon bx bxs-bell"></i>
            <span className="header-not__count">1</span>
          </button>
        </div>
      </div>
    </div>
  );
}
