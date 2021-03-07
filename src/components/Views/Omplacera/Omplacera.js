import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import NavbarBlack from '../../Navbar/NavbarBlack';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Footer from '../../Footer/Footer';
import AddDogs from '../../AddDogs/AddDogs';

const Omplacera = () => {
    const [toggle, setToggle] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleReadmore = () => {
        setToggle(!toggle);
    }

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            <NavbarBlack color={'#222222'}/>
            <HeaderAdopt />
            <div className="contentWrapper">
                <h5>När det inte blev som du tänkt</h5>
                <p className="smallParagraph">Ibland blir livet som hundägare inte som man tänkt sig och av olika anledningar kan man behöva omplacera sin hund. Vi förstår att det beslutet kan vara mycket tungt och fyllt av känslor.</p>
                {!toggle && 
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '30px'}}>
                        <button className="buttonLinkSecret" onClick={handleReadmore}>Läs mer</button>
                    </div>
                }
                {toggle && 
                <>
                    <h5>Matchningsprocessen</h5>
                    <p className="smallParagraph">Efter att du har laddat upp din hund för matchning kan de individer som matchats med din hund komma att kontakta dig för att ta vidare dialogen. Det är självklart du som ägare som i slutändan väljer vem som ska ta över din hund och du har rätt att ångra dig fram till att avtal är skrivet.</p>
                    <p className="smallParagraph">Svara sanningsenligt på formuläret och kontrollera dina kontaktuppgifter, så att eventuella adoptörer kan komma i kontakt med dig. Viktigast av allt, vi förstår att det är tungt och vi håller dig i handen genom processen.</p>
                </>
                }
                {/* {toggle && 
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '30px'}}>
                        <button className="buttonLink" onClick={handleReadmore}>Läs mindre</button>
                    </div>
                } */}
                {!showForm && 
                <div className="centerWrapper buttonWrapper">
                    <button className="button" onClick={handleShowForm}>Lägg in din hund för matchning</button>
                </div>}
            </div>
            {showForm && <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#ededed'}}>
                <AddDogs />
            </div>}
            <Footer />
        </>
    )
}

export default Omplacera;