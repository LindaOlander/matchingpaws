import React from 'react';
import './About.css'
import { Link } from "react-router-dom";

const AboutSmall = () => {
    return (
            <div className="about-wrapper">
                    <div className="about-image-wrapper">
                        <img alt="dog" src="https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="about-image"/>
                    </div>
                    <div className="about-text">
                        <h4>När du matchas ihop med en hund räknar vi in flera parametrar som exempelvis ditt boende, fritidsaktiviteter och familjemedlemmar. Detta för att du ska hitta en hund som bäst passar ditt levnadssätt, och inte den du tycker är gulligast.</h4>
                        <Link to="/quiz"><h3>Läs mer om att adoptera</h3></Link>
                    </div>
            </div>
    )
}

export default AboutSmall;