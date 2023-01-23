import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo, { IPhoto } from './Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const mounted = useRef(false);
  const [newImages, setNewImages] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const pageParam = `&page=${page}`;
    const queryParam = `&query=${query}`;
    let url = `${mainUrl}${clientID}${pageParam}`;

    if (query.length > 0) {
      url = `${searchUrl}${clientID}${pageParam}${queryParam}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data = ', data);
      setPhotos((oldPhotos) => {
        if (query.length > 0 && page === 1) {
          return data.results;
        } else if (query.length > 0) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNewImages(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);

    // eslint-disable-next-line
  }, [newImages]);

  const loadNewImages = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      console.log('loading: ', loading);
      console.log('fetchin...');
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', loadNewImages);
    return () => window.removeEventListener('scroll', loadNewImages);

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  };

  return (
    <main>
      <section className='search'>
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-input'
            value={query}
            placeholder='search'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
            // return <div key={index}>testing</div>;
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
