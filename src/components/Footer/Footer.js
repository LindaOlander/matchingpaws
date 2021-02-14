import React from 'react';
import './Footer.css';

const Footer = () => {
    const iconWhite = require('../../images/Icon-MatchingPaws-white.png')
    const email = require('../../images/email.png')
    const instagram = require('../../images/instagram.png')
    return (
        <div className="footer-wrapper">
            <img className="logo" src={iconWhite.default} />
            <p><strong>Matching Paws</strong></p>
            <a>hello@matchingpaws.se</a>
            <div className="footer-icons">
                <a href="mailto:hello@matchingpaws.se"><img src={email.default} /></a>
                <a href="www.instagram.com/matchingpaws" target="_blank"><img src={instagram.default} /></a>
            </div>
        </div>
    )
}

export default Footer;