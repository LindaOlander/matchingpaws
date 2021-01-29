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
            <Navbar color="black" />
            <div className="headerWizard" style={{height: '100vh', padding: '0 25px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2>Hitta din match</h2>
                <a href="#quiz"><button>Starta testet</button></a>
            </div>
            <WizardParent />
            {/* <Wizard /> */}
            {/* <Quiz /> */}
            {/* <DogList /> */}
        </>
    )
}

export default Adoptera;