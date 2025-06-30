import React from 'react';

import { Link } from 'react-router-dom';

import img2 from '../assets/facial.jpeg';

const Skin = () => {
  return (
    <div className="service-hair-page">
        <div className="text">
            <div className="heder-text">
                <h1>Skin Treatment</h1>
                <p>Hendrerit bibendum interdum tellus aliquam habitasse placerat sed rutrum tristique dictum ultrices vitae sagittis risus magna aenean gravida in pretium, urna laoreet fermentum posuere.</p>
            </div>
            <div className="tritment-div">
  <div className="tritment">
    <h1>01</h1>
    <h2>Facial Glow</h2>
    <p>Rejuvenate your skin with deep cleansing, exfoliation, and hydrating masks.</p>
  </div>

  <div className="tritment">
    <h1>02</h1>
    <h2>Detan Treatment</h2>
    <p>Brighten and even out skin tone by removing tan and dead skin layers.</p>
  </div>

  <div className="tritment">
    <h1>03</h1>
    <h2>Anti-Aging</h2>
    <p>Reduce fine lines and promote youthful skin with collagen-boosting care.</p>
  </div>

  <div className="tritment">
    <h1>04</h1>
    <h2>Acne Treatment</h2>
    <p>Target breakouts and blemishes using medicated and calming skin solutions.</p>
  </div>

  <div className="tritment">
    <h1>05</h1>
    <h2>Skin Brightening</h2>
    <p>Enhance your natural glow with gentle brightening and vitamin treatments.</p>
  </div>

  <div className="tritment">
    <h1>06</h1>
    <h2>Hydrafacial</h2>
    <p>Deep hydration facial with exfoliation, extraction, and nourishment in one.</p>
  </div>

  <Link to="/contact">
    <button>BOOK NOW</button>
  </Link>
</div>

        </div>
      <div className="hair-img">
        <div className="hair-img-1">
            <div className="hair-img-1">
                <img src={img2} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skin;
