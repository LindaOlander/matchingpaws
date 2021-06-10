import React from 'react';
import './About.css'
import BannerMatchingPaws from '../Banners/BannerMatchingPaws';

const AboutStartpage = () => {
    
    return (
        <>
            <div className="contentWrapper">
               <h6 style={{textAlign: 'center'}}>
               Det finns allt för många hundar runt om i världen som är i behov av ett tryggt hem. <br /> Samtidigt finns det så många varma hem som längtar efter en hunds kärlek och glädje. 
               <br />Därför finns Matching Paws.
               </h6>
            </div>
            <BannerMatchingPaws />
        </>
    )
}

export default AboutStartpage;