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
                Vårt <Link to="/adoptera" onClick={scrollToTop}>matchningsverktyg</Link> för samman hundar som behöver omplaceras med familjer som önskar att adoptera.
                </h6>    
        </div>
    )
};

export default BannerMatchingPaws;