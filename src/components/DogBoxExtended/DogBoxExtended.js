import React, {useState} from "react"
import { Link } from "react-router-dom";
import './DogBoxExtended.css';

const DogBoxExtended = ({id, bild, hundnamn, ras, alder, beskrivning, lank, kontaktnamn, email, hundarutanhem}) => {
    const [seeEmail, setSeeEmail] = useState(false);

    const showEmail = () => {
        setSeeEmail(!false);
      }
    
      const hasHundarutanhemLink = lank.includes('hundarutanhem.se');
      console.log('hasHundarutanhemLink', hasHundarutanhemLink)

    return (
      <div className="dog-wrapper">
        {/* <Link to={`/adoptera/${id}`}> */}
          <div className="dog-image-wrapper-extended">
            <img alt="dog" src={bild} className="dog-image"/>
            {hasHundarutanhemLink && <img alt="hundarutanhem" src={hundarutanhem.default} className="dog-icon"/>}
          </div>
        {/* </Link> */}
        <div className="dog-info-wrapper-extended">
            <h4>{hundnamn}</h4>
            <p>{ras}, {alder} år</p>
            <br />
            <p className="dog-info-description">{beskrivning}</p>
        </div>
        <div className="dog-contact-wrapper-extended">
            <h5>Kontakt</h5>
            <p>För att påbörja en kontakt med ägaren till {hundnamn}, kontakta <i>{kontaktnamn}</i>.</p>
            {email && !seeEmail && <button className="buttonLinkSecret" onClick={showEmail}>Klicka här för mailadress</button>}
            <div className="kravButtons">
                {seeEmail && <a className="buttonLink" href={`mailto:${email}`}>{email}</a>}
                {lank && 
                <a href={lank} target="_blank">
                  <button className="button buttonWrapper">Länk till adoptionsannons</button>
                </a>}
            </div>
        </div>
      </div>
    )
  }

export default DogBoxExtended;
