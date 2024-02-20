// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import CSS file
// import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>{" "}
            {/* Changed to '/blogs' */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: ramanlohar8@gmail.com</p>
          <p>Email: ramanlohar11@gmail.com</p>
          {/* <p>Phone: +1234567890</p> */}
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://youtube.com/tarunlohar">Tarun Lohar</a>
            </li>
            <li>
              <a href="https://ramanlohar.blogspot.com">
                ramanlohar.blogspot.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ramanlohar.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
