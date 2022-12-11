import React, { useState } from 'react';
import { data, Person } from '../../data';

function PropDrilling() {
  const [people, setPeople] = useState<Person[]>(data);

  const removePerson = (id: number) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <div>PropDrilling</div>
      <List people={people} removePerson={removePerson} />
    </section>
  );
}

interface ListProps {
  people: Person[];
  removePerson: (id: number) => void;
}

const List: React.FC<ListProps> = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

interface SinglePersonProps {
  id: Person["id"];
  name: Person["name"];
  removePerson: (id: number) => void;
}
const SinglePerson: React.FC<SinglePersonProps> = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;