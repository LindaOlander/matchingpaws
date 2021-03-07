import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import HeaderAdoptionsprocessen from '../../Header/HeaderAdoptionsprocessen';
import Timeline from '../../Timeline/Timeline';
import Footer from '../../Footer/Footer';

const Adoptionsprocessen = () => {
    return (
        <>
            <NavbarBlack color='black' />
            <HeaderAdoptionsprocessen />
            <div className="contentWrapper">
                <p>Matching Paws arbetar för att sammanföra privatpersoner och föreningar - med trygga familjer och lämpliga hem som önskar adoptera en hund.</p>
                <br />
                <Timeline />
            </div>
            <Footer />
        </>
    )
}

export default Adoptionsprocessen;