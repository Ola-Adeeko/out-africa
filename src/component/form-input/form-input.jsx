import React from "react";
import { useState } from "react";
import { BsAsterisk } from "react-icons/bs";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./form-input.css";

export const FormInput = ({ handleChange, label, error, ...otherProps }) => (
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

export const FormDropdownInput = ({
  handleChange,
  handledropchange,
  label,
  error,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);

  const closePop = () => {
    setShow(false);
  };

  return (
    <div className="form-input">
      <input
        className="f-input d-input"
        onChange={handleChange}
        {...otherProps}
        required
      />
      <figure onClick={() => setShow(!show)}>
        {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </figure>
      <span className="f-label">{label}</span>
      <div className={error ? "error-star" : "close"}>
        <BsAsterisk />
      </div>
      {show && (
        <div className="dropdown">
          <div
            className="dropdown-item"
            onClick={() => {
              handledropchange("Technology");
              closePop();
            }}
          >
            <span>Fashion</span>
          </div>
          <div
            className="dropdown-item"
            onClick={() => {
              handledropchange("Fashion");
              closePop();
            }}
          >
            <span>Technology</span>
          </div>
          <div
            className="dropdown-item"
            onClick={() => {
              handledropchange("Food");
              closePop();
            }}
          >
            <span>Food</span>
          </div>
        </div>
      )}
    </div>
  );
};
