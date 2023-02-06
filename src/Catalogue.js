import axios from 'axios';
import { useEffect, useState } from 'react';
// import the Link component to allow us to build out new Links
import { Link } from 'react-router-dom';

const Catalogue = () => {
  // Set up movie state
  const [movies, setMovies] = useState([]);

  // On component mount (useEffect)...
  useEffect(() => {
    // Fetch list of popular movies for a specific year from TMDB API with Axios
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'c2fa26dffc58a9783c8284832eec6b81',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1988,
      }
    }).then((res) => {
      // Store those movies in state (useState)
      setMovies(res.data.results);
    })
  }, []);
  return (
    // Map through the movies state to render JSX with the movie posters (movie component?) onto page
    <ul className='catalogue'>
      {
        movies.map((movie) =>
          // *note* We are using the ES6 function's implicit return here instead of the function block
          <li key={movie.id}>
            {/* lets wrap our images in a Link, since we want these images to be the things we click to route us to our details view */}
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default Catalogue;