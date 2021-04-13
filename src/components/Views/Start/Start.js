import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../Header/Header';
import AboutStartpage from '../../About/AboutStartpage';
import AboutOmplacera from '../../About/AboutOmplacera';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BannerAgria from '../../Banners/BannerAgria';
import BannerQuiz from '../../Banners/BannerQuiz';
import {Event} from '../../Tracking/index';
import AboutCorona from '../../About/AboutCorona';

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
            <AboutCorona />
            <BannerQuiz />
            <AboutOmplacera />
            {/* <BannerAgria /> */}
            {/* <button
                onClick={()=> 
                    Event("PRODUCT", "Product added to cart", "PRODUCT_PAGE")
                } >Add to Cart</button> */}
            <Footer />
        </>
    )
}

export default Start;