import React from 'react';
import './styles.css'
import { GiWoodenFence } from "react-icons/gi";
import { MdDeck } from "react-icons/md";
import { DiMaterializecss } from "react-icons/di";

const Services = () => {
  return (
    <div className="service-container">
      <div>
        <div className="service-title">SERVICES</div>
        <div className="service-paragraph">
          <p className="service-para">
            We provide with the most modern and reliable techniques used in
            building deck and fence constructions. We deliberately choose and
            test our materials to fit the requests of construction and customer.
          </p>
        </div>
      </div>
      <div className="service-card">
        <div className="card">
          <GiWoodenFence className="service-icon" />
          <div className="service-card-title">Fencing</div>
          <div className="service-card-paragraph">
            A fence is a structure that encloses an area or the property,
            typically outdoors, and is usually constructed from posts that are
            connected by boards and rails. A fence differs from a wall in not
            having a solid foundation along its whole length, but only at posts.
          </div>
        </div>
        <div className="card">
          <MdDeck className="service-icon" />
          <div className="service-card-title">Decking</div>
          <div className="service-card-paragraph">
            A deck is a flat platform capable of supporting heavy weights,
            similar to a floor, but typically constructed outdoors, often built
            above the ground level, and usually connected to a building. The
            term is a generalization of decks as found on ships.
          </div>
        </div>
        <div className="card">
          <DiMaterializecss className="service-icon" />
          <div className="service-card-title">Materials</div>
          <div className="service-card-paragraph">
            Whether you want to build a deck on your yard or want to add privacy
            to your property with a fence you first need to determine your type,
            length, and colors of your materials. Our focus is to ensure
            providing critical details for a customer to make an informed
            decision.
          </div>
        </div>
      </div>
      <div className='service-btn-box'>
        <button className='service-btn-link'>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Services;
