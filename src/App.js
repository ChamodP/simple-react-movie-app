import { useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";

function App() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);

  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const searchMovie = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search || []);
    console.log(data.Search);
  };

  const displayMovieNames = () => {
    return movies.map((movie) => (
      <MovieCard
        poster={movie.Poster}
        title={movie.Title}
        type={movie.Type}
        year={movie.Year}
      />
    ));
  };

  return (
    <div className="App">
      <h1>MovieSearch Hub</h1>
      <div className="search-bar">
        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button onClick={() => searchMovie(input)}>Search</button>
      </div>
      <div className="movie-list">
        {displayMovieNames()}
      </div>
    </div>
  );
}

export default App;
