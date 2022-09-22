import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./card.css";

const Card = ({ image, txt1, txt2, txt3 }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <span>{txt1}</span>
      <span>{txt2}</span>
      <div className="card-link">
        <span>{txt3}</span>
        <BsArrowRight />
      </div>
    </div>
  );
};

export default Card;
