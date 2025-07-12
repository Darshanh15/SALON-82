import React, { useState } from "react";
import "./Contact.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const text = `Hello Salon 82,%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A📱 Phone: ${phone}%0A📝 Message: ${message}`;
    const whatsappNumber = "919090602082"; // 👈 Replace with actual number

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact SALON 82</h1>
        <p>
          Let’s glow up together – we’re here to help you book, ask, or connect!
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={sendToWhatsApp}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send on WhatsApp</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>SALON 82 – Hair & Skin Studio</p>
          <p>965, Anvi pride, 9th main road, HSR Layout Sector 7</p>
          <p>Bengaluru - 560102 </p>
          <p>📞 +91 9090602082</p>
          <p>📧 connect@salon82bglr.in</p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1G6mEP1TMx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/salon82.blr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Salon82HSRHairFacialExperts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/919090602082"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
