import React from "react";
import "./DropDown.css";

const DropDown = ({ firstname, lastname }) => {
  return (
    <>
      <option value={firstname}>{firstname} {lastname}</option>
    </>
  );
};

export default DropDown;
