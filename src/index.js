import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/home/';
import About from './containers/about';
import Contact from './containers/contact';
import Download from './containers/download';
import Header from './containers/header';
import Footer from './containers/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Download />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);