import React from "react";
import { BsAsterisk } from "react-icons/bs";
import "./form-input.css";

const FormInput = ({ handleChange, label, error, ...otherProps }) => (
  <div className="form-input">
    <input
      className="f-input"
      onChange={handleChange}
      {...otherProps}
      required
    />
    <span className="f-label">{label}</span>
    <div className={error ? "error-star" : "close"}>
      <BsAsterisk />
    </div>
  </div>
);

export default FormInput;
