import React from 'react';
import './About.css'

const AboutCorona = () => {
    return (
        <div className="contentWrapper rowDesktop background-lightgrey paddingWrapper">
            <>
                <img alt="dog" src="https://images.unsplash.com/photo-1547677329-fe2b4e9b19d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" className="about-image"/>
            </>
            <div className="aboutCoronaWrapper">
                <h3>
                    Hundar under pandemin
                </h3>
                <h6>
                    Väldigt många familjer har skaffat hund under pandemin, men vad händer sen? Var hamnar hunden när livet återgår till det normala. Vi oroar oss över att hundarna blir övergivna och ensamma vilket ofta leder till att de måste omplaceras eller avlivas i framtiden.
                </h6>
            </div>
        </div>
    )
}

export default AboutCorona;