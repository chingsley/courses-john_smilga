import { useState } from 'react';
import axios, { AxiosError } from 'axios';

const url = 'https://icanhazdadjoke.com/';

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');
  const [loading, setLoading] = useState(false);

  const fetchDadJoke = async () => {
    try {
      setLoading(true);
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        }
      });
      setJoke(data.joke);
    } catch(error) {
      if(error instanceof AxiosError) {
        console.log(error.response);
      }
      if(error instanceof Error) {
        console.log(error.message);
      }

    } finally {
      setLoading(false);
    }
  }

  if(loading) {
    return <div className="loading"></div>
  }

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  )
}

export default Headers;