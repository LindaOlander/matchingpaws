import React, {useEffect} from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Om.css'
import {GApageView} from '../../Tracking/index';


const Om = () => {
    window.scrollTo(0, 0);
    // const iconWhite = require('../../../images/Icon-MatchingPaws-white.png')
    // const linda = require('../../../images/Linda.jpg')
    // const ida = require('../../../images/ida.jpeg')
    // const therese = require('../../../images/therese.png')

    useEffect(() => { GApageView("om"); }, []);

    return (
        <>
            <Navbar />
            <div style={{ height: '60vh', backgroundImage: 'url(https://images.unsplash.com/photo-1612948212198-94630618654f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f242e', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h2 style={{margin: '0'}}>Om Matching Paws</h2>
            </div>
            <div className="contentWrapper paddingWrapper">
                <div className="aboutReassignWrapper">
                    <h5 className="greyFont bottomMargin">
                        Vår vision
                    </h5>
                    <h3>
                        Ge varje hund ett tryggt hem.           
                    </h3>
                    <h6>
                        Att omplacera och adoptera en familjemedlem ska vara en trygg, enkel och träffsäker process. Ibland blir livet inte som man tänkt sig och då får inte det praktiska bli ett hinder för att ens husdjur ska få komma till ett så tryggt hem som möjligt.
                    </h6>
                </div>
            </div>
                <div className="aboutReassignWrapper fullWithWrapper aboutWrapper" style={{backgroundColor: '#f9f9f9'}}>
                    <h5 className="greyFont bottomMargin">
                        Ett coronaintiativ
                    </h5>
                    <h3>
                        "Just nu har jag mycket tid"          
                    </h3>
                    <h6>
                    Grundarna av initiativet oroades av den kraftiga upptrappningen av antalet registrerade hundar som ökade avsevärt under pandemin.
                    Många familjer har valt att skaffa ett husdjur under pandemin då hemarbetet har gett större möjligheter att ta hand om en hund. Den stora oron avser vad som händer när livet återgår till det mer vanliga och många av oss behöver återgå till kontoret.
                    </h6>
                </div>
                <div className="divider"></div>
            <div className="contentWrapper">
                <div className="aboutReassignWrapper">
                    <h5 className="greyFont bottomMargin">
                        Vi grundare
                    </h5>
                    <h3>
                        På hundarnas sida           
                    </h3>
                    <h6>
                    Vi bakom Matching Paws heter Linda, Ida och Therese. Vi har växt upp med både hundar och varandra vid vår sida, och vill helhjärtat hjälpa till att se till att varje hund får ett tryggt hem.
                    </h6>
                </div>

                <div>
                    <div className="peopleWrapper">
                        <div className="people linda"> </div>
                        <div className="people ida"> </div>
                        <div className="people therese"> </div>
                    </div> 
                    <p className="boldParagraph">Oss når du på <i style={{textDecoration: "underline"}}>hello@matchingpaws.se</i></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Om;