import React from 'react';
import './mobileMenu.css'; 

const MobileMenu = ({ isMenuOpen }) => {

    const menuClass = isMenuOpen ? "menu menu-open" : "menu";

    return (
        <>
            <ul className={menuClass}>
                <li>SERVICES</li>
                <li>PORTFOLIO</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
            </ul>
        </>
    )
}

export default MobileMenu;