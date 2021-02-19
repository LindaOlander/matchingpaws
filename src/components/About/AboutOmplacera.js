import React from 'react';
import './About.css'
import { Link } from "react-router-dom";

const AboutOmplacera = () => {
    return (
        <div className="contentWrapper">
            <img alt="dog" src="https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="about-image"/>
            <h4>Ibland blir livet med din hund inte som du tänkt dig. I vårt formulär kan du lägga in din hund i vår databas.</h4>
            <div className="centerWrapper">
                <Link to="/omplacera"><button className="button">Hitta ett nytt hem</button></Link>
            </div>
        </div>
    )
}

export default AboutOmplacera;