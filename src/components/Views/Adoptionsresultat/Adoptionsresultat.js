import React from 'react';
import { useLocation } from "react-router-dom";
import WizardLoader from '../../Wizard/WizardLoader';

const Adoptionsresultat = ({state, data, filterDogs, ...props}) => {
    let location = useLocation();
    // const filtreredState = props.location.query.state;
    // const filtreredData = props.location.query.data;
 console.log('Adotionsresultat props', props)
 console.log('location', location)
    // console.log('Adotionsresultat data', props.location.query.data)
    // console.log('Adotionsresultat state', props.location.query.state)


    return (
        <>
            Adoptionsresultat
            <WizardLoader />
            {/* <button className="button wizardResultButton" onClick={filterDogs}>Visa resultat</button> */}
                {/* <>
                    <h3>Grattis, du har blivit matchad!</h3>
                    <p>Enligt våra algoritmer skulle du passa bäst med nedanstående hundar. Läs på om hunden du matchats med och kontakta deras nuvarande ägare om du seriöst är intresserad av att adoptera deras hund.</p>
                    <div id="dogResult" className="dogResult">
                        <WizardResults state={state} data={data}/>
                    </div>
                </>
                <>
                    <h3>Just nu finns det tyvärr ingen hund som matchar med dig.</h3>
                    <p>Men ge inte upp! Vi på Matching Paws får löpande in hundar som behöver omplaceras och snart kanske det kommer in en hund som passar just dig.</p>
                    <p>Vi rekommenderar därför dig att gå in regelbundet på hemsidan och göra om testet för att se om om det kommit ny hundar som du matchar med eller om dina omständigheter har ändrats.</p>
                </> */}
        </>
    )
}

export default Adoptionsresultat;