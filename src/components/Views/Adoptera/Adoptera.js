import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import WizardParent from '../../Wizard/WizardParent';
import StepWizard from '../../StepWizard/StepWizard';

const Adoptera = () => {

    const scrollDown = () => {
        window.scrollTo({
            top: 550,
            left: 0,
            behavior: 'smooth'
          });
    }
    return (
        <>
            <NavbarBlack color="black" />
            <div className="headerWizard">
                <h2>Hitta din match</h2>
                <p>Låt vårt matchnings-verktyg identifiera <br /> lämpliga matchningar <br /> till dig.</p>
                <p>Var noga med att svara sanningsenligt på testet, <br />för dig och din framtida hunds skull!</p>
                <button onClick={scrollDown} className="button">Starta testet</button>
            </div>
            <WizardParent />
            {/* <StepWizard /> */}
        </>
    )
}

export default Adoptera;