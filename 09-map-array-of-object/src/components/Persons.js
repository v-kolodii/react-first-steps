import persons from '../data/persons';
import Person from './Person';

// lesson 157
function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default Persons;
