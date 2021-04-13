import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

const BannerQuiz = () => {
    const iconWhite = require('../../images/Icon-MatchingPaws-white.png')

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="bannerQuiz" style={{position: 'relative', color: "#ffffff"}}>
            <h5>
            Hitta din bästa vän
            </h5>
            <Link to="/adoptera" onClick={scrollToTop}>
                <h2 style={{color: "#ffffff"}}>
                    Testa vårt matchningsverktyg
                </h2>
            </Link>
        </div>
    )
};

export default BannerQuiz;