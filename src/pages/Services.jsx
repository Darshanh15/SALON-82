import React from 'react';
import './Services.css';
import {
  FaCut,
  FaSpa,
  FaFan,
  FaRegSmileBeam,
  FaPaintBrush,
  FaUserTie
} from 'react-icons/fa';
const services = [
  {
    icon: <FaCut />,
    title: 'Hair Styling',
    desc: 'Trendy cuts, coloring, keratin, straightening, and more tailored for you.',
  },
  {
    icon: <FaSpa />,
    title: 'Skin Care',
    desc: 'Luxury facials, detan treatments, glow-ups & skin rejuvenation.',
  },
  {
    icon: <FaFan />,
    title: 'Body Spa',
    desc: 'Relaxing full-body spa and massage therapy services.',
  },
  {
    icon: <FaRegSmileBeam />,
    title: 'Bridal Makeup',
    desc: 'Complete bridal packages including makeup, hairdo & draping.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Nail & Art',
    desc: 'Nail extensions, art, and manicure-pedicure combos.',
  },
  {
    icon: <FaUserTie />,
    title: 'Grooming',
    desc: 'Men’s haircuts, beard styling, skin & wellness packages.',
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
          <div className="service-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
