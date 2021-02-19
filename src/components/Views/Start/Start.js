import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../Header/Header';
import AboutStartpage from '../../About/AboutStartpage';
import AboutOmplacera from '../../About/AboutOmplacera';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BannerAgria from '../../Banners/BannerAgria';
import BannerQuiz from '../../Banners/BannerQuiz';

const Start = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <Header />
            <AboutStartpage />
            <BannerQuiz />
            <AboutOmplacera />
            {/* <BannerAgria /> */}
            <Footer />
        </>
    )
}

export default Start;