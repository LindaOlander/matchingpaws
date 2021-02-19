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
                <p>Matching Paws arbetar för att sammanföra privatpersoner och föreningar som behöver omplacera hundar med lämpliga hem och familjer som önskar adoptera en hund.</p>
                <h3>Vår adoptionsprocess</h3>
                <Timeline />
            </div>
            <Footer />
        </>
    )
}

export default Adoptionsprocessen;