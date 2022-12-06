import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

function MultipleReturns() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then(response => {
      if(response.status < 400) return response.json();

      setLoading(false);
      setIsError(true);
      console.log('response: ', response)
      throw new Error(response.statusText);
    })
    .then(user => {
      const { login } = user;
      setUser(login);
      setLoading(false);
      setIsError(false);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  if(loading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns