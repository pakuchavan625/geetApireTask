import React from "react";
import "../Styles/topnavbar.css";

function TopNavBar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-wrapper ">
        <div className="container-fluid">
          <a className="navbar-brand text-white " href="/">
            Xtreme Vuese
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-icon">
                <span i class="far fa-bars"></span>
            </div>
            <div className="navbar-language">
                <span className="navbar-language-title">English</span>
                <span  class="fas fa-angle-down"></span>
            </div>
            <div className="navbar-right">
            <span><input type="text"  className="input-field"/></span>
            <span  class="fas fa-search search-icon"></span>
            <span class="fas fa-bell notification"></span>
            <span class="fas fa-comment-alt message"></span>
            <span>
                <img src="./Assets/nadella.jpg" alt=""  className="profile-Pic"/>
            </span>
            
          </div>
          </div>
        
        </div>
      </nav>
    </div>
  );
}

export default TopNavBar;
