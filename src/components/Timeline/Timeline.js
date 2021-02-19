import React, {useState} from 'react';
import './Timeline.css';

const Timeline = () => {
    const [openMatch, setOpenMatch] = useState(false);
    const [openAfterMatch, setOpenAfterMatch] = useState(false);
    const [openSign, setOpenSign] = useState(false);

    const handleOpenMatch = () => {
        setOpenMatch(!openMatch);
    }

    const handleOpenAfterMatch = () => {
        setOpenAfterMatch(!openAfterMatch);
    }

    const handleOpenSign = () => {
        setOpenSign(!openSign);
    }

    return (
        <div className="timelineWrapper">
            <div className="time">
                <div className="dot" onClick={handleOpenMatch}>
                    {!openMatch && <i class="fas fa-chevron-right fa-xs"></i>}
                    {openMatch && <i class="fas fa-chevron-down fa-xs"></i>}
                </div>
                <button className="buttonLink" onClick={handleOpenMatch}><h5>Matchning</h5></button>
            </div>
            <div className="time">
                <div className="dashedLine"></div>
                    <div className="timeContent">
                        <p>Vår adoptionsprocess är främst fokuserat på det första steget av adoptionsprocessen - att matcha rätt ägare med rätt hund.</p>
                {openMatch && 
                        <>
                        <p>Via vårt noga framtagna matchningsverktyg kan privatpersoner enkelt identifiera hundar som passar deras befintliga livsstil och tidigare förmåga.</p>
                        <p>Matching Paws matchningsverktyg utgår ifrån information som den nuvarande hundägaren har lämnat om sin hund och grundas enbart på hundens behov och egenskaper. Vårt mål är att säkerställa hög kvalificerade matchningar där både den som adopterar och den som omplacerar kan känna sig trygg med adoptionen.</p>
                        </>
                    }
                    </div>
            </div>
            <div className="time">
                <div className="dot" onClick={handleOpenAfterMatch}>
                    {!openAfterMatch && <i class="fas fa-chevron-right fa-xs"></i>}
                    {openAfterMatch && <i class="fas fa-chevron-down fa-xs"></i>}
                </div>
                <button className="buttonLink" onClick={handleOpenAfterMatch}><h5>Efter matchning</h5></button>
            </div>
            <div className="time">
                <div className="dashedLine"></div>
                <div className="timeContent">
                    <p>Om du har fått fram en eller flera matchningar innebär det att du med största sannolikhet kan vara en lämplig framtida ägare till de hundar du matchats med!</p>
                {openAfterMatch && 
                    <>
                    <p>Det är dock alltid upp till den nuvarande hundägaren att avgöra om den håller med om den bedömningen som vårt matchningsverktyg gjort och de kan vilja ställa kompletterande frågor.</p>
                    <p>För att gå vidare med matchning behöver du därför kontakta den nuvarande hundägaren och informera om att du har blivit matchad med deras hund och är intresserad av att ta dialogen vidare.</p>
                    <p>Tänk på att det ofta är en känslig situation för den som behöver omplacera sin hund och att de kan komma att vilja veta mycket om dig som person. Var dock noga med att vara försiktig med att utge känslig information såsom bankuppgifter eller liknande och ta gärna med dig en vän eller familjemedlem första gången du ska besöka den tidigare ägaren och dess hund.</p>
                    </>
                }
                </div>
            </div>
            <div className="time">
                <div className="dot" onClick={handleOpenSign}>
                    {!openSign && <i class="fas fa-chevron-right fa-xs"></i>}
                    {openSign && <i class="fas fa-chevron-down fa-xs"></i>}
                </div>
                <button className="buttonLink" onClick={handleOpenSign}><h5>Skriva avtal</h5></button>
            </div>
            <div className="time">
                <div className="dashedLine"></div>
                <div className="timeContent">
                    <p>När du och och den nuvarande ägaren är överens om att du ska adoptera deras hund behöver ni skriva ett köpeavtal samt registrera ägarbyte via jordbruksverket.se</p>
                {openSign && 
                    <>
                    <p>När ni skriver avtal kan ni utgå ifrån denna mall - men kom ihåg att avtalet ska bli korrekt utifrån ditt specifika fall och att du därför kan behöva anpassa mallen för att alla bestämmelser som ni kommit överens om finns med.</p>
                    <p>Exempel på särskilda bestämmelser kan vara:</p>
                    <ul>
                        <li>När hunden ska överlåtas</li>
                        <li>Kostnad för att ta över hunden</li>
                        <li>Hantering av kostnad för befintliga sjukdomstillstånd</li>
                        <li>Ångerrätt</li>
                        <li>Besöks- och umgängesrätt för tidigare ägare</li>
                        <li>Överlåtelse av försäkring</li>
                        <li>Överlåtelse av utrustning</li>
                    </ul>
                    <p>Det är förståeligt att man kan vilja skynda på saker i detta skede men vi rekommenderar starkt att man gått igenom allt praktiskt i lugn och ro innan man tar över eller överlåter hunden för att undvika framtida komplikationer.</p>
                    </>}
                </div>
            </div>
        </div>
    )
};

export default Timeline;