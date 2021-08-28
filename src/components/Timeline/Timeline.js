import React, {useState} from 'react';
import './Timeline.css';

const Timeline = () => {
    const [openMatch, setOpenMatch] = useState(false);
    const [openAfterMatch, setOpenAfterMatch] = useState(false);
    const [openSign, setOpenSign] = useState(false);
    const readmore = "+ Läs mer";
    const readless = "- Läs mindre";

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
            <div className="timeContainer">
                <div className="time">
                    <div className="dashedLine"></div>
                    <i className="fas fa-angle-double-down fa-xs arrow"></i>
                    <div>
                        <button className="timelineButton" onClick={handleOpenMatch}><h3>Steg 1: Matchning</h3></button>
                            <div className="timeContent">
                                <p>Vår adoptionsprocess är främst fokuserat på det första steget av adoptionsprocessen - att matcha rätt ägare med rätt hund.</p>
                        {openMatch && 
                                <>
                                <p>Via vårt noga framtagna matchningsverktyg kan privatpersoner enkelt identifiera hundar som passar deras befintliga livsstil och tidigare förmåga.</p>
                                <p>Matching Paws matchningsverktyg utgår ifrån information som den nuvarande hundägaren har lämnat om sin hund och grundas enbart på hundens behov och egenskaper.</p>
                                <p>Vårt mål är att säkerställa högkvalificerade matchningar där både den som adopterar och den som omplacerar kan känna sig trygg med adoptionen.</p>
                                </>
                            }
                            </div>
                        <button className="timelineButton" onClick={handleOpenMatch}>
                            {!openMatch ? `${readmore}` : `${readless}`}
                        </button>
                    </div>
                </div>
            </div>
            <div className="timeContainer">
                <div className="time">
                    <div className="dashedLine"></div>
                    <i className="fas fa-angle-double-down fa-xs arrow"></i>
                    <div>
                        <button className="timelineButton" onClick={handleOpenAfterMatch}><h3>Steg 2: Efter matchning</h3></button>
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
                        <button className="timelineButton" onClick={handleOpenAfterMatch}>
                            {!openAfterMatch ? `${readmore}` : `${readless}`}
                        </button>
                    </div>
                </div>
            </div>
            <div className="timeContainer">
                <div className="time">
                    <div className="dashedLine dashedLine-last"></div>
                    <div>
                        <button className="timelineButton" onClick={handleOpenSign}><h3>Steg 3: Skriva avtal</h3></button>
                        <div className="timeContent">
                            <p>När du och och den nuvarande ägaren är överens om att du ska adoptera deras hund behöver ni skriva ett köpeavtal samt registrera ägarbyte via jordbruksverket.se</p>
                        {openSign && 
                            <>
                            <p>När ni skriver avtal kan ni utgå ifrån <a href="https://www.if.se/globalassets/se/dokument/privat/kopeavtal-hund.pdf" target="_blank" rel="noreferrer">denna mall</a> - men kom ihåg att avtalet ska bli korrekt utifrån ditt specifika fall och att du därför kan behöva anpassa mallen för att alla bestämmelser som ni kommit överens om finns med.</p>
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
                            <p>Det är förståeligt att du i detta skede vill skynda på processen, men vi rekommenderar starkt att gå igenom allt praktiskt i lugn och ro innan du tar över eller överlåter hunden, för att undvika framtida komplikationer.</p>
                            </>}
                        </div>
                        <button className="timelineButton" onClick={handleOpenSign}>
                            {!openSign ? `${readmore}` : `${readless}`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Timeline;