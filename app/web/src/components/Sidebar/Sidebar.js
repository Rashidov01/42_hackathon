import "./sidebar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";

export default function Sidebar({ toggleTheme, icon }) {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-head sidebar-holder">
          <NavLink to="/">
            <img
              className="sidebar-logo"
              src={Logo}
              alt="site logo"
              width="45"
              height="45"
            />
          </NavLink>
        </div>
        <ul className="sidebar__list sidebar-list">
          <li className="sidebar-list__item">
            <NavLink className="sidebar-list__link" to="/">
              <i className="sidebar-list__icon sidebar-icon bx bxs-dashboard"></i>
            </NavLink>
          </li>
          <li className="sidebar-list__item">
            <NavLink className="sidebar-list__link" to="/about">
              <i className="sidebar-list__icon sidebar-icon bx bx-chat"></i>
            </NavLink>
          </li>
          <li className="sidebar-list__item">
            <NavLink className="sidebar-list__link" to="/settings">
              <i className="sidebar-list__icon sidebar-icon bx bx-cog"></i>
            </NavLink>
          </li>
        </ul>
        <div className="sidebar-footer sidebar-holder">
          <button
            onClick={toggleTheme}
            className="sidebar-footer__btn"
            type="button"
          >
            <i className={`sidebar-footer__icon bx ${icon}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
