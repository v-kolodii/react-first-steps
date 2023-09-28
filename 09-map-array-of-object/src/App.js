import './App.css';

import Persons from './components/Persons';

function App() {
  return (
    <div className="App">
      <Persons />
      {/* {persons.map((person) => {
        // return (
        //   <Person
        //     key={person.id}
        //     id={person.id}
        //     firstName={person.firstName}
        //     lastName={person.lastName}
        //     email={person.email}
        //     img={person.img}
        //   />
        // );
        // OR
        // const { id, firstName, lastName, email, img } = person;
        // return (
        //   <Person
        //     key={id}
        //     id={id}
        //     firstName={firstName}
        //     lastName={lastName}
        //     email={email}
        //     img={img}
        //   />
        // );

        //OR:

        return <Person key={person.id} {...person} />;
      })} */}
    </div>
  );
}

export default App;
