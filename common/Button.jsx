/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ text, className }) => {
  return (
    <button className={`custom_button_style ${className || ""}`}>{text}</button>
  );
};

export default Button;
