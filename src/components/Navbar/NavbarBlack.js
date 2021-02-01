import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';


const Navbar = ({color}) => {
    const iconBlack = require('../../images/Icon-MatchingPaws-black.png')
    return (
        <header className="navbar">
            <Link to="/">
                <div className="navbar-logo">
                    <img className="logo" src={iconBlack.default} />
                    <p className="logoText" style={{color: `${color}`}}>Matching Paws</p>
                </div>
            </Link>
            <div id="navbarHamburger">
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
            <div className="header-menu">
                <Link to="/"><p><b>Matching Paws</b></p></Link>
                <Link to="/adoptera"><p>Hitta din match</p></Link>
                <Link to="/omplacera"><li>Omplacera</li></Link>
                <Link to="/hund"><p>Livet med hund</p></Link>
                <Link to="/adoptionsprocessen"><p>Adoptionsprocessen</p></Link>
                <Link to="/om"><p>Om oss</p></Link>
            </div>
        </header>
    )
}

export default Navbar;