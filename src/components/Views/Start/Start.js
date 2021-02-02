import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from '../../Header/Header';
import AboutMedium from '../../About/AboutMedium';
import AboutSmall from '../../About/AboutSmall';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BannerAgria from '../../Banners/BannerAgria';
import BannerQuiz from '../../Banners/BannerQuiz';

const Start = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    console.log('localhost', process.env)
    return (
        <>
            <Navbar />
            <Header />
            <AboutMedium />
            <BannerQuiz />
            <AboutSmall />
            <BannerAgria />
            <Footer />
        </>
    )
}

export default Start;