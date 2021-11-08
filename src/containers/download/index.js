import React, { Component } from 'react';
import './download.css';
import Phone from '../../asset/phone.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlay,
  faAppStoreIos,
} from '@fortawesome/free-brands-svg-icons';

class Download extends Component {
  render() {
    return (
      <div id='download-container'>
        <div className='download-list'>
          <img src={Phone} alt='Phone 1' height='100%' width='30%' />
          <div className='download-text'>
            <h2>Download</h2>
            <h5>
              Download Besnik mobile banking app for IOS and Android. It helps
              you banking quickly and more smartly
            </h5>
            <div>
              <p className='outlined-btn'><FontAwesomeIcon icon={faAppStoreIos} size='1x' /> App Store</p>
              <p className='outlined-btn'><FontAwesomeIcon icon={faGooglePlay} size='1x' /> Play Store</p>
            </div>
          </div>
        </div>
        <div className='download-list'>
          <div className='download-text'>
            <h2>Connecting all your banking needs</h2>
            <h5>
              Financial transactions remotely using a mobile device such as a
              smartphone or tablet
            </h5>
            <p className='outlined-btn'>Get started</p>
          </div>
          <img src={Phone} alt='Phone 1' height='100%' width='30%' />
        </div>
        <hr className='divider' />
      </div>
    );
  }
}

export default Download;
