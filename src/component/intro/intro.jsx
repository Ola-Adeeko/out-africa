import React from "react";
import "./intro.css";
import Guy from "../../assets/guy2.png";
import CustomButton from "../button/button";
import { useNavigate } from "react-router";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-box">
          <div className="intro-content">
            <span>value proposition</span>
            <span>Giving undergraduates access to a seamless world</span>
            <span>
              We create a platform for connecting African talents to a world of
              opportunities. Pioneering the new undergraduate experience in
              Africa.
            </span>

            <CustomButton onClick={() => navigate("/register")}>
              Join our waitlist
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="spork">
          <img src={Guy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
