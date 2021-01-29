import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Quiz from '../Quiz/Quiz';
import DogList from '../../DogList/DogList';
import Wizard from '../../StepWizard/StepWizard';
import WizardParent from '../../StepWizard/Wizard/WizardParent';

const Adoptera = () => {
    return (
        <>
            <NavbarBlack color="black" />
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