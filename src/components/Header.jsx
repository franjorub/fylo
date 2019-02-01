/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pl-5 pr-5 pt-5">
        <a className="navbar-brand" href="#">
          <img src={logo} className="img-fluid" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end w-100">
            <li className="nav-item pr-5">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item pr-5">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item pr-5">
              <a className="nav-link" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
