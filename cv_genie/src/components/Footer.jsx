import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Genie CV </h2>
          <p>Your ultimate solution for creating professional and polished CVs.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Genie CV . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
