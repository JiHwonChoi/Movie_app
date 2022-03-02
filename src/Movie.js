import React from "react";
import PropTypes from 'prop-types';
import './Movie.css'

function Movie( {title, year, summary, poster, genre}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <br></br>
            <div className="movie__data">
                <span className ="movie_title_and_year">
                    <h3 className="movie_title" >{title}</h3><h5 className ="movie_year">  {year} </h5>
                </span>
                <br></br>
                <ul className="movie__genres">
                    {genre.map(
                        (genre, index)=>{
                            return <li key={index} className="genres_genre">{genre}</li>
                        }
                    )}
                </ul>         
                <p className="movie_summary">{summary.slice(0,180)}...</p>
            </div>
            
        </div>
    )
}

Movie.propTypes={
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie