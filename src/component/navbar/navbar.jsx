import React from "react";
import Logo from "../../assets/logo1.png";
import "./navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from "react";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <div className="bar">
        <img
          className="nav-logo"
          src={Logo}
          alt="logo"
          onClick={() => navigate("/out-africa")}
        />
        <div className="nav-content" ref={navRef}>
          <div className="nav-item" data-after="Products">
            <span>Products</span>
          </div>
          <div className="nav-item" data-after="About Us">
            <span>About Us</span>
          </div>
          <div className="nav-item" data-after="Why OutAfrica">
            <span>Why OutAfrica</span>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
