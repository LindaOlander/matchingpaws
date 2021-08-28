import React, { useEffect } from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import Footer from '../../Footer/Footer';
import {GApageView} from '../../Tracking/index';
import SolskenshistorierList from '../../Solskenshistorier/SolskenshistorierList';
import HeaderSolskenshistorier from '../../Header/HeaderSolskenshistorier';

const Solskenshistorier = () => {
    useEffect(() => { GApageView("solskenshistorier"); }, []);

    return (
        <>
            <NavbarBlack color="black" />
            <HeaderSolskenshistorier />
            <SolskenshistorierList />
            <Footer />
        </>
    )
}

export default Solskenshistorier;