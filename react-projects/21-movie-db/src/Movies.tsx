import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import { IMovie } from './useFetch';

const NO_PIC_AVAILABLE =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext()!;

  if (isLoading) {
    console.log('fetching...');
    return <div className='loading'></div>;
  }

  return (
    <section className='movies'>
      {(movies as IMovie[])?.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              <img
                src={poster === 'N/A' ? NO_PIC_AVAILABLE : poster}
                alt={title}
              />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
