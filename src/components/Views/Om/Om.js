import React from 'react';
import HeaderAbout from '../../Header/HeaderAbout';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Om.css'
import AboutCorona from '../../About/AboutCorona';

const Om = () => {
    window.scrollTo(0, 0);
    const iconWhite = require('../../../images/Icon-MatchingPaws-white.png')
    // const linda = require('../../../images/Linda.jpg')
    // const ida = require('../../../images/ida.jpeg')
    // const therese = require('../../../images/therese.png')
    return (
        <>
            <Navbar />
            {/* <HeaderAbout /> */}
            <div style={{position: 'relative', height: '60vh', backgroundImage: 'url(https://images.unsplash.com/photo-1612948212198-94630618654f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f242e', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <span style={{margin: '0 0 20px 0'}}><i class="fas fa-quote-right fa-lg"></i></span> */}
                    <h5 style={{margin: '0'}}>Ge varje hund ett tryggt hem</h5>
                    {/* <h5 style={{margin: '0', textAlign: 'center'}}>Matching Paws vision är att ge varje hund ett nytt hem</h5> */}
                    {/* <img className="logo bannerLogo" src={iconWhite.default} /> */}
            </div>
            <div className="contentWrapper">
                <h5>Ett Coronaintiativ</h5>
                <p className="smallParagraph">Matching Paws skapades i pandemins spår. Grundarna av initiativet oroades av den kraftiga upptrappningen av antalet registrerade hundar som ökade avsevärt under pandemin.</p>
                <p className="smallParagraph">Många familjer har valt att skaffa ett husdjur under pandemin då hemarbetet har gett större möjligheter att ta hand om en hund. Den stora oron avser vad som händer när livet återgår till det mer vanliga och många av oss behöver återgå till kontoret.</p>
                <h5>Visionen</h5>
                <p className="smallParagraph">Vår vision är att ge varje hund ett tryggt hem. Att omplacera och adoptera en familjemedlem ska vara en trygg, enkel och träffsäker process. Ibland blir livet inte som man tänkt sig och då får inte det praktiska bli ett hinder för att ens husdjur ska få komma till ett så tryggt hem som möjligt.</p>
                <h5>Grundarna</h5>
                <p className="smallParagraph">Vi som står bakom Matching Paws heter Therese, Ida och Linda. Gemensamt delar vi vår starka passion för hundar och vi låter mottot “För hundens bästa” vägleda oss genom varje beslut.</p>
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