import { useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);

  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const searchMovie = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      const data = await response.json();
      setMovies(data.Search || []);
    }
  };

  const displayMovieNames = () => {
    return movies.map((movie) => (
      <MovieCard
        key={movie.imdbID}
        poster={movie.Poster}
        title={movie.Title}
        type={movie.Type}
        year={movie.Year}
      />
    ));
  };

  return (
    <div className="App">
      <Header/>
      <div className="search-bar">
        <input
          type="text"
          value={input}
          placeholder="Enter title here"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button onClick={() => searchMovie(input)}>Search</button>
      </div>

      {movies.length > 0 ? (
        <div className="movie-list">{displayMovieNames()}</div>
      ) : (
        <div className="error">
          <p>No results found</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
