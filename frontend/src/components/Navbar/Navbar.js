import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

const Navbar = ({color}) => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <Link to="/"><p style={{color: `${color}`}}>Matching Paws</p></Link>
            </div>
            <div id="navbarHamburger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to="/"><li><b>Matching Paws</b></li></Link>
                    <Link to="/adoptera"><li>Hitta din match</li></Link>
                    <Link to="/omplacera"><li>Att behöva omplacera</li></Link>
                    <Link to="/quiz"><li>Livet med hund</li></Link>
                    <Link to="/quiz"><li>Adoptionsprocessen</li></Link>
                    <Link to="/om"><li>Om oss</li></Link>
                </ul>
            </div>
            <div className="header-menu">
                <Link to="/"><p><b>Matching Paws</b></p></Link>
                <Link to="/adoptera"><p>Hitta din match</p></Link>
                <Link to="/omplacera"><li>Att behöva omplacera</li></Link>
                <Link to="/quiz"><p>Livet med hund</p></Link>
                <Link to="/quiz"><p>Adoptionsprocessen</p></Link>
                <Link to="/om"><p>Om oss</p></Link>
            </div>
        </header>
    )
}

export default Navbar;