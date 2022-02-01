import React from 'react';
import './styles.css'

const Banner = () => {
  return (
    <div className='curved'>
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-title">
            DECKING & FENCING RECONSTUCTION INSTALLATION
          </div>
          <div className="banner-paragraph">
            12 Decks and Fences expertise in reconstructing and installing
            various structural types of decks and fences collaborating with
            finest materials providers.
          </div>
          <div className="banner-btn">
            <button className="btn-link">GET A FREE QUOTES</button>
          </div>
        </div>
      </div>
      <svg className='curve-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,256L360,288L720,160L1080,288L1440,224L1440,320L1080,320L720,320L360,320L0,320Z"
        ></path>
      </svg>
    </div>
  ); 
};

export default Banner;
