import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import './DogPage.css';

const DogPage = ({ match }) => {
  const [data, setData] = useState([{}]);

  let params = match.params;
  const id = params.id

    useEffect(() => {
      const fetchDogs = async () => {
        const result = await axios(`http://localhost:8080/dogs/${id}`);
        setData(result.data);
      };
      fetchDogs();
    }, []);

    console.log(data);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    })

    return (
      <>
      <Link to="/quiz"><div className="back">Gå tillbaka</div></Link>
        <div className="dogpage-wrapper">
            <div className="dogpage-image-wrapper">
              <img alt="dog" src={data.image} className="dogpage-image"/>}
            </div>
          <div className="dogpage-info-wrapper">
              <h2>{data.name}</h2>
              <p>Ras: {data.breed}</p>
              <p>Ålder: {data.age}</p>
            <div>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </>
    )
}

export default DogPage;