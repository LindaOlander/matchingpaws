import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import './DogPage.css';

const DogPage = ({ match }) => {
  const [data, setData] = useState([{}]);
  const [seeEmail, setSeeEmail] = useState(false);

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
    }, []);

    console.log(data);
  
    useEffect(() => {
      if (!seeEmail) {
        window.scrollTo(0, 0);
      }
    })
    

    return (
      <>
        <div className="contentWrapper">
      <Link to="/adoptera"><button className="buttonLink">Gå tillbaka</button></Link>
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
              <div>
                <h5>Krav</h5>
                <div className="kravWrapper">
                  <p>Tidigare hunderfarenhet:</p>
                  {data.hunderfarenhet === 'mycket' && <span className="successIcon"><i class="fas fa-check"></i></span>}
                  {data.hunderfarenhet === 'ganska' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
                  {data.hunderfarenhet === 'lite' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
                </div>
                <div className="kravWrapper">
                  <p>Hög fysisk förmåga:</p>
                  {data.fysik === 'hög' && <span className="successIcon"><i class="fas fa-check"></i></span>}
                  {data.fysik === 'mellan' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
                  {data.fysik === 'låg' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
                </div>
                <div className="kravWrapper">
                  <p>Går ihop med allergiker:</p>
                  {data.allergi === 'ja' && <span className="successIcon"><i class="fas fa-check"></i></span>}
                  {data.allergi === 'lite' && <span className="successIcon"><i class="fas fa-check"></i></span>}
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
                  {data.hund === 'tikar' && <span>Endast tikar</span>}
                  {data.hund === 'hanar' && <span>Endast hanar</span>}
                  {data.hund === 'nej' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
                </div>
                <div className="kravWrapper">
                  <p>Kan bo i stadsmiljö:</p>
                  {data.boende === 'villa-stad' && <span className="successIcon"><i class="fas fa-check"></i></span>}
                  {data.boende === 'lgh-stad' && <span className="successIcon"><i class="fas fa-check"></i></span>}
                  {data.boende === 'villa-landet' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
                  {data.boende === 'lgh-landet' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
                </div>
                <div className="kravWrapper">
                  <p>Kan bo i lägenhet:</p>
                  {data.boende === 'lgh-landet' || data.boende === 'lgh-stad' && <span className="successIcon"><i class="fas fa-check"></i></span>}
                  {data.boende === 'villa-landet' || data.boende === 'villa-stad' && <span className="declineIcon"><i class="fas fa-times"></i></span>}
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
              </div>
              <div className="descriptionWrapper">
                <h5>Kontakt</h5>
                <p>För att påbörja en kontakt med ägaren till {data.hundnamn}, kontakta <i>{data.kontaktnamn}</i>.</p>
                {!seeEmail && <button className="buttonLinkSecret" onClick={showEmail}>Klicka här för mailadress</button>}
                {seeEmail && <a className="buttonLink" href={`mailto:${data.email}`}>{data.email}</a>}
                {data.lank && <button href="www.matchingpaws.se" target="_blank" className="button buttonWrapper">Länk till adoptionsannons</button>}
              </div>
          </div>
        </div>
      </>
    )
}

export default DogPage;