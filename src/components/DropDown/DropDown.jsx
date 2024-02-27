import React from "react";
import "./DropDown.css";

const DropDown = ({ value, firstname, lastname }) => {
  return (
    <option value={value}>{firstname} {lastname}</option>
  );
};

export default DropDown;
