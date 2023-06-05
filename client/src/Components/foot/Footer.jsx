import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;