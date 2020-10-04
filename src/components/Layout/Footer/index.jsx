import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import state from '../../../data/json/testData2';

const externalLinks = state.externalLinks;

class Footer extends Component {
  render() {
    return (
      <div className="footer-basic text-center" style={{ backgroundColor: 'white', color: 'black' }}>
        <footer>
          <div className="social">
            {externalLinks.map((link) => (
              <SocialIcon key={link.id} url={link.url} className="m-1" />
            ))}
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="/">About</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright" style={{ color: 'black' }}>
            HCMIU @2020
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
