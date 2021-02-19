import React from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import WizardParent from '../../StepWizard/Wizard/WizardParent';
import { HashLink as Link } from 'react-router-hash-link';
import WizardNew from '../../StepWizard/WizardNew';

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
            {/* <WizardNew /> */}
            <WizardParent />
        </>
    )
}

export default Adoptera;