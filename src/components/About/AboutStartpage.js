import React from 'react';
import './About.css'

const AboutStartpage = () => {
    
    return (
        <>
            <div className="contentWrapper">
               <h6 style={{textAlign: 'center'}}>
               Det finns allt för många hundar runt om i världen som är i behov av ett tryggt hem. 
               Samtidigt finns det så många varma hem som längtar efter en hunds kärlek.
               Tack vare vårt matchningsverktyg väljer man inte hund efter vilken ras man tycker är gulligast, utan matchningen baseras på vilken hund som passar bäst med din livssituation.
               {/* Vårt adoptionsmatchingsverktyg är utvecklat för att matcha dig med den hund som bäst passar med din livssituation, inte nödvändigtvis vilken hundras du tycker är gulligast. */}
               </h6>
            </div>
        </>
    )
}

export default AboutStartpage;