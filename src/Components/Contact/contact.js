import React from 'react';
import './styles.css'
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title-box">
        <div className="contact-title">Why don’t you Contact us</div>
        <div className="contact-title-mini">
          We are happy to answer your questions. Feel free to call, text or
          email us. Our crew will accommodate you upon the next availability.
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-row-2">
          <div className="contact-icon-box">
            <AiOutlineClockCircle className="contact-icon" />
          </div>
          <div className="contact-content">
            <div className="contact-time">Working hours</div>
            <div className="contact-paragraph">
              Monday - Saturday: 7:00AM - 7:00PM Sunday: Closed
            </div>
          </div>
        </div>
        <div className="contact-row-2">
          <div className="contact-icon-box">
            <ImLocation className="contact-icon" />
          </div>
          <div className="contact-content">
            <div className="contact-time">Our contacts</div>
            <div className="contact-paragraph">
              Phone:+(844)433-2512 Email: quote@12decksandfences.com
            </div>
          </div>
        </div>
      </div>
      <div className='contact-btn-box'>
        <button className='contact-btn'>BOOK FREE ESTIMATE</button>
      </div>
    </div>
  );
};

export default Contact;
