import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Apple Inc. All rights reserved.</p>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Use</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default Footer;