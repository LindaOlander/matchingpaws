import React from 'react';
import HeaderAbout from '../../Header/HeaderAbout';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Om = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Navbar />
            <HeaderAbout />
            <div className="contentWrapper">
                <p>Alla hundar har rätt till ett tryggt hem. Vi har grundat Matching Paws då vi har en dröm om att möjliggöra att ge otrygga hundar ett en ny matte eller husse som har rätt förutsättningar för att ta hand om hunden på allra bästa sätt.</p>
                <p>Vi som driver Matching Paws är Ida, Therese och Linda, som alla tre är uppvuxna med hundar och har ett gemensamt intresse att alltid se till hundens bästa.</p>
                <p>Kontakta oss på <i style={{textDecoration: "underline"}}>hello@matchingpaws.se</i></p>
            </div>
            <Footer />
        </>
    )
}

export default Om;