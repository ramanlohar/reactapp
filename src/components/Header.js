// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file
import myImage from './Imges/logo.jpg';
import { toggleNav } from './utils/navigation'; // Import the external JavaScript file

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className='heading-image-div'>
        <img src={myImage} alt="Company Logo" />
        <h1>Raman Lohar</h1>
        </div>
        <nav>
          <ul onClick={toggleNav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blogs">Blogs</Link></li> {/* Changed to '/blogs' */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        {/* Menu button */}
        <button className="menu-btn" onClick={toggleNav}>&#9776;</button>
      </div>
    );
  }
}

export default Header;
