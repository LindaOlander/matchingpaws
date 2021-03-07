import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

const BannerQuiz = () => {
    const iconWhite = require('../../images/Icon-MatchingPaws-white.png')

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="bannerQuiz" style={{position: 'relative'}}>
            <Link to="/adoptera" onClick={scrollToTop}><h5 style={{color: "#ffffff"}}>
                Hitta din bästa vän.
                <br />
                Testa vårt matchningsverktyg.</h5></Link>
                {/* <img className="logo bannerLogo" src={iconWhite.default} /> */}
        </div>
    )
};

export default BannerQuiz;