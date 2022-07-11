import React from "react";
import "../Styles/sidebar.css";
import Contact from "./Contact";

function SideBar() {
  return (
    <div className="wrapper">
      <div className="intro">
        <div className="intro-wrappe">
          <img src="./Assets/nadella.jpg" alt="" className="intro-pc" />
          <div className="intro-title">steve jobs</div>
          <div className="intro-email">varun@gmail.com</div>
        </div>
        <div className="intro-contact-info">
          <span class="fad fa-comment-alt-minus chat-icon"></span>
          <span className="contact-titles">Chat</span>
        </div>
        <div className="intro-contact-info">
          <span class="fad fa-calendar-week chat-icon"></span>
          <span className="contact-titles">Calendar</span>
        </div>
        <div className="intro-contact-info">
          <span class="fad fa-id-card-alt chat-icon"></span>
          <span className="contact-titles">Contact list</span>
        </div>
        <div className="intro-contact-info">
          <span class="fad fa-address-card chat-icon"></span>
          <span className="contact-titles">Contact grid</span>
        </div>
        <div className="intro-contact-info">
          <span class="fad fa-envelope chat-icon"></span>
          <span className="contact-titles">Email</span>
        </div>
        <div className="intro-contact-info">
          <span class="fad fa-list-alt chat-icon"></span>
          <span className="contact-titles">Todo</span>
        </div>
        <div className="company-intro">
          <div className="company-element">Ui element</div>
          <div className="comany-element-intro">
            <span class="fad fa-comment-alt-minus element-icon"></span>
            <span className="element-name">Vuesax Components</span>
            <span class="fas fa-angle-up element-icon"></span>
          </div>
          <div className="comany-element-intro">
            <span class="fad fa-engine-warning element-icon"></span>
            <span className="element-name">Alert</span>
          </div>
          <div className="comany-element-intro">
            <span class="fad fa-user-circle element-icon"></span>
            <span className="element-name">Awatar</span>
          </div>
          <div className="comany-element-intro">
            <span class="fad fa-engine-warning element-icon"></span>
            <span className="element-name">BreadCrumb</span>
          </div>
          <div className="comany-element-intro">
            <span class="fad fa-meat element-icon"></span>
            <span className="element-name">Buttons</span>
          </div>
        </div>
      </div>
      <div className="main-contact">
        <Contact />
      </div>
    </div>
  );
}

export default SideBar;
