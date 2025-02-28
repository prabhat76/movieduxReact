import React from "react";
import '../styles.css'

export default function MovieCard({movie}) {
//handling the errors
    const handleErrors = (e) => {
        e.target.src = 'images/default.jpg'
    }


    //rating color 
    const getRatingcolor = (rating) => {
        if (rating >= 8) {
            return "rating-good";
        } else if (rating >= 6) {
            return "rating-ok";
        } else {
            return "rating-bad";
        }   
    };


   return (
    <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleErrors}
            />
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingcolor(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div>    
   )
}