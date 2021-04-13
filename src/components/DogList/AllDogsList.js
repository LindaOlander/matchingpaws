import React, { useState, useEffect } from 'react';
import DogBox from '../DogBox/DogBox';
import axios from 'axios';
import './DogList.css';

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
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0'}}>
        <h5>Alla hundar i Matchings Paws databas</h5>
    {data.length && 
        data.map(dog =>
            <DogBox
            key={dog._id}
            hundnamn={dog.hundnamn}
            alder={dog.alder}
            ras={dog.ras}
            bild={dog.bild}
            id={dog._id} />)
    }
    </div>
  )
};

export default AllDogsList;