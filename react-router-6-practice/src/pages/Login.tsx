import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../sharedTypes';

interface LoginProps {
  setUser: (user: User) => void;
}
const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!name || !email) return;
    setUser({ name, email });
    navigate('/dashboard');
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-block" type="submit">
          login
        </button>
      </form>
    </section>
  )
}

export default Login;