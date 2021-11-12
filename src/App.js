import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import './index.css';

// Call API for

const FEATURE_API = "https://api.themoviedb.org/3/movie/popular?api_key=3d8cf5c466c3d24a1ef41ee79dc5e7f6&language=en-US";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3d8cf5c466c3d24a1ef41ee79dc5e7f6&language=en-US&query=%3D";
// "https://api.themoviedb.org/3/search/movie?api_key=3d8cf5c466c3d24a1ef41ee79dc5e7f6&language=en-US&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {

    // Đổ dữ liệu 
    fetch(FEATURE_API)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      fetch(SEARCH_API + searchTerm)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
      setSearchTerm('');
    }
  };
  const handleOnChange = e => {
      setSearchTerm(e.target.value);
  }
  return (
    <header>
      <nav className="search">
        <form onSubmit={handleSubmit}>
          <input 
              type="search" 
              placeholder="Search..." 
              className="search-input"
              value={searchTerm}
              onChange={handleOnChange}
              />
        </form>
      </nav>
      <div className="movie-container">
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie} />
          ))}
      </div>
    </header>
  );
}

export default App;
