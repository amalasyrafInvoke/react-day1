import React, { Component } from 'react';
import LandingImg from '../../asset/landing-img.jpg';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div id='home-container'>
        <div id='home-left'>
          <div>30 Days Free Trial</div>
          <h1>Life Should Be Easy</h1>
          <h5>
            Financial transactions remotely using a mobile device Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Repellendus quaerat
            voluptate maxime cum quibusdam obcaecati magnam, culpa iste debitis
            aliquid, quae iure doloremque libero aliquam sed, voluptas illum
            voluptates? Obcaecati.
          </h5>
          <p className='colored-btn'>Get Started</p>
        </div>
        <div id='home-right'>
          <img id='landing-img' src={LandingImg} alt='Landing' />
        </div>
      </div>
    );
  }
}

export default Home;
