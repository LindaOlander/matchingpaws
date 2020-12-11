import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <p>Lägg till din hund</p>
            <form action="/dogs" method="POST">
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="quote" name="quote" />
                <button type="submit">Skicka</button>
            </form>
        </div>
    )
}

export default Footer;