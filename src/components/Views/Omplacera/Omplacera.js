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
            <div style={{margin: "0 15px 20px 15px"}}>
                <p>Ibland blir livet som hundägare inte som man tänkt sig och man kan av olika anledningar behöva omplacera sin hund. Vi förstår att beslutet att omplacera sin hund kan vara mycket tungt och fyllt med olika känslor.</p>
                <p>Via nedanstående formulär kan du skapa ett konto och lägga in din hund för matchning så att vi kan hjälpa bästa möjliga ägare åt din hund.</p>
                <p>Efter att du har laddat upp din hund för matchning kan de individer som matchats med din hund komma att kontakta dig för att ta vidare dialogen. Det är självklart du som ägare som i slutändan väljer vem som ska ta över din hund och du har rätt att ångra dig fram till att avtal är skrivet.</p>
                <h3>Skapa konto och lägg in hund för matchning</h3>
                <p>Svara sanningsenligt och noga på formuläret och dubbelkolla att kontaktuppgifter stämmer så att eventuella framtida adoptörer kan komma i kontakt med dig.</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#ededed'}}>
                <AddDogs />
            </div>
            <Footer />
        </>
    )
}

export default Omplacera;