import React, {useState} from "react"
import '../DogBox/DogBox.css';

const DogBoxExtended = ({id, bild, hundnamn, ras, alder, beskrivning, lank, kontaktnamn, email}) => {
    const [seeEmail, setSeeEmail] = useState(false);

    const showEmail = () => {
        setSeeEmail(!false);
      }

    return (
      <div className="dog-wrapper">
        {/* <Link to={`/adoptera/${id}`}> */}
          <div className="dog-image-wrapper">
            <img alt="dog" src={bild} className="dog-image"/>
          </div>
        {/* </Link> */}
        <div className="dog-info-wrapper">
            <h4>{hundnamn}</h4>
            <p>{ras}, {alder} år</p>
            <br />
            <p className="dog-info-description">{beskrivning}</p>
        </div>
        <div className="dog-contact-wrapper">
            <h5>Kontakt</h5>
            <p>För att påbörja en kontakt med ägaren till {hundnamn}, kontakta <i>{kontaktnamn}</i>.</p>
            {!seeEmail && <button className="buttonLinkSecret" onClick={showEmail}>Klicka här för mailadress</button>}
            <div className="kravButtons">
                {seeEmail && <a className="buttonLink" href={`mailto:${email}`}>{email}</a>}
                {lank && <button href="www.matchingpaws.se" target="_blank" className="button buttonWrapper">Länk till adoptionsannons</button>}
            </div>
        </div>
      </div>
    )
  }

export default DogBoxExtended;
