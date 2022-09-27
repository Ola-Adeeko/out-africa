import React, { useEffect } from "react";
import SuccessLogo from "../../assets/success.png";
import "./success.css";
import CustomButton from "../button/button";

const Success = () => {
  useEffect(() => {
    document.title = "Out Africa | Success";
  }, []);
  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">
          <img src={SuccessLogo} alt="icon" />
        </div>
        <div className="success-content">
          <span>Thank you for joining our waitlist!</span>
          <span>
            You have been added to our waitlist and you would get notified when
            we launch. In the mean time, join our community to hear more about
            what we have in store.
          </span>
          <div className="s-btn">
            <CustomButton>Join our Slack channel</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
