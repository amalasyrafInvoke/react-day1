import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div id='about-container'>
        <h1>How It works</h1>
        <p>
          Mobile banking differs from mobile payments, which involves the use of
          a mobile device
        </p>
        <div id='card-container'>

        </div>
        <hr className='divider'/>
      </div>
    );
  }
}

export default About;
