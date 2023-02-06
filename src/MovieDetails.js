import axios from 'axios';
import { useEffect, useState } from 'react';
// allow the component to access the param it was passed
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  // store the param in a variable
    // the {} around MovieID is from destructuring because technically there could be multiple params
  const { movieID } = useParams();
  // create state to store our movie details
  const [movie, setMovie] = useState({});
  // on component mount...
  useEffect( () => {

 
    // make an axios call to get movie details using the movieID param
    axios({
      url:`https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: 'c2fa26dffc58a9783c8284832eec6b81'
      }
    }).then( (res) => {
      // set details to state
      setMovie(res.data);
    })
  }, []);

  // destructuring - AKA "create these variables from movie.original_title, movie.tagline, movie.overview..."
  const {original_title, tagline, overview} = movie;

  return (
    <>
      <div className='poster'>
        <div className='description'>
          <h2>{original_title}</h2>
          <h3>{tagline}</h3>
          <p>{overview}</p>
        </div>
        <div className='poster-image'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
        </div>
      </div>
      <Link to={'/'}>
        <h2>Back to Home</h2>
      </Link>
    </>
  )
}

export default MovieDetails;