import React from "react";

import "./waitlist.css";
import Card from "../card/card";
import Line from "../../assets/Line.png";
import CustomButton from "../button/button";
import { useNavigate } from "react-router";

const WaitList = () => {
  const navigate = useNavigate();

  return (
    <div className="list">
      <div className="list-top">
        <div className="list-text">
          <span>
            What OutAfrica has to offer
            {/* Get your job done by working <br className="line-break" /> students. */}
          </span>
        </div>
        <div className="list-btn">
          <CustomButton onClick={() => navigate("/register")}>
            Join our waitlist
          </CustomButton>
        </div>
      </div>
      <div className="list-lower">
        <Card
          txt1="Be A Part Of Our Community"
          txt2="Join our largest undergraduate community as we provide a safe space for undergraduates to become active members and prepare themselves for the opportunities in the global workforce."
          txt3="Join our community"
        />
        <img src={Line} alt="#" />
        <Card
          txt1="Access Discounts and amazing offers."
          txt2=" Get discounts and amazing offers as an undergraduate from brands and companies to make studentship life cheaper and seamless."
          txt3="Learn more about the discounts"
        />
        <img src={Line} alt="#" />
        <Card
          txt1="Stuverify (student verification)"
          txt2=" know you've made thirty iterations, but can we go back to the first one? That was the best version I remember."
          txt3="Coming soon"
        />
      </div>
    </div>
  );
};
export default WaitList;
