import React from 'react';

import img1 from '../assets/gallery/gallery-1.jpg';
import img2 from '../assets/hair/hair-img.jpg';
import img3 from '../assets/gallery/gallery-3.jpg';
import img4 from '../assets/gallery/gallery-4.jpg';
import img5 from '../assets/gallery/gallery-5.jpg';
import img6 from '../assets/gallery/gallery-6.jpg';
import img7 from '../assets/gallery/gallery-7.jpg';
import img8 from '../assets/gallery/gallery-8.jpg';

import './Hair.scss';

import { Link } from 'react-router-dom';


const Hair = () => {
  return (
    <div className="service-hair-page">
        <div className="text">
            <div className="heder-text">
                <h1>Hair Treatment</h1>
                <p>Hendrerit bibendum interdum tellus aliquam habitasse placerat sed rutrum tristique dictum ultrices vitae sagittis risus magna aenean gravida in pretium, urna laoreet fermentum posuere.</p>
            </div>
            <div className="tritment-div">
                <div className="tritment">
                    <h1>01</h1>
                    <h2>Hair Care</h2>
                    <p>Eleifend viverra massa faucibus tristique curabitur morbi enim.</p>
                </div>

                <div className="tritment">
                    <h1>02</h1>
                    <h2>Hair Styling</h2>
                    <p>Eleifend viverra massa faucibus tristique curabitur morbi enim.</p>
                </div>

                <div className="tritment">
                    <h1>03</h1>
                    <h2>Hair Cut</h2>
                    <p>Eleifend viverra massa faucibus tristique curabitur morbi enim.</p>
                </div>

                <div className="tritment">
                    <h1>04</h1>
                    <h2>Hair Coloring</h2>
                    <p>Eleifend viverra massa faucibus tristique curabitur morbi enim.</p>
                </div>

                <div className="tritment">
                    <h1>05</h1>
                    <h2>Straightening</h2>
                    <p>Eleifend viverra massa faucibus tristique curabitur morbi enim.</p>
                </div>

                <div className="tritment">
                    <h1>06</h1>
                    <h2>Hair Repair</h2>
                    <p>Eleifend viverra massa faucibus tristique curabitur morbi enim.</p>
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

export default Hair;
