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
          <button>Book Now</button>
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

        <div className="work-iframe-grid"></div>
        <div className="work_img">
          <iframe
            src="https://www.instagram.com/reel/DLy88cKP-r8/embed"
            frameBorder="0"
            allowFullScreen
            title="Reel 1"
          ></iframe>
          <iframe
            src="https://www.instagram.com/reel/DLy9thHM0S9/embed"
            frameBorder="0"
            allowFullScreen
            title="Reel 2"
          ></iframe>
          <iframe
            src="https://www.instagram.com/reel/DLG757JtCiw/embed"
            frameBorder="0"
            allowFullScreen
            title="Reel 3"
          ></iframe>
          <iframe
            src="https://www.instagram.com/reel/DLAgRBjtkIl/embed"
            frameBorder="0"
            allowFullScreen
            title="Reel 4"
          ></iframe>
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
      </section>




<section className="work-section">
  <div className="text">
    <h1>See Our Work!</h1>
    <p>
      Here’s a quick look at the beauty transformations we’ve worked on.
      Whether it’s temporary makeup or a complete makeover, you can trust us.
    </p>
  </div>

  <div className="work-iframe-grid">
    <iframe
      src="https://www.instagram.com/reel/DLy88cKP-r8/embed"
      frameBorder="0"
      allowFullScreen
      title="Reel 1"
    ></iframe>
    <iframe
      src="https://www.instagram.com/reel/DLy9thHM0S9/embed"
      frameBorder="0"
      allowFullScreen
      title="Reel 2"
    ></iframe>
    <iframe
      src="https://www.instagram.com/reel/DLG757JtCiw/embed"
      frameBorder="0"
      allowFullScreen
      title="Reel 3"
    ></iframe>
    <iframe
      src="https://www.instagram.com/reel/DLAgRBjtkIl/embed"
      frameBorder="0"
      allowFullScreen
      title="Reel 4"
    ></iframe>
  </div>
</section>

<section className="work-section">
  <div className="text">
    <h1>See Our Work!</h1>
    <p>Quick look at the beauty transformations we’ve done!</p>
  </div>

  <div className="work-thumbs">
    <a href="https://www.instagram.com/reel/DLy88cKP-r8/" target="_blank" rel="noopener noreferrer">
      <div className="thumb">
        <img src={img1} alt="Reel 2" />
        <span className="play">&#9658;</span>
      </div>
    </a>
    <a href="https://www.instagram.com/reel/DLy9thHM0S9/" target="_blank" rel="noopener noreferrer">
      <div className="thumb">
        <img src={img2} alt="Reel 2" />
        <span className="play">&#9658;</span>
      </div>
    </a>
    <a href="https://www.instagram.com/reel/DLG757JtCiw/" target="_blank" rel="noopener noreferrer">
      <div className="thumb">
        <img src={img3} alt="Reel 3" />
        <span className="play">&#9658;</span>
      </div>
    </a>
    <a href="https://www.instagram.com/reel/DLAgRBjtkIl/" target="_blank" rel="noopener noreferrer">
      <div className="thumb">
        <img src={img4} alt="Reel 4" />
        <span className="play">&#9658;</span>
      </div>
    </a>
  </div>
</section>

<section className="work-section">
  <div className="text">
    <h1>See Our Work!</h1>
    <p>
      Here’s a quick look at the beauty transformations we’ve worked on.
      Whether it’s temporary makeup or a complete makeover, you can trust us.
    </p>
  </div>

  <div className="work-iframe-grid">
    <iframe
      src="https://www.youtube.com/embed/nFgsBxw-zWQ"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Reel 1"
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/nFgsBxw-zWQ"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Reel 2"
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/nFgsBxw-zWQ"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Reel 3"
    ></iframe>
    <iframe
      // src="https://www.youtube.com/embed/nFgsBxw-zWQ"
      src="https://www.youtube.com/embed/H11Bm71bVBg?si=ffgrMCsv-5u5WXjo"
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
              <i className="fa fa-star-half-o" />
            </span>
            <p>
              Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
              concordi. Fert his. Recessit mentes praecipites locum gens erat.
            </p>
            <div className="clint">
              <img src={img1} alt="" />
              <span>Katherine Foxx</span>
            </div>
          </div>

          <div className="card">
            <span className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </span>
            <p>
              Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
              concordi. Fert his. Recessit mentes praecipites locum gens erat.
            </p>
            <div className="clint">
              <img src={img2} alt="" />
              <span>Katherine Foxx</span>
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
              Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
              concordi. Fert his. Recessit mentes praecipites locum gens erat.
            </p>
            <div className="clint">
              <img src={img3} alt="" />
              <span>Katherine Foxx</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Specialties</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Hair Styling</h3>
            <p>Trendy cuts, color, keratin, smoothening & more.</p>
          </div>
          <div className="service-card">
            <h3>Skin Treatments</h3>
            <p>Facials, peels, anti-aging, and glow-ups tailored for you.</p>
          </div>
          <div className="service-card">
            <h3>Bridal Packages</h3>
            <p>Luxurious bridal grooming for your perfect day.</p>
          </div>
          <div className="service-card">
            <h3>Nail & Art</h3>
            <p>Nail extensions, art, and manicure-pedicure combos.</p>
          </div>
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

// import React from 'react';
// import { motion } from 'framer-motion';
// import './Home.scss';

// const fadeVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.7,
//       ease: 'easeOut',
//     },
//   }),
// };

// const Home = () => {
//   return (
//     <section className="home">
//       <div className="home__banner">
//         <div className="home__banner-overlay">
//           <motion.div
//             className="home__hero-text"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeVariant}
//             custom={0}
//           >
//             <h1>Welcome to <span>SALON 82</span></h1>
//             <p>Where Beauty Meets Excellence</p>
//             <button className="home__cta">Schedule an Appointment</button>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div
//         className="home__features"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeVariant}
//         custom={1}
//       >
//         <div className="feature-card">
//           <img src="/images/feature1.jpg" alt="Hair Styling" />
//           <h3>Hair Styling</h3>
//           <p>Trendy cuts, colors, and expert styling to match your vibe.</p>
//         </div>
//         <div className="feature-card">
//           <img src="/images/feature2.jpg" alt="Skin Care" />
//           <h3>Skin Care</h3>
//           <p>Glow-enhancing facials and treatments curated for your skin type.</p>
//         </div>
//         <div className="feature-card">
//           <img src="/images/feature3.jpg" alt="Luxury Spa" />
//           <h3>Luxury Spa</h3>
//           <p>Unwind in our spa zone with soothing therapies and ambiance.</p>
//         </div>
//       </motion.div>

//       <motion.div
//         className="home__gallery"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeVariant}
//         custom={2}
//       >
//         <h2>Salon Experience Gallery</h2>
//         <div className="gallery-grid">
//           <img src="/images/gallery1.jpg" alt="Client Hair Styling" />
//           <img src="/images/gallery2.jpg" alt="Facial Treatment Room" />
//           <img src="/images/gallery3.jpg" alt="Spa Relaxation" />
//           <img src="/images/gallery4.jpg" alt="Luxury Interior" />
//         </div>
//       </motion.div>

//       <motion.div
//         className="home__testimonial"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeVariant}
//         custom={3}
//       >
//         <h2>What Our Clients Say</h2>
//         <div className="testimonial-card">
//           <p>“Salon 82 is a luxurious escape! The ambiance is serene, and the service is top-notch. I left feeling refreshed and pampered.”</p>
//           <span>- Riya Mehra</span>
//         </div>
//         <div className="testimonial-card">
//           <p>“From hairstyling to skincare, everything was perfect. Highly recommend their team for professionalism and elegance.”</p>
//           <span>- Sneha Kapoor</span>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;
