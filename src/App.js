
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

  const searchMovie =  async (title) =>{
    const response = await fetch(`${url}&s=${title}`)
    const data = await response.json()

    console.log(data.Search);
  }

  const displayMovieNames = () => {
    return 
  }

  useEffect(()=>{
    searchMovie(input)
  }, [])

  return (
    <div className="App">
      <h1>MovieSearch Hub</h1>
      <input type="text" value={input} onChange={(event) => {
        setInput(event.target.value)
      }}/>
      <button onClick={() => searchMovie(input)}>Search</button>
    </div>
  );
}

export default App;
