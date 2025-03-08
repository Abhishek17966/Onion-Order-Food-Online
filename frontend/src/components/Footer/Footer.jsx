import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" style={{ width: "150px", height: "auto" }} />
          <p>
          Order from us today and enjoy the best quality Food delivered to your door! For more details, connect with us through our social media.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://x.com/?lang=en&mx=2" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/abhi190902/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 8709252439</li>
            <li>inet.abhisheksingh@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Designed with ❤️ by Abhishek
        Copyright 2024 © Onion.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
