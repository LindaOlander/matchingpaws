import React from 'react';
import Navbar from '../../Navbar/Navbar';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Quiz from '../Quiz/Quiz';
import DogList from '../../DogList/DogList';
import Wizard from '../../StepWizard/StepWizard';
import WizardParent from '../../StepWizard/Wizard/WizardParent';

const Adoptera = () => {
    return (
        <>
            <Navbar />
            <WizardParent />
            {/* <Wizard /> */}
            {/* <Quiz /> */}
            {/* <DogList /> */}
        </>
    )
}

export default Adoptera;