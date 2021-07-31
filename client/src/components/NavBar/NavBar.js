import React from 'react';
import NavButton from '../NavButton/NavButton';
import MobileMenu from '../MobileMenu/MobileMenu';
import './navbar.css';

const NavBar = ({ isMenuOpen, toggleMenu }) => {
    return (
        <>
        <nav className='nav-bar'> 
            <h1>Start Bootstrap</h1>
            <ul className='desktop-nav'>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
            </ul>
            <NavButton toggleMenu={toggleMenu}/>
        </nav>
        <MobileMenu isMenuOpen={isMenuOpen}/>
        </>
    )
}

export default NavBar;