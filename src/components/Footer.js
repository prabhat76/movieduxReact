import React from "react";

export default function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">
                @ {currentYear} Moviedux, All Rights Reserved.
            </p>
        </footer>
    );
}