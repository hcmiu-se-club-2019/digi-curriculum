import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../../data/img/IU-logo.png";

class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark navbar-expand-lg navigation-clean-search"
          style={{ backgroundColor: "#4986e1" }}
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src={logo}
                style={{ maxWidth: "40px", maxHeight: "40px" }}
                alt="logo"
              />
            </a>
            <Link to="/" className="text-white">
              DigiCurri
            </Link>
            <Link to="/program" className="text-white">
              Program Display
            </Link>

            {/* <a className="navbar-brand" href="/">
              DigiCurri
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div
              className="collapse navbar-collapse"
              id="navcol-1"
              style={{ padding: "5px" }}
            >
              {/* <ul className="nav navbar-nav">
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/">
                    All Courses
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="/"
                  >
                    Other Majors
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <a className="dropdown-item" role="presentation" href="/">
                      BA
                    </a>
                    <a className="dropdown-item" role="presentation" href="/">
                      IEM
                    </a>
                    <a className="dropdown-item" role="presentation" href="/">
                      BT
                    </a>
                  </div>
                </li>
              </ul> */}
              <form className="form-inline mr-auto" target="_self">
                <div className="form-group">
                  <label for="search-field"></label>
                  <input
                    className="form-control search-field"
                    type="search"
                    id="search-field"
                    name="search"
                  />
                  <i
                    className="fa fa-search"
                    style={{ paddingLeft: "5px" }}
                  ></i>
                </div>
              </form>
              <span className="navbar-text">
                <a className="login" href="/" style={{ paddingRight: "10px" }}>
                  Log In
                </a>
              </span>
              <a className="btn btn-light action-button" role="button" href="/">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
