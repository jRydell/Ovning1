// PersonBox.js

import DropDown from '../DropDown/DropDown';
import personData from "./person.json";
const PersonBox = () => {
  const data = personData.data;

  return (
    <div>
      
      <label htmlFor="persons">Choose a Worker:</label>
      <select>
        {data.map((person, index) => (
          <DropDown
            key={index}
            firstname={person.firstname}
            lastname={person.lastname}
          />
        ))}
      </select>
    </div>
  );
};

export default PersonBox;
