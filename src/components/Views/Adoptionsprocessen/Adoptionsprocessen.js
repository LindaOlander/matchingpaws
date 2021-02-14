import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import HeaderAdoptionsprocessen from '../../Header/HeaderAdoptionsprocessen';
import Timeline from '../../Timeline/Timeline';

const Adoptionsprocessen = () => {
    return (
        <>
            <NavbarBlack color='black' />
            <HeaderAdoptionsprocessen />
            <div className="contentWrapper">
                <p>MatchingPaws arbetar för att sammanföra privatpersoner och föreningar som behöver omplacera hundar med lämpliga hem och familjer som önskar adoptera en hund.</p>
                <h3>Vår matchningsprocess</h3>
                <Timeline />
            </div>
        </>
    )
}

export default Adoptionsprocessen;