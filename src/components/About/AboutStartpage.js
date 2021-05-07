import React from 'react';
import { Link } from "react-router-dom";
import './About.css'

const AboutStartpage = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="contentWrapper">
                {/* <h3>
                    Det finns allt för många hundar runt om i världen som är i behov av ett tryggt hem. Samtidigt finns det så många varma hem som längtar efter en hunds kärlek och glädje.
                </h3>
               <h6>
                    Med hjälp av vårt unika matchningsverktyg för Matching Paws samman hundar som behöver omplaceras med lämpliga hem som önskar adoptera en hund. Alltid utifrån hundens bästa.
               </h6> */}
               <h6>
               Det finns allt för många hundar runt om i världen som är i behov av ett tryggt hem. Samtidigt finns det så många varma hem som längtar efter en hunds kärlek och glädje.
               </h6>
            </div>
               <div style={{backgroundColor: "rgb(225, 234, 244)", padding: '25px', marginBottom: '10px', color: '#222222'}}>
                    <h6 className="boldParagraph">
                    Med hjälp av vårt unika <Link to="/adoptera" onClick={scrollToTop}><a className="anchorNoColor">matchningsverktyg</a></Link> för Matching Paws samman hundar som behöver omplaceras med lämpliga hem som önskar adoptera en hund. Alltid utifrån hundens bästa.
                    </h6>
               </div>
        </>
    )
}

export default AboutStartpage;