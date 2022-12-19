import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Tours from './Tours';
import { ITour } from './interface';

const url = 'http://localhost:4500/api/tours';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tours, setTours] = useState<ITour[]>([]);

  const removeTour = (id: string) => {
    setTours(tours.filter(t => t.id !== id));
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading) {
    return (
      <Loading />
    )
  }
  if(tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App