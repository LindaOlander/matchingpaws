import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../Header/Header';
import AboutStartpage from '../../About/AboutStartpage';
import AboutOmplacera from '../../About/AboutOmplacera';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BannerQuiz from '../../Banners/BannerQuiz';
import {GApageView} from '../../Tracking/index';
import AboutCorona from '../../About/AboutCorona';
import AboutValidation from '../../About/AboutValidation';
import BannerMatchingPaws from '../../Banners/BannerMatchingPaws';

const Start = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => { GApageView("landing"); }, []);

    return (
        <>
            <Navbar />
            <Header />
            <AboutStartpage />
            <AboutCorona />
            <BannerQuiz />
            <AboutValidation />
            <BannerMatchingPaws />
            <AboutOmplacera />
            <Footer />
        </>
    )
}

export default Start;