import React from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

const BannerQuiz = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="bannerQuiz">
            <Link to="/adoptera" onClick={scrollToTop}><h3 style={{color: "#ffffff"}}>Hitta min bästa vän. Testa vårt matchningsverktyg här</h3></Link>
        </div>
    )
};

export default BannerQuiz;