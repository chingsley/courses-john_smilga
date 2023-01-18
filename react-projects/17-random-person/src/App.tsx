import { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

interface IPerson {
  image: string;
  phone: string;
  email: string;
  password: string;
  age: string;
  street: string;
  name: string;
}

type KeyInPerson = keyof IPerson;

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState<IPerson | null>(null);
  const [value, setValue] = useState('random person');
  const [title, setTitle] = useState('name');

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const {
      phone,
      email,
      picture: { large: image },
      login: { password },
      name: { first, last },
      dob: { age },
      location: {
        street: { number, name },
      },
    } = person;

    const newPerson: IPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };

  const handleValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).classList.contains('icon')) {
      const newValue = (e.target as HTMLButtonElement).dataset.label;
      setTitle(newValue!);
      // setValue(person![newValue as keyof typeof person]) // or next line:
      setValue(person![newValue as KeyInPerson]);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(person && person.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className="usert-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className='icon'
              data-label='age'
              onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? 'loading...': 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
