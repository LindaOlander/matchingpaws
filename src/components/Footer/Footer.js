import React from 'react';
import './Footer.css';

const Footer = () => {
    const iconWhite = require('../../images/Icon-MatchingPaws-white.png')
    const email = require('../../images/email.png')
    const instagram = require('../../images/instagram.png')
    const fb = require('../../images/fb.png')
    return (
        <div className="footerWrapper">
            <div>
                <div className="footerLogoWrapper">
                    <img className="footerLogo" src={iconWhite.default} />
                    <span>Matching Paws</span>
                </div>
                {/* <div className="footerInfoWrapper">
                    <h6 style={{margin: '0px'}}>Adress</h6>
                    <h6 style={{margin: '0px'}}>Postort</h6>
                    <h6 style={{margin: '0px'}}>Stockholm</h6>
                </div> */}
                <h6>
                    Hör av dig! Vi nås på:
                </h6>
                <a className="logoEmail" href="mailto:hello@matchingpaws.se"><h4>hello@matchingpaws.se</h4></a>
            </div>
            <div className="footer-icons">
                {/* <a href="mailto:hello@matchingpaws.se"><img src={email.default} /></a> */}
                <a href="https://www.instagram.com/matchingpaws.se" target="_blank"><img src={instagram.default} /></a>
                <a href="https://www.facebook.com/matchingpaws" target="_blank"><img src={fb.default} /></a>
            </div>
        </div>
    )
}

export default Footer;