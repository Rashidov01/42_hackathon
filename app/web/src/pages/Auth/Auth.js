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
        <a className="login-btn" href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-cb4d4617c93d88fb16730d34efc24e094657b0f972550ce8d7823f0d779ef738&redirect_uri=http%3A%2F%2F127.0.0.1&response_type=code
">
          log in
        </a>
      </div>
    </div>
  );
}
