

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
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

<div className="footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/privacy">Privacy Policy</Link></li>
  </ul>
</div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
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
