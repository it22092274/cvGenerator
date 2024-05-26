import React from 'react';
import '../styles/Navbar.css';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
            <img src={logo} alt="Logo" width={30} height={50} />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/how-to-use">How to use</Link></li>
        <li><Link to="/contact">Review</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
