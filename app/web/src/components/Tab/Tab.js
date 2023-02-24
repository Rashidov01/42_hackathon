import React, { useState } from "react";
import "./tab.scss";
import { Tabs, ConfigProvider } from "antd";
import Tablee from "../Table/Tablee";
import Modal from "../Modal/Modal";
import EvaTable from "../EvaTable/EvaTable";
import ProTable from "../ProTable/ProTable";

export default function Tab() {
  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(true);
  const checkUser = () => {
    setCheck(!check);
  };

  //*** staffItem ***/
  const staffItems = [
    {
      key: "1",
      label: (
        <a className="label-link" href="#activity">
          activity
        </a>
      ),
      children: (
        <div className="eva">
          <div className="eva-main">
            <div className="act-top">
              <div className="act-container">
                <div className="act-container-header tab-head">
                  <h3 className="act-title tab-title">top evaluator</h3>
                </div>
              </div>
              <div className="act-container">
                <div className="act-container-header tab-head">
                  <h3 className="act-title tab-title">Events log</h3>
                </div>
              </div>
            </div>
            <h2 className="eva-title">Evaluations log</h2>
            <EvaTable />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <a className="label-link" href="#projects">
          projects
        </a>
      ),
      children: (
        <div className="pro">
          <ProTable />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <a className="label-link" href="#leaderboard">
          leaderboard
        </a>
      ),
      children: <Tablee />,
    },
  ];

  //*** studentItem ***/
  const studentItems = [
    {
      key: "1",
      label: (
        <a className="label-link" href="#activity">
          activity
        </a>
      ),
      children: (
        <div className="act">
          <div className="act-top">
            <div className="act-container">
              <div className="act-container-header tab-head">
                <h3 className="act-title tab-title">Evaluation</h3>
                <button className="act-btn tab-btn">manage slots</button>
              </div>
            </div>
            <div className="act-container">
              <div className="act-container-header tab-head">
                <h3 className="act-title tab-title">Events</h3>
              </div>
            </div>
          </div>
          <div className="act-container-lg act-large">
            <div className="act-container-header tab-head">
              <h3 className="act-title tab-title">logtime</h3>
            </div>
            <div className="act-large-main">
              <div className="act-large-left act-left">
                <div className="act-left-item act-item">
                  <p className="act-item-title">Daily</p>
                  <span className="act-item-time">8 hours</span>
                </div>
                <div className="act-left-item act-item">
                  <p className="act-item-title">Weekly</p>
                  <span className="act-item-time">30 hours</span>
                </div>
                <div className="act-left-item act-item">
                  <p className="act-item-title">Monthly</p>
                  <span className="act-item-time">60 hours</span>
                </div>
              </div>
              <div className="act-large-right"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <a className="label-link" href="#projects">
          projects
        </a>
      ),
      children: (
        <div className="pro">
          <div className="pro-head">
            <h3 className="pro-head__title pro-title">Recommended projects</h3>
            <div className="pro-head-wrapper">
              <div className="pro-box pro-box-active">
                <h3 className="pro-box-title">Printf</h3>
                <i className="pro-box-icon bx bxs-zap"></i>
              </div>
              <div className="pro-box pro-box-passed">
                <h3 className="pro-box-title">Born2beRoot</h3>
                <i className="pro-box-icon bx bxs-zap"></i>
              </div>
              <div className="pro-box pro-box-failed">
                <h3 className="pro-box-title">Born2beRoot</h3>
                <i className="pro-box-icon bx bxs-zap"></i>
              </div>
              <div className="pro-box pro-box-disabled">
                <h3 className="pro-box-title">GetNextLine</h3>
                <i className="pro-box-icon bx bxs-zap"></i>
              </div>
            </div>
          </div>
          <div className="pro-holder">
            <h3 className="pro-title">Project list</h3>
            <div className="pro-list-container">
              <div className="pro-list-header">
                <h3 className="pro-list-name">Circle 02</h3>
              </div>
              <ul className="pro-list">
                <li className="pro-item">
                  <h3 className="pro-item-name">Libft</h3>
                  <span className="pro-item-about">4 days</span>
                  <div className="link-holder">
                    <button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                      type="button"
                      className="pro-item-link pro-btn"
                    >
                      Resource
                    </button>
                  </div>
                  <span className="pro-item-status finished">finished</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <a className="label-link" href="#leaderboard">
          leaderboard
        </a>
      ),
      children: <Tablee />,
    },
  ];
  return check ? (
    <div className="staff-tab">
      <div className="tab">
        <ConfigProvider
          theme={{
            token: {
              colorText: "#EAEAEB",
            },
          }}
        >
          <Tabs
            className="custom-tab"
            defaultActiveKey="1"
            items={staffItems}
          />
        </ConfigProvider>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  ) : (
    <div className="student-tab">
      <div className="tab">
        <ConfigProvider
          theme={{
            token: {
              colorText: "#EAEAEB",
            },
          }}
        >
          <Tabs
            className="custom-tab"
            defaultActiveKey="1"
            items={studentItems}
          />
        </ConfigProvider>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
