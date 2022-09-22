import React from "react";

import "./intro.css";
// import Vector from "../../assets/stripe.png";
// import Morph from "../../assets/morph.png";
import Guy from "../../assets/guy2.png";
// import Spart1 from "../../assets/spark-left.png";
// import Spart2 from "../../assets/spark-right.png";
// import HeadShot from "../../assets/headshot.jpg";
import CustomButton from "../button/button";
import { useNavigate } from "react-router";
// import FloatingDiv from "../floating/floating";
// import { motion } from "framer-motion";
// import Logo from "../../assets/logo1.png";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-box">
          <div className="intro-content">
            <span>value proposition</span>
            <span>
              {/* Get your job done by <br className="break" /> working students.{" "} */}
              Giving undergraduates access to a seamless world
            </span>
            <span>
              We create a platform for connecting African talents to a world of
              opportunities.Pioneering the new undergraduate experience in
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
