import React from "react";

import "./footer.css";
import Logo from "../../assets/logo2.png";
import SmsIcon from "../../assets/msg-text.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
        <span>&copy; 2022 Out africa. All rights reserved.</span>
      </div>
      <div className="footer-talk">
        <img src={SmsIcon} alt="" />
        <span>Let's talk</span>
      </div>
      <div className="footer-list">
        <ul>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
