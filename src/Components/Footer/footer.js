import React from 'react';
import './styles.css'

const Footer = () => {
  return (
    <div className='footer-row'>
      <div className='footer-paragraph'>Copyright 2019 - Theme by DigitalAntie</div>
      <div className='footer-nav'>
        <a className="footer-link" href="#">
          Home
        </a>
        <a className="footer-link" href="#">
          BOOK NOW
        </a>
        <a className="footer-link" href="#">
          Gallery
        </a>
        <a className="footer-link" href="#">
          About us
        </a>
        <a className="footer-link" href="#">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Footer;
