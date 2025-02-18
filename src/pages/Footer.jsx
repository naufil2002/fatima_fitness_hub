import React from "react";
import MainButton from "../components/mainButton";

export default function CallToAction() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Top */}
        <div className="footer-top">
          <h2>
            <span className="highlight">Join</span> our community and{" "}
            <span className="highlight">grow</span> with us!
          </h2>
          <p>
            We provide the best resources, guidance, and tools to help you
            succeed in your journey. Don’t wait, start today!
          </p>
          <MainButton>Subscribe Now</MainButton>
        </div>

        {/* Footer Bottom - 4 Columns */}
        <div className="footer-bottom">
          {/* About Us Column */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are a dedicated team passionate about helping individuals and
              businesses achieve their goals through innovative solutions and
              reliable services.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-section">
            <h3 className="quicklinks">Quick Links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: fatimafitnesshub@gmail.com</p>
            <p>Phone: +91-9999999999</p>
            <p>Location: Mumbra, India</p>
          </div>

          {/* Social Links Column */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
}
