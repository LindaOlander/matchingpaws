import React from 'react';
import './Footer.css';

const Footer = () => {
    const iconWhite = require('../../images/Icon-MatchingPaws-white.png')
    const email = require('../../images/email.png')
    const instagram = require('../../images/instagram.png')
    const fb = require('../../images/fb.png')
    return (
        <div className="footer-wrapper">
            <img className="logo" src={iconWhite.default} />
            <p><strong>Matching Paws</strong></p>
            <div className="footer-icons">
                <a href="mailto:hello@matchingpaws.se"><img src={email.default} /></a>
                <a href="https://www.instagram.com/matchingpaws.se" target="_blank"><img src={instagram.default} /></a>
                <a href="https://www.facebook.com/matchingpaws" target="_blank"><img src={fb.default} /></a>
            </div>
        </div>
    )
}

export default Footer;