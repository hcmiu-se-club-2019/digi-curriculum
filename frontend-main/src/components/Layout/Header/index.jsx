import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../../data/img/IU-logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search" style={{ backgroundColor: '#4986e1' }}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} style={{ maxWidth: '40px', maxHeight: '40px' }} alt="logo" />
            </a>
            <Link to="/" className="text-white mr-2">
              DigiCurri
            </Link>
            <Link to="/curriculum" className="text-white mr-2">
              Curriculum
            </Link>
            <div className="collapse navbar-collapse" id="navcol-1" style={{ padding: '5px' }}>
              <form className="form-inline mr-auto" target="_self">
                <div className="form-group">
                  <label for="search-field"></label>
                  <input className="form-control search-field" type="search" id="search-field" name="search" />
                  <i className="fa fa-search" style={{ paddingLeft: '5px' }}></i>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
