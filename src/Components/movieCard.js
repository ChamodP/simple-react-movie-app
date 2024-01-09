import React from 'react'
import './movieCard.css';

export default function MovieCard({poster, title, type, year}) {
  return (
    <div className="card">
      <img src={poster} alt="Poster" />
      <div className="container">
        <h4>{title}</h4>
        <p className='data'>Type: {type}</p>
        <p className='data'>Year: {year}</p>
      </div>
    </div>
  )
}
