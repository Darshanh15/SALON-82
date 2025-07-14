import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import img1 from "../assets/gallery/gallery-1.jpg";
import img2 from "../assets/gallery/gallery-2.jpg";
import img3 from "../assets/gallery/gallery-3.jpg";
import img4 from "../assets/gallery/gallery-4.jpg";
import img5 from "../assets/gallery/gallery-5.jpg";
import img6 from "../assets/gallery/gallery-6.jpg";
import img7 from "../assets/gallery/gallery-7.jpg";
import img8 from "../assets/gallery/gallery-8.jpg";
import logo from "../assets/Saloon 82-01.png";

import mainimg from "../assets/main-img.jpeg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <img src={logo} alt="Salon 82 Logo" />
          <h1>Welcome to SALON 82</h1>
          <p>
            Hair & Skin Studio - Experience the luxury of transformation. Style.
            Glow. Confidence.
          </p>
          <Link to="/services" className="hero-button">
            Explore Services
          </Link>
        </div>
        <div className="hero-image"></div>
      </section>

      <section className="sticky-section">
        <div className="sticky-bg-image"></div>
        <div className="sticky-content">
          <h1>Special Look</h1>
          <p>
            Glow up with exclusive offers and premium styling sessions at SALON
            82.
          </p>
          <Link to="/contact" className="cta-button">
            Book Now
          </Link>
        </div>
      </section>

      <section className="work-section">
        <div className="text">
          <h1>See Our Work!</h1>
          <p>
            Here’s a quick look at the beauty transformations we’ve worked on.
            Whether it’s temporary makeup or a complete makeover, you can trust
            us.
          </p>
        </div>

        <div className="work-iframe-grid">
          <iframe
            src="https://www.youtube.com/embed/ut0smg46Y2s?si=HlN67ewiZVTgx8JW"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Reel 1"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/e9L6GKjrhcI?si=4WI0E50qdlE0WYE7"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Reel 2"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/RKTjbnbT-tg?si=i461ClN-SPRKUivX"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Reel 3"
          ></iframe>
          <iframe
            // src="https://www.youtube.com/embed/nFgsBxw-zWQ"
            // https://youtube.com/shorts/ut0smg46Y2s?si=HlN67ewiZVTgx8JW
            src="https://www.youtube.com/embed/j5j5f_5R-7c?si=1MFAd-5MBsQ7hzaD"
            // https://youtube.com/shorts/j5j5f_5R-7c?si=1MFAd-5MBsQ7hzaD
            // https://youtu.be/H11Bm71bVBg?si=ffgrMCsv-5u5WXjo
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Reel 4"
          ></iframe>
        </div>
      </section>

      {/* our clint speek */}
      <section className="our-clint-says">
        <div className="text">
          <h1>Our Clients Speak!</h1>
          <p>
            Take a look at what our clients have to say about our work and
            dedication that keeps them coming back for more.
          </p>
        </div>
        <div className="say-card">
          <div className="card">
            <span className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </span>
            <p>
              I visited Salon 82 and i loved the service.. specially "Bumoni"
              was amazing at her work.. A must visit salon in HSR layout
            </p>
            {/* <div className="clint">
              <img src={img1} alt="" />
              <span>Mridusmita Sharma</span>
            </div> */}

            <div className="clint">
              <div className="client-avatar">MS</div>
              <span>Mridusmita Sharma</span>
            </div>
          </div>

          <div className="card">
            <span className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              {/* <i className="fa fa-star-half-o" /> */}
            </span>
            <p>
              Had a hair cut and beard trim and the service was good especially
              raj was very polite and nice by giving suggestions
            </p>
            <div className="clint">
              <div className="client-avatar">AA</div>
              <span>Aravindan Amuthan </span>
            </div>
          </div>

          <div className="card">
            <span className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </span>
            <p>
              I got facial and pedicure and manicure it really good and relaxing
              gals were to good at their work I see the effect immediately
              thanks to Boumini and hushi. highly recommend
            </p>
            <div className="clint">
              <div className="client-avatar">RG</div>
              <span>Ruchi gangwaar</span>
            </div>
          </div>


          <div className="card">
            <span className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              {/* <i className="fa fa-star-half-o" /> */}
            </span>
            <p>
              I went with a few hair style pictures and Raju did an awesome job in my hair cut and styling. My hair are curly and he gave me the best look. I highly recommend this salon.
            </p>
            <div className="clint">
              <div className="client-avatar">AB</div>
              <span>Aarti Balana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Specialties</h2>
        <div className="services-grid">
          <Link to="/hair">
            <div className="service-card">
              <h3>Hair Styling</h3>
              <p>Trendy cuts, color, keratin, smoothening & more.</p>
            </div>
          </Link>

          <Link to="/skin">
            <div className="service-card">
              <h3>Skin Treatments</h3>
              <p>Facials, peels, anti-aging, and glow-ups tailored for you.</p>
            </div>
          </Link>

          <Link to="/nail">
            <div className="service-card">
              <h3>Nail & Art</h3>
              <p>Nail extensions, art, and manicure-pedicure combos.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready for Your Makeover?</h2>
        <p>Book an appointment today and let SALON 82 pamper you.</p>
        <Link to="/contact" className="cta-button">
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
