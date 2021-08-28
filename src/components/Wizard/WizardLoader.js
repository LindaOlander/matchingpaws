import React from 'react';
import './WizardLoader.css';

export const WizardLoader = () => {
    return (
        <>
        {/* <div className="loader">Loading...</div> */}
        {/* <div className="pulse-spinner"></div> */}
        <h3 className="dots">
            Hämtar matchingar
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </h3>
        
        </>
    )
}

export default WizardLoader;