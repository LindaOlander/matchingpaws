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
                <h4>Ibland blir livet med din hund inte som du tänkt dig. I vårt formulär kan du lägga in din hund i vår databas. </h4>
                <Link to="/omplacera"><h3>Hjälp mig att hitta ett nytt hem åt mig hund</h3></Link>
            </div>
        </div>
    )
}

export default AboutSmall;