import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      // Inline styling
      <div style={{ backgroundColor: 'lightseagreen' }} className='container'>
        {/* Internal styling */}
        <h1 style={styles.titleText}>HEODMSDAA</h1>
        <h3 style={styles.smallText}>AYAYAAYAYAYAY</h3>
        {/* External styling */}
        <p id='home-para'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          accusantium quam corrupti, itaque, dignissimos assumenda facilis eum,
          nulla iusto explicabo sint reiciendis illo harum nam provident minima
          quos quae. Nam.
        </p>
      </div>
    );
  }
}

const styles = {
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    // letterSpacing: '7px',
    color: 'white',
  },
  smallText: {
    fontSize: 18,
    letterSpacing: '5px',
    color: 'white',
  },
};

export default Home;
