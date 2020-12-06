import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../../Header/Header';
import AboutMedium from '../../About/AboutMedium';
import AboutSmall from '../../About/AboutSmall';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Start = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    console.log('localhost', process.env)
    return (
        <>
            <Navbar />
            <Header />
            <AboutMedium />
            <div style={{height: "30vh", color: "#ffffff", backgroundColor: "#838976", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                {/* <Link to="/adoptera"><h2 style={{fontSize: "20px", fontWeight: "bold", textAlign: "center"}}>Låt våra algoritmer hitta den perfekta hunden för dig</h2></Link> */}
                <Link to="/quiz"><h3 style={{color: "#ffffff"}}>Låt våra algoritmer hitta den perfekta hunden för dig</h3></Link>
            </div>
            <AboutSmall />
            <form action="/dogs" method="POST">
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="quote" name="quote" />
                <button type="submit">Submit</button>
            </form>
            <Footer />
        </>
    )
}

export default Start;