import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Made by Chan</p>
        <br />
        <div className="social-links">
          <a href="https://www.youtube.com/@deandeankt" rel="">Youtube</a>
          <a href="https://popcat.click/"  rel="">Twitter</a>
          <a href="https://www.instagram.com/aldeantg/"  rel="">Instagram</a>
        </div>
        <br />
        <hr />  
        <div className="copyright">
        <p>&copy; 2024 Chan</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
