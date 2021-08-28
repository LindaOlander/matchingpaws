import React from 'react';
import './Footer.css';

const Footer = () => {
    const iconWhite = require('../../images/Icon-MatchingPaws-white.png')
    const instagram = require('../../images/instagram.png')
    const fb = require('../../images/fb.png')
    return (
        <div className="footerWrapper">
                <div className="footerLogoWrapper">
                    <img className="footerLogo" alt="Logo" src={iconWhite.default} />
                    <span>Matching Paws</span>
                </div>
            <div className="footer-icons">
                <a href="mailto:hello@matchingpaws.se" target="_blank" rel="noreferrer">
                    <span style={{fontSize: '18px', color: 'white'}}>
                        <i className="far fa-envelope"></i>
                    </span>
                </a>
                <a href="https://www.instagram.com/matchingpaws.se" target="_blank" rel="noreferrer"><img alt="Instagram" src={instagram.default} /></a>
                <a href="https://www.facebook.com/matchingpaws" target="_blank" rel="noreferrer"><img alt="Facebook" src={fb.default} /></a>
            </div>
        </div>
    )
}

export default Footer;