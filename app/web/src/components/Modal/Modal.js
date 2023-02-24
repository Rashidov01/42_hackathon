import React from "react";
import "./modal.scss";

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`overlay ${isOpen ? "open" : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <div className="modal-header">
          <h2 className="modal-title">roadmap</h2>
        </div>
        <div className="modal-main">
          <div className="modal-main__item modal-item">
            <span className="modal-item__number">01</span>
            <div className="modal-item__holder">
              <h3 className="modal-item__title">Makefile</h3>
              <a
                className="modal-item__link"
                href="https://chat.openai.com/chat"
                target="_blank"
                rel="noreferrer"
              >
                https://chat.openai.com/chat
              </a>
            </div>
          </div>
          <div className="modal-main__item modal-item">
            <span className="modal-item__number">02</span>
            <div className="modal-item__holder">
              <h3 className="modal-item__title">header file</h3>
              <a
                className="modal-item__link"
                href="https://chat.openai.com/chat"
                target="_blank"
                rel="noreferrer"
              >
                https://chat.openai.com/chat
              </a>
            </div>
          </div>
          <div className="modal-main__item modal-item">
            <span className="modal-item__number">02</span>
            <div className="modal-item__holder">
              <h3 className="modal-item__title">header file</h3>
              <a
                className="modal-item__link"
                href="https://chat.openai.com/chat"
                target="_blank"
                rel="noreferrer"
              >
                https://chat.openai.com/chat
              </a>
            </div>
          </div>
          <div className="modal-main__item modal-item">
            <span className="modal-item__number">02</span>
            <div className="modal-item__holder">
              <h3 className="modal-item__title">header file</h3>
              <a
                className="modal-item__link"
                href="https://chat.openai.com/chat"
                target="_blank"
                rel="noreferrer"
              >
                https://chat.openai.com/chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
