import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import NavbarBlack from '../../Navbar/NavbarBlack';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Footer from '../../Footer/Footer';
import AddDogs from '../../AddDogs/AddDogs';

const Omplacera = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <NavbarBlack color={'#222222'}/>
            <HeaderAdopt />
            <div style={{margin: "0 30px 20px 30px"}}>
                <h4>Ibland blir livet med din hund inte som du tänkt dig. Nedan kan du skapa ett konto för att lägga in din hund för matching.</h4>
                <h4>Det är att du svarar sanningsenligt i formuläret för att vi ska kunna hitta en ägare som passar din hunds behov bäst. Dubbelkolla även dina kontaktuppgifter, personen som matchar med din hund kommer att kontakta dig själv för bortadoption.</h4>
            </div>
            <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#dedede'}}>
                <AddDogs />
            </div>
            <Footer />
        </>
    )
}

export default Omplacera;