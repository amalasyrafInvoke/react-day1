import React, { Component } from 'react';
import './download.css';
import Phone from '../../asset/phone.jpg';

class Download extends Component {
  render() {
    return (
      <div id='download-container'>
        <div className='download-list'>
          <img src={Phone} alt="Phone 1" height='100%' width='30%'/>
          <div className='download-text'>
            <h2>Download</h2>
            <h5>Download Besnik mobile banking app for IOS and Android. It helps you banking quickly and more smartly</h5>
          </div>
        </div>
        <div className='download-list'>
          <div className='download-text'>
            <h2>Connecting all your banking needs</h2>
            <h5>Financial transactions remotely using a mobile device such as a smartphone or tablet</h5>
          </div>
          <img src={Phone} alt="Phone 1" height='100%' width='30%'/>
        </div>
        <hr className='divider'/>
      </div>
    );
  }
}

export default Download;
