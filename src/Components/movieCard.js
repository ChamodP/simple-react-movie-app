import React from 'react'
import './movieCard.css';
import blankMovie from '../Assets/blankMovie.png'

export default function MovieCard({poster, title, type, year}) {
  return (
    <div className="card">
      <img src={poster==='N/A' ? blankMovie: poster} alt={poster} />
      <div className="container">
        <h4>{title}</h4>
        <p className='data'>Type: {type}</p>
        <p className='data'>Year: {year}</p>
      </div>
    </div>
  )
}
