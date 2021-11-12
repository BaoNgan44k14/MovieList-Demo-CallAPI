import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({overview, poster_path, title, vote_average}) => {
    return (
        <div className="movie">
            <div className="movie-img">
                <img src={IMG_API + poster_path} alt={title} />
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h3>{title}</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie
