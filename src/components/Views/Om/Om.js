import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderAbout from '../../Header/HeaderAbout';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Om = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Navbar />
            <HeaderAbout />
            <div className="about-text-medium">
                <h4>Alla hundar har rätt till ett tryggt hem. Vi har grundat Matching Paws då vi har en dröm om att möjliggöra att ge otrygga hundar ett en ny matte eller husse som har rätt förutsättningar för att ta hand om hunden på allra bästa sätt.</h4>
                <h4>Vi som driver Matching Paws är vi: Ida, Therese och Linda som alla tre är uppvuxna med hundar och har ett gemensamt intresse om att alltid se till hundens bästa.</h4>
                <h4>Kontakta oss på <i style={{textDecoration: "underline"}}>hello@matchingpaws.se</i></h4>
            </div>
            <Footer />
        </>
    )
}

export default Om;