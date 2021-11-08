import React, { Component } from 'react';
import reactLogo from '../../asset/logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className='container'>
        <img src={reactLogo} alt='React Logo' height={70} width={70} />
        <nav>
          <ul id='navbar'>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div id='search-container'>
          <p>Login</p>
          <p className='colored-btn'>Signup</p>
        </div>
      </header>
    );
  }
}

export default Header;
