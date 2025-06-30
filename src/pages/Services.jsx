import React from 'react';
// import './Services.css';
import './Services.scss';


import {
  FaCut,
  FaSpa,
  FaFan,
  FaRegSmileBeam,
  FaPaintBrush,
  FaUserTie
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FaCut />,
    title: 'Hair Styling',
    desc: 'Trendy cuts, coloring, keratin, straightening, and more tailored for you.',
    link: '/hair'
  },
  {
    icon: <FaSpa />,
    title: 'Skin Care',
    desc: 'Luxury facials, detan treatments, glow-ups & skin rejuvenation.',
    link: '/skin'
  },
  {
    icon: <FaFan />,
    title: 'Body Spa',
    desc: 'Relaxing full-body spa and massage therapy services.',
    link: '/spa'
  },
  {
    icon: <FaRegSmileBeam />,
    title: 'Bridal Makeup',
    desc: 'Complete bridal packages including makeup, hairdo & draping.',
    link: '/bridal'
  },
  {
    icon: <FaPaintBrush />,
    title: 'Nail & Art',
    desc: 'Nail extensions, art, and manicure-pedicure combos.',
    link: '/nail'
  },
  {
    icon: <FaUserTie />,
    title: 'Grooming',
    desc: 'Men’s haircuts, beard styling, skin & wellness packages.',
    link: '/grooming'
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-header">
        <h1>Our Premium Services</h1>
        <p>Get styled, relaxed, and rejuvenated by the best hands at SALON 82.</p>
      </section>

      <section className="services-grid">
        {services.map((item, index) => (
          <Link to={item.link} key={index} className="service-card-link">
            <div className="service-card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Services;
