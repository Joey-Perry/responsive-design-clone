import React from 'react';
import './navButton.css';

const NavButton = ({ toggleMenu }) => {

    return (

        <button className='nav-button' onClick={toggleMenu}>
            <h3>MENU</h3>
            <div className='hamburger-icon'>
                <span className='hamburger-line'/>
                <span className='hamburger-line'/>
                <span className='hamburger-line'/>
            </div>
        </button>
    )
}

export default NavButton;