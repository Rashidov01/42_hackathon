import React from "react";
import "./auth.scss";
import Logo from "../../assets/icons/logo.svg";

export default function Auth() {
  return (
    <div className="login">
      <div className="login-container">
        <img
          className="login-img"
          src={Logo}
          alt="site logo"
          width="60"
          height="60"
        />
        <h2 className="login-title">Welcome to, new intra</h2>
        <a className="login-btn" href="/">
          log in
        </a>
      </div>
    </div>
  );
}
