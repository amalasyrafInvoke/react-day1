import React, { Component } from 'react';
import LandingImg from '../../asset/landing-img.jpg';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div id='home-container'>
        <div>
          <div id='dot-section'></div>
          <h1>We Help You Make Modern Interior</h1>
          <h3>
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer
          </h3>
        </div>
        <img id='landing-img' src={LandingImg} alt='Landing' />
      </div>
    );
  }
}

export default Home;
