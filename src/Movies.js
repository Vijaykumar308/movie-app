import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie } = useGlobalContext();
  // console.log(``, movie);
  return (
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
        {
          movie.map((currMovie, index) => {
            const {imdbID, Title, Poster} = currMovie;
            return <NavLink to={`movie/${imdbID}`} key={index}>
              <div className='card'> 
                <div className='card-info'>
                  <h2>{Title}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          })
        }
      </div>
    </section>
  )
}

export default Movies;