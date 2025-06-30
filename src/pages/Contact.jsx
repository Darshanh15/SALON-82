import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact SALON 82</h1>
        <p>Let’s glow up together – we’re here to help you book, ask, or connect!</p>
      </section>

      <section className="contact-container">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="phone" placeholder="Phone Number" />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>SALON 82 – Hair & Skin Studio</p>
          <p>82 Glam Street, Beauty City, IN</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@salon82.in</p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
