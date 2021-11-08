import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div id='contact-container'>
        <h1>Subscribe Newsletter</h1>
        <p>financial transactions remotely using a mobile</p>
        
          <form id='subscribe-form'>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Enter your email'
            />
            <p className='colored-btn'>Submit</p>
          </form>
      </div>
    );
  }
}

export default Contact;
