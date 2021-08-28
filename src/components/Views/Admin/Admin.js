import React from 'react';
import Navbar from '../../Navbar/Navbar';
import AddDogs from '../../AddDogs/AddDogs';
import AllDogsList from '../../DogList/AllDogsList';

const Admin = () => {
    window.scrollTo(0, 0);
    const alma = require('../../../images/Alma.png');
    const kiros = require('../../../images/Kiros.jpg');
    const kiros2 = require('../../../images/Kiros2.jpg');

    return (
        <>
            <Navbar />
            <div style={{ height: '60vh', backgroundColor: '', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0f242e', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h2 style={{margin: '0'}}>Admin</h2>
            </div>
            <div className="contentWrapper">
                <div>
                    <h2>Hundar</h2>
                    <h5>Alla hundar i Matchings Paws databas</h5>
                    <AllDogsList />
                </div>
                <h2>Publicera en hund</h2>
                <AddDogs />
                <div>
                    <h2>Bilder</h2>
                    <br />
                    <h5>Alma</h5>
                    <img src={alma.default} alt="Alma" width="100px"/>
                    <h5>Kiros</h5>
                    <img src={kiros.default} alt="Kiros" width="100px"/>
                    <img src={kiros2.default} alt="Kiros" width="100px"/>
                </div>
            </div>
        </>
    )
}

export default Admin;