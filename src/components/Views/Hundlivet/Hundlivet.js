import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import Footer from '../../Footer/Footer';
import HeaderHundlivet from '../../Header/HeaderHundlivet';
import FaqBoxes from '../../FaqBoxes/FaqBoxes';
import FaqAccordion from '../../FaqAccordion/FaqAccordion';

const Hundlivet = () => {
    return (
        <>
            <NavbarBlack color="black"/>
            <HeaderHundlivet />
            <FaqBoxes />
            <div id="förberedelser" style={{margin: "0 15px"}}>
                <h3>Förberedelser</h3>
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
            <div id="ekonomi" style={{margin: "0 15px 30px 15px"}}>
                <h3>Ekonomi och försäkringar</h3>
                <FaqAccordion
                    title="Vad kostar det att ha en hund?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vilken försäkring ska jag ha?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <div id="första-tiden" style={{margin: "0 15px 30px 15px"}}>
                <h3>Första tiden med din hund</h3>
                <FaqAccordion
                    title="Vad ska jag ha med mig när jag hämtar hunden?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vad ska jag tänka på under de första dagarna?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <div id="mat-utrustning" style={{margin: "0 15px 30px 15px"}}>
                <h3>Mat och utrustning</h3>
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
            <Footer />
        </>
    )
}

export default Hundlivet;