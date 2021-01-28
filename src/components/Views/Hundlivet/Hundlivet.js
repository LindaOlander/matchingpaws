import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import HeaderHundlivet from '../../Header/HeaderHundlivet';
import FaqBoxes from '../../FaqBoxes/FaqBoxes';
import FaqAccordion from '../../FaqAccordion/FaqAccordion';

const Hundlivet = () => {
    return (
        <>
            <Navbar color="black"/>
            <HeaderHundlivet />
            <FaqBoxes />
            <div id="förberedelser" style={{margin: "0 15px"}}>
                <h3>Förberedelser</h3>
                <FaqAccordion
                    title="Hur förbereder jag mig?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vad behöver jag för leksaker?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Hur mycket mat behövs?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Behöver jag köpa trimmer?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <div id="hämtning" style={{margin: "0 15px 30px 15px"}}>
                <h3>Hämtning</h3>
                <FaqAccordion
                    title="Vad ska jag ha med mig när jag hämtar?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vad ska jag ha med mig när jag hämtar?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vad ska jag ha med mig när jag hämtar?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vad ska jag ha med mig när jag hämtar?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vad ska jag ha med mig när jag hämtar?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <FaqAccordion
                    title="Vad ska jag ha med mig när jag hämtar?"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <Footer />
        </>
    )
}

export default Hundlivet;