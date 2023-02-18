import "./sidebar.scss";
import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-head sidebar-holder">
          <NavLink to="/">
            <img src={Logo} alt="site logo" width="45" height="45" />
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
              <i className="sidebar-list__icon sidebar-icon bx bxs-calendar-alt"></i>
            </NavLink>
          </li>
          <li className="sidebar-list__item">
            <NavLink className="sidebar-list__link" to="/settings">
              <i className="sidebar-list__icon sidebar-icon bx bx-cog"></i>
            </NavLink>
          </li>
        </ul>
        <div className="sidebar-footer sidebar-holder">
          <button className="sidebar-footer__btn" type="button">
            <i className="sidebar-footer__icon sidebar-icon bx bx-moon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
