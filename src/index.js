import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/home/';
import About from './containers/about';
import Contact from './containers/contact';
import Work from './containers/work';
import Header from './containers/header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Work />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);