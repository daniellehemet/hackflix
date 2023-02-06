// Modules
import {Routes, Route} from 'react-router-dom';
// Components
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import ErrorPage from './ErrorPage';
// Assets
import './App.css';

function App() {

  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
      {/* Create paths allowing us to render different things depending on the URL */}
      <Routes>
        {/* show catalogue on default path */}
        <Route path="/" element={<Catalogue />} />
        {/* show the MovieDetails component on /movie/:movieID, passing it the movie ID */}
        <Route path="/movie/:movieID" element={<MovieDetails />} />
        {/* Show the ErrorPage for routes that don't exist */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

// load /movies/moviesID (where movie ID is the movie's ID)
// load a component that calls our API with the mvoie's ID to get details about that movie
// put those details on the page

