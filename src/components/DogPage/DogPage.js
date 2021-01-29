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
        const result = await axios(`https://test-matchingpaws.herokuapp.com/dogs/${id}`);
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
      <Link to="/adoptera"><div className="back">Gå tillbaka</div></Link>
        <div className="dogpage-wrapper">
            <div className="dogpage-image-wrapper">
              <img alt="dog" src={data.bild} className="dogpage-image"/>
            </div>
          <div className="dogpage-info-wrapper">
              <h2>{data.hundnamn}</h2>
              <p><i>{data.beskrivning}</i></p>
              <p>Ras: {data.ras}</p>
              <p>Ålder: {data.alder} år</p>
              <p>Storlek: {data.storlek}</p>
              <p>Kastrerad: {data.kastrerad}</p>
              <p>Kräver <i>{data.hunderfarenhet}</i> erfarenhet</p>
              <p>Kräver <i>{data.fysik}</i> fysisk förmåga</p>
              <p>Fäller päls: {data.allergi}</p>
              <p>Kan bo med barn: {data.barn}</p>
              <p>Kan bo med katt: {data.katt}</p>
              <p>Kan bo med andra: hundar {data.hund}</p>
              <p>Behöver bo i: {data.boende}</p>
              <p>På dagarna kan hunden vara: {data.hundpassning}</p>
              <p>Bor helst i ett <i>{data.energi}</i> hem</p>
              <p>Önskar ett <i>{data.ledarskap}</i> ledarskap</p>
              <br />
              <p>Kontakta <b>{data.kontaktnamn}</b> för intresseanmälan</p>
              <a>{data.email}</a>
              <a href={data.lank}><p>Länk till adoptionsannons</p></a>
          </div>
        </div>
      </>
    )
}

export default DogPage;