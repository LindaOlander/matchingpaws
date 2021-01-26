import React from 'react';
import Navbar from '../../Navbar/Navbar';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Quiz from '../Quiz/Quiz';
import DogList from '../../DogList/DogList';
import Wizard from '../../StepWizard/StepWizard';

const Adoptera = () => {
    return (
        <>
            <Navbar />
            <Wizard />
            {/* <Quiz /> */}
            {/* <DogList /> */}
        </>
    )
}

export default Adoptera;