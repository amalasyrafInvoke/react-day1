import React, { Component } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
  render() {
    return (
      <div id='footer-container'>
        <div id='footer-text'>
          <div>
            <h4>Besnik</h4>
            <p>
              Financial transactions remotely using a mobile device such as a
              smartphone or tablet
            </p>
            <div id='footer-icon'>
              <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
              <FontAwesomeIcon icon={faTwitterSquare} size='2x' />
              <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
            </div>
          </div>
          <div>
            <h5>Besnik</h5>
            <p>About</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>How It Works</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h5>Support</h5>
            <p>Support Center</p>
            <p>24h Service</p>
            <p>Quick Chat</p>
          </div>
          <div>
            <h5>Contact</h5>
            <p>Whatsapp</p>
            <p>Support 24</p>
          </div>
        </div>
        <div id='copyright-text'>
          <p>Copyright &copy; 2021</p>
        </div>
      </div>
    );
  }
}

export default Footer;
