import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import HeaderAdoptionsprocessen from '../../Header/HeaderAdoptionsprocessen';
import Timeline from '../../Timeline/Timeline';
import Footer from '../../Footer/Footer';
import { TimelineNew } from '../../Timeline/TimelineNew';

const Adoptionsprocessen = () => {
    return (
        <>
            <NavbarBlack color='black' />
            <HeaderAdoptionsprocessen />
            <div className="contentWrapper">
                <p className="paddedDesktop">
                    Vi utgår alltid ifrån hundens behov i vår matchning- och adoptionsprocess. På det sättet säkerställer vi att både hund och ägare får ett fungerande och lyckligt liv tillsammans.
                </p>
                <br />
                <Timeline />
            </div>
            <Footer />
        </>
    )
}

export default Adoptionsprocessen;