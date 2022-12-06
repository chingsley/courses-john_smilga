import React from 'react'
import { data } from '../../data';
function UseStateArray() {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id: number) => {
    setPeople(people.filter(p => p.id !== id));
    // or:
    // setPeople(prevPeople => prevPeople.filter(p => p.id !== id));
  }
  return (
   <>
   {people.map((person) => {
    const { id, name } = person;
    return <div key={id} className="item">
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>Remove Item</button>
    </div>
   })}
   <button className="btn" onClick={() => setPeople([])}>Clear Items</button>
   </>
  )
}

export default UseStateArray