import React from 'react';
import './About.css'
import { Link } from "react-router-dom";

const AboutOmplacera = () => {
    return (
        <>
        <div className="contentWrapper centerWrapper paddingWrapper">
            <div style={{marginRight: '60px', textAlign: 'left', width: '430px'}}>
                <h3>
                    Livet med hund kanske inte blev som du tänkt dig           
                </h3>
                <h6>
                    Hos oss kan du lägga in din hund för matchning med en ny potentiell ägare.
                </h6>
            </div>
            <div className="centerWrapper buttonWrapper">
                <Link to="/omplacera"><button className="button">Hitta ett nytt hem</button></Link>
            </div>
        </div>
        {/* <div className="contentWrapper rowDesktop">
            <img alt="dog" src="https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="about-image"/>
            <div className="about-content">
            </div>
        </div> */}
        </>
    )
}

export default AboutOmplacera;