import React, { useState } from "react";
import "./aside.scss";
import Avatar from "../../assets/icons/ibouch.jpg";

export default function Aside() {
  const [user, setUser] = useState(true);
  const checkUser = () => {
    setUser(!user);
  };
  return user ? (
    <div className="aside">
      <div className="aside-header">
        <img
          className="aside-header__img"
          src={Avatar}
          alt="user"
          width="100"
          height="100"
        />
      </div>
      <div className="aside-main">
        <ul className="aside-main__list aside-list">
          <li className="aside-list__item">
            <p className="aside-list__text">Fullname</p>
            <span className="aside-list__out">Ilyes Bouchlaghem</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Intra name</p>
            <span className="aside-list__out">ibouch</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Position</p>
            <span className="aside-list__out">Staff</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Mail</p>
            <a className="aside-list__out" href="ilyes@42abudhabi.ae">
              ilyes@42abudhabi.ae
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="aside">
      <div className="aside-header">
        <img
          className="aside-header__img"
          src={Avatar}
          alt="user"
          width="100"
          height="100"
        />
      </div>
      <div className="aside-main">
        <span className="aside-main__seat">lab 01 01 01</span>
        <ul className="aside-main__list aside-list">
          <li className="aside-list__item">
            <p className="aside-list__text">Evaluation points</p>
            <span className="aside-list__out">7</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Current project</p>
            <span className="aside-list__out">Get Next Line</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Black Hole days</p>
            <span className="aside-list__out">10</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Level</p>
            <span className="aside-list__out">1</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Grade</p>
            <span className="aside-list__out">Learner</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Kick off date</p>
            <span className="aside-list__out">10 January</span>
          </li>
          <li className="aside-list__item">
            <p className="aside-list__text">Wallet</p>
            <span className="aside-list__out">15$</span>
          </li>
        </ul>
      </div>
      <div className="aside-footer timer-item">
        <p className="timer-title">Active time</p>
        <div className="timer">
          <div className="timer-holder">
            <p className="timer-name">Hours</p>
            <span className="aside-list__out timer-text">00</span>
          </div>
          <div className="timer-holder">
            <p className="timer-name">Minutes</p>
            <span className="aside-list__out timer-text">01</span>
          </div>
          <div className="timer-holder">
            <p className="timer-name">Seconds</p>
            <span className="aside-list__out timer-text">02</span>
          </div>
        </div>
      </div>
    </div>
  );
}
