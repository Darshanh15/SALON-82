import React from 'react';
import '../styles/_gallery.scss';

import img1 from '../assets/gallery/img (1).jpeg';
import img2 from '../assets/gallery/img (2).jpeg';
import img3 from '../assets/gallery/img (3).jpeg';
import img4 from '../assets/gallery/img (4).jpeg';
import img5 from '../assets/gallery/img (5).jpeg';
import img6 from '../assets/gallery/img (6).jpeg';
import img7 from '../assets/gallery/img (7).jpeg';
import img8 from '../assets/gallery/img (1).jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  return (
    <>
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Studio Moments</h1>
        <p>Explore the transformation, style, and beauty moments at SALON 82.</p>
      </div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Gallery;
