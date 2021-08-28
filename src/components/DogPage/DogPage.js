import React, {useState, useEffect} from 'react';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import './DogPage.css';
import NavbarBlack from '../Navbar/NavbarBlack';

const DogPage = ({ match }) => {
  const [data, setData] = useState([{}]);
  const [seeEmail, setSeeEmail] = useState(false);
  // let history = useHistory();

  let params = match.params;
  const id = params.id

  const showEmail = () => {
    setSeeEmail(!false);
  }

    useEffect(() => {
      const fetchDogs = async () => {
        const result = await axios(`https://matchingpaws-api.herokuapp.com/dogs/${id}`);
        setData(result.data);
      };
      fetchDogs();
    }, [id]);

    console.log(data);
  
    useEffect(() => {
      if (!seeEmail) {
        window.scrollTo(0, 0);
      }
    })
    
    return (
      <>
      <NavbarBlack color="black" />
        <div className="contentWrapper">
      {/* <Link to="/adoptera"><button className="buttonLink">Gå tillbaka</button></Link> */}
      {/* <button onClick={history.goBack}>Go back</button> */}
        <div className="dogpage-container">
          <div className="dogpage-image-wrapper">
            <img alt="dog" src={data.bild} className="dogpage-image"/>
          </div>
          <div className="dogpage-info-wrapper">
            <h2>{data.hundnamn}</h2>
            <div>
              <p>Ras: {data.ras}</p>
              <p>Ålder: {data.alder} år</p>
              <p>Storlek: {data.storlek}</p>
              <p>Kastrerad: {data.kastrerad}</p>
            </div>
            <div className="descriptionWrapper">
              <p><i>{data.beskrivning}</i></p>
            </div>
          </div>
        </div>
          {/* <div className="kravContainer">
            <h5>Krav</h5>
            <div className="kravWrapper">
              <p>Tidigare hunderfarenhetskrav:</p>
              {data.hunderfarenhet === 'mycket' && <span className="kravText">Mycket</span>}
              {data.hunderfarenhet === 'ganska' && <span className="kravText">Lite</span>}
              {data.hunderfarenhet === 'lite' && <span className="kravText">Ingen</span>}
            </div>
            <div className="kravWrapper">
              <p>Fysisk förmåga:</p>
              {data.fysik === 'hög' && <span className="kravText">Hög</span>}
              {data.fysik === 'normal' && <span className="kravText">Normal</span>}
              {data.fysik === 'låg' && <span className="kravText">Låg</span>}
            </div>
            <div className="kravWrapper">
              <p>Fäller päls</p>
              {data.allergi === 'ja' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.allergi === 'nej' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Kan bo med barn:</p>
              {data.barn === 'ja' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.barn === 'nej' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Kan bo med katt:</p>
              {data.katt === 'ja' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.katt === 'nej' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Kan bo med hund:</p>
              {data.hund === 'båda' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.hund === 'tikar' && <span className="kravText">Tikar</span>}
              {data.hund === 'hanar' && <span className="kravText">Hanar</span>}
              {data.hund === 'nej' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Kan bo i stadsmiljö:</p>
              {data.boende === 'landet' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
              {data.boende === 'villaområde' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
              {data.boende === 'lägenhet' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
              {data.boende === 'centralt' && <span className="successIcon"><i class="fas fa-check"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Kan gå på hunddagis:</p>
              {data.hundpassning !== 'hemma' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.hundpassning === 'hemma' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Föredrar ett lugnt hem:</p>
              {data.energi === 'lugnt' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.energi === 'båda' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.energi === 'fartfyllt' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Föredrar ett fartfyllt hem:</p>
              {data.energi === 'lugnt' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
              {data.energi === 'båda' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
              {data.energi === 'fartfyllt' && <span className="successIcon"><i class="fas fa-check"></i></span>}
            </div>
            <div className="kravWrapper">
              <p>Är van vid ett tydligt ledarskap:</p>
              {data.ledarskap === 'tydligt' && <span className="successIcon"><i class="fas fa-check"></i></span>}
              {data.ledarskap === 'mjukt' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
            </div>
          </div> */}
          <div className="descriptionWrapper">
          <h5>Kontakt</h5>
          <p>För att påbörja en kontakt med ägaren till {data.hundnamn}, kontakta <i>{data.kontaktnamn}</i>.</p>
          {!seeEmail && <button className="buttonLinkSecret" onClick={showEmail}>Klicka här för mailadress</button>}
          <div className="kravButtons">
            {seeEmail && <a className="buttonLink" href={`mailto:${data.email}`}>{data.email}</a>}
            {data.lank && <button href="www.matchingpaws.se" target="_blank" className="button buttonWrapper">Länk till adoptionsannons</button>}
          </div>
        </div>
      </div>
      </>
    )
}

export default DogPage;