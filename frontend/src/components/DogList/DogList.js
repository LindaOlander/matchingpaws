import React, { useState, useEffect } from 'react';
import DogBox from '../DogBox/DogBox';
import axios from 'axios';
import './DogList.css';

const DogList = () => {
  const finalprojectServer =
  process.env.NODE_ENV === "production"
  ? "https://finalprojectlinda.herokuapp.com/products"
  : "http://localhost:8080/dogs";

  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchDogs = async () => {
      const result = await axios(finalprojectServer);
      setData(result.data);
    };
 
    fetchDogs();
  }, []);

  console.log(data);

  return (
    <div className="dogs-wrapper">
      <div id="dogs" style={{padding: "60px 10px 0 10px"}}>
        <h4 style={{margin: "0", fontSize: "24px", textAlign: "center"}}>Enligt våra algoritmer skulle du passa bäst ihop med:</h4>
      </div>
      {data.map(dog =>
        <DogBox
          key={dog._id}
          name={dog.name}
          image={dog.image}
          breed={dog.breed}
          age={dog.age}
          cat={dog.cat}
          children={dog.children}
          longWalks={dog.longWalks}
          id={dog._id} />)}
    </div>
  )
};

export default DogList;