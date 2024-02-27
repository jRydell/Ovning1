import React, { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import Person from '../Person/Person';
import personData from "./person.json";
import "./PersonBox.css"; 

const PersonBox = () => {
  const data = personData.data;
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSelectedPerson = (e) => {
    const selectedPersonIndex = e.target.value;
    const selectedPersonData = data[selectedPersonIndex];
    setSelectedPerson(selectedPersonData);
  };

  return (
    <div className="person-box-container">
      <label htmlFor="persons">Choose a Worker:</label>
      <select onChange={handleSelectedPerson}>
        <option value="">--Please choose an option--</option>
        {data.map((person, index) => (
          <DropDown
            key={index}
            value={index}
            firstname={person.firstname}
            lastname={person.lastname}
          />
        ))}
      </select>

      {selectedPerson && (
        <div className="selected-person-container">
          <h2>Selected Worker:</h2>
          <Person
            firstName={selectedPerson.firstname}
            lastName={selectedPerson.lastname}
            pantColor={selectedPerson.pant_color}
            favoriteFood={selectedPerson.favorite_food}
            favoriteTool={selectedPerson.favorite_tool}
            pet={selectedPerson.pet}
            hobby={selectedPerson.hobby}
          />
        </div>
      )}
    </div>
  );
};

export default PersonBox;
