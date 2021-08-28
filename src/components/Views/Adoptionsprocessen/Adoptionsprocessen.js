import React, {useEffect} from 'react';
import Navbar from '../../Navbar/Navbar';
import HeaderAdoptionsprocessen from '../../Header/HeaderAdoptionsprocessen';
import Timeline from '../../Timeline/Timeline';
import Footer from '../../Footer/Footer';
import { GApageView } from '../../Tracking/index';
import './Adoptionsprocessen.css';



const Adoptionsprocessen = () => {
    useEffect(() => { GApageView("adoptionsprocessen"); }, []);

    return (
        <>
            <Navbar />
            <HeaderAdoptionsprocessen />
            <div className="adoptionsprocessenWrapper">
                <p className="boldParagraph">
                    Vi utgår alltid ifrån hundens behov i vår matchning- och adoptionsprocess. På det sättet säkerställer vi att både hund och ägare får ett fungerande och lyckligt liv tillsammans.
                </p>
            </div>
            <div className="contentWrapper">
                <br />
                <Timeline />
            </div>
            <Footer />
        </>
    )
}

export default Adoptionsprocessen;