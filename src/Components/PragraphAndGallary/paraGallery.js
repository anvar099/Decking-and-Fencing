import React from 'react';
import './styles.css'
import { BsQuestionCircleFill } from "react-icons/bs";
import House from '../../Assats/Images/house1.jpg'

const ParaGallery = () => {
  return (
    <div className="gallery-row">
      <div className="gallery-icon-box">
        <BsQuestionCircleFill className="gallery-icon" />
      </div>
      <div className="gallery-paragraph">
        <div className="gallery-title">To Deck Or Not To Deck?</div>
        <div className="gallery-para">
          Bigger Seattle area is renowned for being home to an array of
          perennial views of lakes, vistas, hills, mountains, beaches, and more!
          Own a home in Seattle? Chances are, you can enjoy scenic views from
          your backyard. If you are planning to take advantage of this luxury,
          it is a great idea to enhance your outdoor living space with a custom
          deck. We specialize in designing custom decks to fit the needs of our
          customers, whether that be a hillside, ground level or rooftop deck.
          Our expertise also stems to railing, with glass, cable and wood
          options available in a variety of styles. Go check out our gallery and
          you may find that exact project you always dreamed.
        </div>
      </div>
      <div className="gallery-image">
        <img className="gallery-img" src={House} alt="" />
      </div>
    </div>
  );
 
};

export default ParaGallery;
