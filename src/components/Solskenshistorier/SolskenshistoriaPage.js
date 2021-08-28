import React, { useEffect } from 'react';
import historier from "../../solskenshistorier.json";
import NavbarBlack from '../Navbar/NavbarBlack';
import Footer from '../Footer/Footer';
import './Solskenshistoria.css'

const SolskenshistoriaPage = (props) => {
    
    const id = props.match.params.id;
    let historia = null
    historier.historier.forEach(item => {
        if (item.id === id) {
            historia = item
        }
    })
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
        <NavbarBlack color="black"/>
        <div className="solskenshistoriaPageBox">
            <h3 className="solskenshistoriaHeading">{historia.titel}</h3>
            <div className="solskenshistoriaImageWrapper">
                <img src={historia.bild} alt="Bild på adoptören" />
            </div>
            <h5 className="solskenshistoriaHeading">{historia.adoptör}</h5>
            {historia.innehåll.map(text => 
                <p className="smallParagraph">{text}</p>
            )}
        </div>
        <Footer />
        </>
    )
}

export default SolskenshistoriaPage;