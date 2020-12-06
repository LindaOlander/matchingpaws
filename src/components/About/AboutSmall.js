import React from 'react';
import '../About/About.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const labrador = require('../../images/labrador.jpg');
const poodle = require('../../images/poodle.jpg');
const golden = require('../../images/golden.jpg');

const AboutSmall = () => {
    return (
            <div className="about-wrapper">
                    <div className="about-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="about-image"/>
                    </div>
                    <div className="about-text">
                        <h4>När du matchas ihop med en hund räknar vi in flera parametrar som exempelvis ditt boende, fritidsaktiviteter och familjemedlemmar. Detta för att du ska hitta en hund som bäst passar ditt levnadssätt, och inte den du tycker är gulligast.</h4>
                        <Link to="/adoptera"><h3>Läs mer om att adoptera</h3></Link>

                        {/* <div className="button-group">
                            <Link to="/adoptera"><button className="button-small button-highlighted">Jag vill adoptera</button></Link>
                            <button className="button-small">Jag behöver adoptera bort min hund</button>
                        </div> */}
                    </div>
            </div>
    )
}

export default AboutSmall;