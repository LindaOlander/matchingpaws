import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import Footer from '../../Footer/Footer';
import HeaderHundlivet from '../../Header/HeaderHundlivet';
import FaqAccordion from '../../FaqAccordion/FaqAccordion';
import './Hundlivet.css';

const Hundlivet = () => {
    return (
        <>
            <NavbarBlack color="black"/>
            <HeaderHundlivet />
            <div className="contentWrapper">
            <p>Att skaffa hund är att bli en till familjemedlem. Det är en hel del som behöver förberedas inför livet med din nya hund.</p>
                <div id="förberedelser" className="accordionWrapper">
                    <h5>Förberedelser</h5>
                    <FaqAccordion
                        title="Hur vet jag att jag är redo att skaffa hund?"
                        content="Bara du själv kan avgöra om du är redo att skaffa hund men du bör kunna svara “Ja” på samtliga nedanstående frågor om du är redo att skaffa hund:
                        - Har du en lösning för hundpassning under vardagarna när du t.ex. jobbar eller är iväg?
                        - Klarar din ekonomi av att ta hand om en hund?
                        - Är du villig att lägga ner tid och energi på att uppfostra och ta hand om din hund?
                        "
                    />
                    <FaqAccordion
                        title="Vilken typ av hund passar mig?"
                        content="Vi avråder starkt från att välja hund utifrån utseende eller andra exteriöra preferenser då det kan sluta med att både du och din hund blir djupt olyckliga. Låt istället vårt matchningsverktyg avgöra vilken hund som passar bäst för dig."
                    />
                </div>
                <div id="ekonomi" className="accordionWrapper">
                    <h5>Ekonomi och försäkringar</h5>
                    <FaqAccordion
                        title="Vad kostar det att ha en hund?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <FaqAccordion
                        title="Vilken försäkring ska jag ha?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div id="första-tiden" className="accordionWrapper">
                    <h5>Första tiden med din hund</h5>
                    <FaqAccordion
                        title="Vad ska jag ha med mig när jag hämtar hunden?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <FaqAccordion
                        title="Vad ska jag tänka på under de första dagarna?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div id="mat-utrustning" className="accordionWrapper">
                    <h5>Mat och utrustning</h5>
                    <FaqAccordion
                        title="Vilken utrustning behöver min hund?"
                        content="MatchingPaws rekommenderar att ha följande grundkit för din hund:
                        Mat och vattenskål
                        Koppel och sele/halsband
                        Hundkorg eller säng
                        Hundben och leksak
                        Kloklippa
                        Borste
                        Schamoo
                        Tandbortse och tandkräm
                        För frusen hund - ett vintertäcke
                        "
                    />
                    <FaqAccordion
                        title="Vilket typ av mat ska min hund äta?"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Hundlivet;