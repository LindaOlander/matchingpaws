import React from 'react';
import DogBox from "../DogBox/DogBox";
import DogBoxExtended from '../DogBoxExtended/DogBoxExtended';


const WizardResults = ({ data, state }) => {
    console.log('state', state);
    console.log('data', data)
    
    return (
        <>
        {data?.map(dog =>
            // <DogBox
            // key={dog._id}
            // hundnamn={dog.hundnamn}
            // alder={dog.alder}
            // ras={dog.ras}
            // bild={dog.bild}
            // id={dog._id} />
            <DogBoxExtended 
                key={dog._id}
                hundnamn={dog.hundnamn}
                alder={dog.alder}
                ras={dog.ras}
                bild={dog.bild}
                id={dog._id}
                beskrivning={dog.beskrivning}
                lank={dog.lank}
                kontaktnamn={dog.kontaktnamn}
                email={dog.email}
                lank={dog.lank}
            />
        )}
        </>
    )
}

export default WizardResults;