import React from 'react';
import Navbar from '../../Navbar/Navbar';
import WizardParent from '../../StepWizard/Wizard/WizardParent';

const Adoptera = () => {
    return (
        <>
            <Navbar color="white" />
            <div className="headerWizard">
                <h2>Hitta din match</h2>
                <p>Låt vårt matchningsverktyg identifiera lämpliga matchningar till dig.</p>
                <p>Var noga med att svara sanningsenligt på testet, <br />för dig och din framtida hunds skull!</p>
                <a href="#quiz"><button>Starta testet</button></a>
            </div>
            <WizardParent />
        </>
    )
}

export default Adoptera;