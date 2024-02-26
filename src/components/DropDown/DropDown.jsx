import React from 'react';
import './Dropdown.css';

const DropDown = ({ firstname, lastname }) => {


  return (
    <div>
      <label htmlFor="persons">Choose a person:</label>
      <select></select>
        <option value={firstname}>{firstname} {lastname}</option>
    
    </div>
  );
};

export default Dropown;
