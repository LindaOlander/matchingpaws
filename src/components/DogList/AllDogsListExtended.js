import React, { useState, useEffect } from 'react';
import DogBox from '../DogBox/DogBox';
import axios from 'axios';
import './DogList.css';
import DogBoxExtended from '../DogBoxExtended/DogBoxExtended';
import Navbar from '../Navbar/Navbar';

const AllDogsList = () => {
    const [data, setData] = useState({  dogs: [] });

  useEffect(() => {
    const fetchDogs = async () => {
      const result = await axios('https://matchingpaws-api.herokuapp.com/dogs');
      setData(result.data);
    };
 
    fetchDogs();
  }, []);

  console.log('data', data)
  const hundarutanhem = require('../../images/hundarutanhem/hundarutanhem-circle.png');
  
  return (
    <>
      <Navbar color="#ffffff"/>
      <div className="heroPink">
        <h2 style={{margin: '0'}}>Alla hundar</h2>
      </div>
      <div className="dogsListWrapper-extended">
        {data.length && 
          data.map(dog =>
            <DogBoxExtended
              key={dog._id}
              hundnamn={dog.hundnamn}
              alder={dog.alder}
              ras={dog.ras}
              bild={dog.bild}
              id={dog._id}
              beskrivning={dog.beskrivning}
              kontaktnamn={dog.kontaktnamn}
              email={dog.email}
              lank={dog.lank}
              hundarutanhem={hundarutanhem}
            />
          )
        }
      </div>
    </>
  )
};

export default AllDogsList;