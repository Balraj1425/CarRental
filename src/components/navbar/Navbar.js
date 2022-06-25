import React from "react";
import Logo from "../images/logo.jpg";

import "../navbar/Navbar.css";
// import { BrowserRouter as a } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-bgcolor">
        <div className="container-fluid">
          <a className="navbar-brand" to="/home">
            <img src={Logo} alt="logo"></img>
          </a>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/home">
                  <span className="navbar-textcolor "> Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/aboutus">
                  <span className="navbar-textcolor "> About US</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contactus">
                  <span className="navbar-textcolor "> Contact US</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/login">
                  <span className="navbar-textcolor ">Login/SignUp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
