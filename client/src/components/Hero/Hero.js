import React from 'react';
import NavBar from '../NavBar/NavBar';
import './hero.css';
// import '../NavBar/navbar.css';

const Hero = ({isMenuOpen, toggleMenu}) => {
    return (
        <header className="header">
            <NavBar 
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />
            <h2 className="tag-line"> Welcome To Our Studio! </h2>
            <h3 className="intro">IT'S NICE TO MEET YOU </h3>
            <button className="tell-me-more-btn"> TELL ME MORE </button>
        </header>
    )
}

export default Hero;