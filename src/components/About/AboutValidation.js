import React from 'react';
import './AboutValidation.css'

const AboutValidation = () => {
    const validationStamp = require('../../images/MatchingPaws-smuggel-logo.png')
    return (
        <>
        <div className="contentWrapper paddingWrapper rowDesktop validationWrapper">
            <div className="validationIconWrapper">
                <img width="270px" alt="Validation" src={validationStamp.default} />
            </div>
            <div className="validationTextWrapper">
                <h3>
                    Vi jobbar emot smuggelverksamhet          
                </h3>
                <h6>
                    Smuggelverksamheten i Stockholm ökar, framför allt under pandemin när efterfrågan på hundar har skjutit i höjden. Som ett steg för att motverka smuggelverksamheten har vi en strikt valideringsprocess
                    och kräver vaccinationsintyg, försäkringsintyg eller SKK-registreringsintyg när en ägare laddar upp sin hund för matching. Vi godkänner inte hundar under 6 månader i vår adoptionsdatabas.
                </h6>
            </div>
        </div>
        </>
    )
}

export default AboutValidation;