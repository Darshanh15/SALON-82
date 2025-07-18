import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

import img1 from '../assets/gallery/gallery-1.jpg'
import img2 from '../assets/gallery/gallery-2.jpg'
import img3 from '../assets/gallery/gallery-3.jpg'
import img4 from '../assets/gallery/gallery-4.jpg'
import img5 from '../assets/gallery/gallery-5.jpg'
import img6 from '../assets/gallery/gallery-6.jpg'
import img7 from '../assets/gallery/gallery-7.jpg'
import img8 from '../assets/gallery/gallery-8.jpg';
import Video from '../assets/video/video1.mp4';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about__banner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariant}
        custom={0}
      >
        <h1>Welcome to <span>SALON 82</span></h1>
        <p>Where beauty, style, and luxury come together</p>
      </motion.div>

      <div className="about__content">
        <motion.div
          className="about__image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* <img src={img3} alt="Inside Salon 82" /> */}
          <video src={Video} controls autoPlay muted loop width="100%" />
        </motion.div>

        <motion.div
          className="about__text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          custom={1}
        >
          <h2>Who We Are</h2>
          <p><strong>SALON 82</strong> is not just a salon — it's an escape into elegance. We blend precision, creativity, and care to bring you the ultimate in beauty and wellness. Our team of stylists and therapists ensure personalized attention for every service.</p>
          <p>Whether you're seeking a makeover or me-time, we deliver a soothing atmosphere where you can relax, recharge, and leave feeling radiant.</p>
        </motion.div>
      </div>

      <motion.div
        className="about__mission"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariant}
        custom={2}
      >
        <h2>Our Mission</h2>
        <p>To deliver premium beauty experiences that combine creativity, comfort, and luxury — empowering every client to feel their best inside and out.</p>
      </motion.div>

      <motion.div
        className="about__vision"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariant}
        custom={3}
      >
        <h2>Our Vision</h2>
        <p>To become the leading destination in Bangalore for refined beauty and self-care, known for sophistication, innovation, and soulful service.</p>
      </motion.div>


      <motion.div
        className="about__vision"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariant}
        custom={3}
      >
        <h2>Premium Beauty Salon in HSR Layout, Bangalore</h2>
        <p>Welcome to Salon 82, your luxury destination for hair, skin, and nail care in HSR Layout, Bangalore. Founded and passionately led by Mr. Nikhil, Salon 82 is built on the vision of delivering exceptional salon experiences with the highest standards of hygiene, professionalism, and style.</p>
      </motion.div>

      <motion.div
        className="about__vision"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariant}
        custom={3}
      >
        <h2>At Salon 82, we specialize in:</h2>
        <p>Advanced Haircuts & Hair Coloring</p>
<p>Customized Facials & Skin Treatments</p>
<p>Trendy Nail Art & Nail Extensions</p>
<p>Bridal Makeovers & Grooming Packages</p>
<p>With a team of highly trained beauty experts and stylists, we use premium products and modern techniques to enhance your natural beauty. Whether you're getting ready for a wedding, a casual makeover, or just want to pamper yourself — Salon 82 ensures you leave feeling confident and rejuvenated.
Our boutique salon is a serene space designed to make every visit relaxing and rejuvenating. With personalized services and customer satisfaction as our top priority, Salon 82 has quickly become one of the top-rated salons in HSR Layout.
</p>
      </motion.div>

<motion.div
        className="about__vision"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariant}
        custom={3}
      >
        <h2>✅ Why Choose Salon 82?</h2>
        <p>Owned & managed by industry professional Mr. Nikhil</p>
<p>Located at the heart of HSR Layout, Bangalore</p>
<p>Use of international-quality beauty products</p>
<p>Friendly, certified, and experienced staff</p>
<p>Online appointment booking & flexible packages</p>
      </motion.div>

      
    </section>
  );
};

export default About;
