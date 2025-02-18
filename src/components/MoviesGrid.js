import React, { useState, useEffect } from "react";
import '../styles.css'
import MovieCard from "./movieCard";

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);
//for searching the movies

const [searchTerm , setSearchTerm] = useState("");

const [genre, setGenre] = useState("All Genre");
const [rating, setRatings] = useState("All Ratings");
const filteredMoviesByGenre = (e) => {
    setGenre(e.target.value)
}
const filteredMoviesByRating = (e) => {
    setRatings(e.target.value)
}
const handleSearch = (e) => {
    setSearchTerm(e.target.value)
}

const matchesGenre = (movie, genre)=>{
    return genre === "All Genre" || movie.genre.toLowerCase === genre;
};

const matchesRating = (movie, rating) => {
    return rating === "All Ratings" || movie.rating >= rating;
};

const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
}
const filteredMovies = movies.filter((movie) => 
    matchesGenre(movie, genre)  && matchesSearchTerm(movie, searchTerm)
);

    //useffect with fetching the data from movies.json
    useEffect(() => {
        fetch("movies.json").then((response) => response.json()).then((data) => setMovies(data));
    }, []);

    return (
       <div>
        <input className="search-input" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch}/>
        <div className="filter-bar" >
            <div className="filter-slot">
            <label>Genre</label>
            <select className="filter-dropdown" value={genre} onChange={filteredMoviesByGenre}>
                <option>All Genre</option>
                <option>Action</option>
                <option>Horror</option>
                <option>fantasy</option>
            </select>
        </div>
        <div className="filter-slot">
            <label >Ratings</label>
            <select className="filter-dropdown" value={rating} onChange={filteredMoviesByRating}>
                <option>All Ratings</option>
                <option>7.7</option>
                <option>6</option>
            </select>
            </div>
        </div>
         <div className="movies-grid">
            {filteredMovies.map(movie => (
                <MovieCard movie={movie}></MovieCard>
            ))
            }
        </div>
       </div>
    );
}