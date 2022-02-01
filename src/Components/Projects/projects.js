import React from 'react';
import './styles.css'
import Img2 from '../../Assats/Images/house2.jpg'
import Img1 from "../../Assats/Images/house1.jpg";

const Projects = () => {
  return (
    <div className="proj-container">
      <div className="proj-title">Our Projects</div>
      <div className="proj-row">
        <div className="proj-content">
          <div className="proj-img-box">
            <img className="proj-img" src={Img2} alt="" />
          </div>
          <div className="proj-paragraph-box">
            <div className="proj-title-mini">Decking Gallery</div>
            <div className="proj-paragraph">
              Decks are an amazing feature to add in a new or existing home.
              First on the list of priorities of many homeowners when it comes
              to home remodeling involves building a deck. A deck can be a
              valuable addition to a home and can transform your backyards into
              stylish outdoor living spaces. 12 Decks and Fences has built and
              installed decks in Bigger Seattle area for a wide range of
              clients.
            </div>
            <div className="proj-btn-box">
              <button className="proj-btn-link">CLICK TO SEE</button>
            </div>
          </div>
        </div>

        <div className="proj-content">
          <div className="proj-paragraph-box">
            <div className="proj-title-mini">Fencing Gallery</div>
            <div className="proj-paragraph">
              If you need more privacy or security at home, then you probably
              need to construct a fence around it. Fences do not have to be ugly
              and boring. 12 Decks and Fences builds premier quality fences that
              improve the beauty of our clients’ properties. We help our clients
              pick from hundreds of designs and build them a fence that suits
              their lifestyle and bought.
            </div>
            <div className="proj-btn-box">
              <button className="proj-btn-link">CLICK TO SEE</button>
            </div>
          </div>
          <div className="proj-img-box">
            <img className="proj-img" src={Img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
