

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logo from "../../assets/Saloon 82-01.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="logo" />
          <p>Hair & Skin Experts – Enhancing Your Natural Beauty</p>
        </div>

        <div className="footer-links">
          <h4>Address Links</h4>
          <ul>
            <li>#965, Anvi pride, 9th main road</li>
            <li>HSR Layout Sector 7</li>
            <li>Bengaluru - 560102</li>
            {/* <li><a href="/privacy">Privacy Policy</a></li> */}
          </ul>
        </div>

<div className="footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1G6mEP1TMx/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/salon82.blr/"><FaInstagram /></a>
            <a href="https://www.youtube.com/@Salon82HSRHairFacialExperts"><FaYoutube /></a>
          </div>
        </div>
      </div>
      

      <div className="footer-bottom">
        © {new Date().getFullYear()} SALON 82. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
