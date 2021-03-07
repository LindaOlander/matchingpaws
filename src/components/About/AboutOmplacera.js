import React from 'react';
import './About.css'
import { Link } from "react-router-dom";

const AboutOmplacera = () => {
    return (
        <div className="contentWrapper">
            <img alt="dog" src="https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="about-image"/>
            <p className="smallParagraph">
                Livet med hund kanske inte blev som du tänkt dig. Därför finns Matching Paws.
                I vårt formulär kan du lägga in din hund för matchning med en ny potentiell ägare.</p>
            <div className="centerWrapper buttonWrapper">
                <Link to="/omplacera"><button className="button">Hitta ett nytt hem</button></Link>
            </div>
        </div>
    )
}

export default AboutOmplacera;