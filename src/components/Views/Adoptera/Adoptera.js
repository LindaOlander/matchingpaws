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
            <div className="headerWizard">
                <h2>Hitta din match</h2>
                <p>Låt vårt matchningsverktyg identifiera lämpliga matchningar till dig.</p>
                <p>Var noga med att svara sanningsenligt på testet - för dig och din framtida hunds skull!</p>
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