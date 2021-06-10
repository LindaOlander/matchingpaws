import React from 'react';
import './About.css'

const AboutCorona = () => {
    return (
        <div className="contentWrapper rowDesktop background-lightgrey paddingWrapper">
            <>
                <img alt="dog" src="https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="about-image"/>
            </>
            <div className="aboutCoronaWrapper">
                <h2>
                    I pandemins spår
                </h2>
                <h6>
                Under pandemin ökade antalet nyregistrerade hundar markant då allt fler familjer i Sverige fick utökade möjligheter att ta hand om en hund.  Matching Paws tycker i grunden att detta är positivt men vi oroar oss för vad som händer när pandemin är över..
                </h6>
                <h6>
                För många familjer kommer problem att uppstå när möjligheter till distansarbete avtar och hundpassningen behöver lösas. Matching Paws vill finnas som stöd i situationer där hundar behöver omplaceras och säkerställa att alla finner ett nytt tryggt hem.
                </h6>
            </div>
        </div>
    )
}

export default AboutCorona;