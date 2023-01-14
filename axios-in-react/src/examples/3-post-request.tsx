import { useState } from 'react';
import axios from 'axios';

/**
 * To send data to the server use:
 * axios.post(url, { data })
 * 
 * To send options such as auth header user:
 * axios.post(url, { data }, {})
 * the last object will contain the auth headers
 */

const url = 'https://course-api.com/axios-tutorial-post';

const PostRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email);

    // make the axios post request here;
  }

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label htmlFor="name" className="form-label">name</label>
          <input 
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">email</label>
          <input 
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn btn-block" type="submit">register</button>
      </form>
    </section>
  )
}

export default PostRequest;

axios.defaults.headers.common['Authorization'] = 'alkdlakjld';