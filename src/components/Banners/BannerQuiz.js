import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

const BannerQuiz = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="bannerQuiz">
            <Link to="/adoptera" onClick={scrollToTop}><h3 style={{color: "#ffffff"}}>
                Hitta din bästa vän.
                <br />
                Testa vårt matchningsverktyg.</h3></Link>
        </div>
    )
};

export default BannerQuiz;