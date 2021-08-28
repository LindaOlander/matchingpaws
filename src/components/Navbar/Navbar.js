import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './NavBar.css';


const Navbar = ({color}) => {
    const iconWhite = require('../../images/Icon-MatchingPaws-white.png')
    const iconBlack = require('../../images/Icon-MatchingPaws-black.png')

    const { pathname } = useLocation();
    console.log('pathname', pathname)
    
    return (
        <header className="navbar">
            <Link to="/">
                <div className="navbar-logo">
                    <img className="logo" alt="Logo" src={iconWhite.default} />
                    <p className="logoText" style={{color: `${color}`}}>Matching Paws</p>
                </div>
            </Link>
            <div id="hamburger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to="/"><li><img className="logo" alt="Logo" src={iconBlack.default} /></li></Link>
                    <NavLink to="/adoptera" activeStyle={{textDecoration: "underline"}}><li>Hitta din match</li></NavLink>
                    <NavLink to="/omplacera" activeStyle={{textDecoration: "underline"}}><li>Omplacera</li></NavLink>
                    <NavLink to="/hundlivet" activeStyle={{textDecoration: "underline"}}><li>Livet med hund</li></NavLink>
                    <NavLink to="/adoptionsprocessen" activeStyle={{textDecoration: "underline"}}><li>Adoptionsprocessen</li></NavLink>
                    <NavLink to="/solskenshistorier" activeStyle={{textDecoration: "underline"}}><li>Solskenshistorier</li></NavLink>
                    <NavLink to="/om" activeStyle={{textDecoration: "underline"}}><li>Om oss</li></NavLink>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;