import React from "react";
import '../styles.css';

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src="logo.png" alt="moviedux logo" />
            <h2 className="app-subtitle">Welcome to moviedux</h2>
        </div>
    );
}