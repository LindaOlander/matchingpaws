import React from 'react';
import HeaderAbout from '../../Header/HeaderAbout';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Om.css'

const Om = () => {
    window.scrollTo(0, 0);
    const iconWhite = require('../../../images/Icon-MatchingPaws-white.png')
    return (
        <>
            <Navbar />
            <HeaderAbout />
            <div className="contentWrapper">
                <p>Alla hundar har rätt till ett tryggt hem. Vi har grundat Matching Paws då vi har en dröm om att möjliggöra att ge otrygga hundar ett en ny matte eller husse som har rätt förutsättningar för att ta hand om hunden på allra bästa sätt.</p>
                </div>
                <div style={{position: 'relative', height: '30vh', backgroundColor: '#0f242e', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <span style={{margin: '0 0 20px 0'}}><i class="fas fa-quote-right fa-lg"></i></span>
                    <h5 style={{margin: '0'}}>Ge varje hund ett tryggt hem</h5>
                    {/* <h5 style={{margin: '0', textAlign: 'center'}}>Matching Paws vision är att ge varje hund ett nytt hem</h5> */}
                    <img className="logo bannerLogo" src={iconWhite.default} />
                </div>
                <div className="contentWrapper">
                    <p>Matching Paws vision är att ge varje hund ett nytt hem</p>
                <p>Vi som driver Matching Paws är Ida, Therese och Linda, som alla tre är uppvuxna med hundar och har ett gemensamt intresse att alltid se till hundens bästa.</p>
                <div className="peopleWrapper">
                    <div className="people linda"> </div>
                    <div className="people ida"> </div>
                    <div className="people therese"> </div>
                </div> 
                <p>Kontakta oss på <i style={{textDecoration: "underline"}}>hello@matchingpaws.se</i></p>
            </div>
            <Footer />
        </>
    )
}

export default Om;