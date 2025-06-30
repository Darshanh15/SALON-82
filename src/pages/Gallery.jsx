import React from 'react';
import '../styles/_gallery.scss';

import img1 from '../assets/gallery/gallery-1.jpg';
import img2 from '../assets/gallery/gallery-2.jpg';
import img3 from '../assets/gallery/gallery-3.jpg';
import img4 from '../assets/gallery/gallery-4.jpg';
import img5 from '../assets/gallery/gallery-5.jpg';
import img6 from '../assets/gallery/gallery-6.jpg';
import img7 from '../assets/gallery/gallery-7.jpg';
import img8 from '../assets/gallery/gallery-8.jpg';

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
