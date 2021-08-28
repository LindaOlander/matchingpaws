import React, { useState, useEffect } from 'react';
import NavbarBlack from '../../Navbar/NavbarBlack';
import WizardParent from '../../Wizard/WizardParent';
import {GApageView, Event} from '../../Tracking/index';
import './Adoptera.css'

const Adoptera = () => {
    const [showQuiz, setShowQuiz] = useState(false)
    const [showHeader, setShowHeader] = useState(true)

    useEffect(() => { GApageView("adoptera"); }, []);

    // const scrollDown = () => {
    //     window.scrollTo({
    //         top: 650,
    //         left: 0,
    //         behavior: 'smooth'
    //       });
    // }

    const startQuiz = () => {
        setShowQuiz(true)
        setShowHeader(false)
        Event("QUIZ", "Startade quiz", "QUIZ-startat")
    }
    return (
        <>
            <NavbarBlack color="black" />
            {showHeader && 
            <div className="headerWizard">
                <h2>Hitta din match</h2>
                <p className="headerWizardHeading">Låt vårt matchningsverktyg identifiera lämpliga matchningar till dig.</p>
                <p className="headerWizardDisclaimer">Psst! Var noga med att svara sanningsenligt på testet, för dig och din framtida hunds skull.</p>
                <button onClick={startQuiz} className="button">Starta testet</button>
            </div>}
            {showQuiz && <WizardParent />}
        </>
    )
}

export default Adoptera;