import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import NavbarBlack from '../../Navbar/NavbarBlack';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Footer from '../../Footer/Footer';
import AddDogsFirstContact from '../../AddDogs/FirstContact/AddDogsFirstContact';
import {GApageView} from '../../Tracking/index';
import './Omplacera.css';

const Omplacera = () => {
    const [showForm, setShowForm] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    useEffect(() => { GApageView("omplacera"); }, []);

    return (
        <>
            <NavbarBlack color="black" />
            <HeaderAdopt />
            <div>
                <div>
                    <div className="reassignWrapper">
                    <p className="boldParagraph">
                        Ibland blir livet som hundägare inte som man tänkt sig och av olika anledningar kan man behöva omplacera sin hund. Vi förstår att det är ett beslut som är mycket svårt att ta och är känslofyllt.                        </p>
                    </div>
                    <div className="reassignHelpWrapper">
                        <div className="reassignHelpImage">
                            <img alt="Bild på hund" src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" />
                        </div>
                        <div>
                            <h3>Få hjälp med omplacering</h3>
                            <br />
                            <p className="smallParagraph">
                            Vi är med dig i processen och utgår alltid ifrån hundens bästa. Via vårt matchningsverktyg kommer lämpliga adoptörer som passar med din hund och dess behov kunna att matchas med din hund. Dessa individer kan därefter komma att kontakta dig för vidare dialog. 
                            </p>
                            <p className="smallParagraph">
                            Det är självklart du som ägare som i slutändan väljer vem som ska ta över din hund och du har rätt att ångra dig fram till att avtalet är skrivet.                        </p>
                            {!showForm && 
                            <div className="centerWrapper buttonWrapper">
                                <button className="button" onClick={handleShowForm}>Lägg in din hund för matchning</button>
                            </div>}
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            {showForm && <div style={{backgroundColor: '#ededed'}}>
                <AddDogsFirstContact />
            </div>}
            <Footer />
        </>
    )
}

export default Omplacera;