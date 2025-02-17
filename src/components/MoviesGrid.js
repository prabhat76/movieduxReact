import React, { useState, useEffect } from "react";
import '../styles.css'
import MovieCard from "./movieCard";

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);
//for searching the movies

const [searchTerm , setSearchTerm] = useState("");
    //useffect with fetching the data from movies.json
    useEffect(() => {
        fetch("movies.json").then((response) => response.json()).then((data) => setMovies(data));
    }, []);

    return (
       <div>
        <input className="search-input" type="text" placeholder="Search..." />
         <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie}></MovieCard>
            ))
            }
        </div>
       </div>
    );
}