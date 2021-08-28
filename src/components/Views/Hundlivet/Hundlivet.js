import React, {useEffect} from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import Footer from '../../Footer/Footer';
import HeaderHundlivet from '../../Header/HeaderHundlivet';
import FaqAccordion from '../../FaqAccordion/FaqAccordion';
import { GApageView } from '../../Tracking/index';
import './Hundlivet.css';

const Hundlivet = () => {

    useEffect(() => { GApageView("livetmedhund"); }, []);

    return (
        <>
            <NavbarBlack color="black" />
            <HeaderHundlivet />
                <div className="hundlivetWrapper">
                    <p className="boldParagraph">Att skaffa hund är att bli en till familjemedlem. Det är en hel del som behöver förberedas inför livet med din nya hund.</p>
                </div>
            <div className="contentWrapper">
                <div id="förberedelser" className="accordionWrapper">
                    <h5>Förberedelser</h5>
                    <FaqAccordion
                        title="Hur vet du om du är redo att skaffa hund?"
                        content="Det är bara du själv som kan avgöra om du är redo att skaffa hund men du bör kunna svara “Ja” på samtliga frågor nedan om du är redo att skaffa hund:
                        <br /> 
                        <ul>
                        <li>Har du en lösning för hundpassning under vardagarna när du t.ex. jobbar eller är iväg?</li>
                        <li>Klarar din ekonomi av att ta hand om en hund?</li>
                        <li>Är du villig att lägga ner tid och energi på att uppfostra och ta hand om din hund?</li>
                        </ul>
                        "                  
                    />
                    <FaqAccordion
                        title="Vilken typ av hund passar dig?"
                        content="Vi avråder starkt från att välja hund utifrån utseende eller andra exteriöra preferenser då det kan sluta med att både du och din hund blir djupt olyckliga. 
                        Låt istället vårt matchningsverktyg avgöra vilken hund som passar bäst för dig."
                        link="/adoptera"
                        linkText="Testa vårt matchingsverktyg"
                    />
                </div>
                <div id="ekonomi" className="accordionWrapper">
                    <h5>Ekonomi och försäkringar</h5>
                    <FaqAccordion
                        title="Vad kostar det att ha en hund?"
                        content="Att ha hund är dyrt och det är viktigt att du har sett över din ekonomi innan du bestämmer dig för att du har råd att adoptera en hund. Exakta kostnaden varierar beroende på storlek och ras på hunden samt vad du planerar att göra med din hund. Se nedan kostnadsuppskattning för att få en känsla för vad en hund kan kosta per år:
                        <br /> 
                        <ul>
                        <li>Försäkring: 6000/år</li>
                        <li>Mat: 8500/år</li>
                        <li>Ben och leksaker: 1000/år</li>
                        <li>Eventuellt hunddagis: Ca 30000-48000 kr/månad</li>
                        </ul>
                        <br />
                        Utöver detta behöver du ta höjd för oförutsägbara kostnader såsom t.ex. veterinärbesök.
                        "
                    />
                    <FaqAccordion
                        title="Vilken försäkring ska jag ha?"
                        content="Oförutsägbara saker sker och tyvärr är veterinärvård väldigt dyrt. På grund av det rekommenderar vi starkt att alla har en hundförsäkring till sin hund.
                        Många gånger är det bästa att den tidigare ägaren skriver över hundförsäkringen på den nya ägaren - på det sättet är även gamla skador försäkrade. Vill du byta - vad noga med att jämföra alla försäkringsvillkor; självrisk, månadskostnad och ersättningstak."
                    />
                </div>
                <div id="första-tiden" className="accordionWrapper">
                    <h5>Första tiden med din hund</h5>
                    <FaqAccordion
                        title="Vad ska jag ha med mig när jag hämtar hunden?"
                        content="Hör efter med den tidigare ägaren vilken typ av utrustning som du kan få ta över och vad som du behöver komplettera med. Kom ihåg att ha med ordentligt med vatten och mat om du och din nya hund kommer färdas långt för att komma från den tidigare ägaren hem till er."
                    />
                    <FaqAccordion
                        title="Vad ska jag tänka på under de första dagarna?"
                        content="Kom ihåg att din hund går igenom en stor förändring i livet och kan känna många olika känslor. En del hundar blir väldigt stressade, några blir oroliga och andra upplevs opåverkade. På grund av detta rekommenderar vi att du som ägare bokar av planerade aktiviteter och besök de första dagarna och bara spenderar tid med din hund. Ta promenader ihop, mys och vila. Ni kommer behöva lugn och ro för att lära känna varandra och bli trygga."
                    />
                </div>
                <div id="mat-utrustning" className="accordionWrapper">
                    <h5>Mat och utrustning</h5>
                    <FaqAccordion
                        title="Vilken utrustning behöver min hund?"
                        content="Matching Paws rekommenderar att ha följande grundkit för din hund:
                        <br /> 
                        <ul>
                        <li>Mat och vattenskål</li>
                        <li>Koppel och sele/halsband</li>
                        <li>Hundkorg eller säng</li>
                        <li>Hundben och leksak</li>
                        <li>Kloklippare</li>
                        <li>Borste</li>
                        <li>Schampoo</li>
                        <li>Tandbortse och tandkräm</li>
                        <li>För frusen hund - ett vintertäcke</li>
                        </ul>
                        "
                    />
                    <FaqAccordion
                        title="Vilket typ av mat ska min hund äta?"
                        content="Vi på Matching Paws rekommenderar att du inte byter hundfoder när du får hem din hund utan använder samma foder som hunden är van vid. Din hund kommer att ha tillräckligt med förändringar att anpassa sig till den första tiden.
                        Vill du sen framåt ändra hundfoder så går det givetvis bra. Kom ihåg att göra detta gradvis och hör även efter med den tidigare ägaren om det finns några speciella anledningar till att hunden äter det nuvarande fodret.
                        "
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Hundlivet;