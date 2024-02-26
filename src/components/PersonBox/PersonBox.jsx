// PersonBox.js

import DropDown from '../Dropdown/Dropdown';
import personData from './person.json';
const PersonBox = () => {

  const data = personData.data;


  return (
    <div>
      <h1>Persons</h1>
      
       {data.map((person, index) => (
          <DropDown
            key={index}
            firstname={person.firstname}
            lastname={person.lastname}
          />
      ))}
    
    </div>
  );
};

export default PersonBox;
