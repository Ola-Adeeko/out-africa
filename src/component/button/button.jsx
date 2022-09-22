import React from "react";

import "./button.css";

const CustomButton = ({ children, disabled, ...otherProps }) => (
  <button className={disabled ? "button-disabled" : "button"} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
