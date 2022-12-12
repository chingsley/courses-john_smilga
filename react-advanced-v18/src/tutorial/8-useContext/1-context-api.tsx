import React, { useState } from 'react';
import { useContext } from 'react';
import { data, Person } from '../../data';

interface AppContextInterface {
  removePerson: (id: number) => void;
  people: Person[];
}

// Notice the context is created OUTSIDE the component
const PersonContext = React.createContext<AppContextInterface | null>(null);

function UseContextApi() {
  const [people, setPeople] = useState<Person[]>(data);

  const removePerson = (id: number) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }} >
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
}

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData!.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

interface SinglePersonProps {
  id: Person["id"];
  name: Person["name"];
}
const SinglePerson: React.FC<SinglePersonProps> = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)!;

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default UseContextApi;