import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

const NavbarBlack = ({color}) => {
    const iconBlack = require('../../images/Icon-MatchingPaws-black.png')
    return (
        <header className="navbar">
            <Link to="/">
                <div className="navbar-logo">
                    <img className="logo" src={iconBlack.default} />
                    <p className="logoText" style={{color: `${color}`}}>Matching Paws</p>
                </div>
            </Link>
            <div id="hamburger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to="/"><li><img className="logo" src={iconBlack.default} /></li></Link>
                    <Link to="/adoptera"><li>Hitta din match</li></Link>
                    <Link to="/omplacera"><li>Omplacera</li></Link>
                    <Link to="/hund"><li>Livet med hund</li></Link>
                    <Link to="/adoptionsprocessen"><li>Adoptionsprocessen</li></Link>
                    <Link to="/om"><li>Om oss</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default NavbarBlack;