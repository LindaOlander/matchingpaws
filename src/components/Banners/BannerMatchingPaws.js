import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

const BannerMatchingPaws = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="aboutMatchingPawsBanner">
             <h6 className="boldParagraph">
                Matching Paws <Link to="/adoptera" onClick={scrollToTop}><a>matchningsverktyg</a></Link> för samman hundar som behöver omplaceras med familjer som önskar att adoptera. Alltid utifrån hundens bästa.
                {/* Med hjälp av vårt unika <Link to="/adoptera" onClick={scrollToTop}><a className="anchorNoColor">matchningsverktyg</a></Link> för Matching Paws samman hundar som behöver omplaceras med lämpliga hem som önskar adoptera en hund. Alltid utifrån hundens bästa. */}
                </h6>    
        </div>
    )
};

export default BannerMatchingPaws;