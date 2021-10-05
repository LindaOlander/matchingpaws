import React, {useState, useEffect} from 'react';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import './DogPage.css';
import NavbarBlack from '../Navbar/NavbarBlack';
import { CircleProgress } from 'react-gradient-progress';
import {SkeletonImage, SkeletonText, SkeletonHeading} from '../Skeleton/SkeletonImage';

const DogPage = ({ match }) => {
  const [data, setData] = useState([{}]);
  const [percentageFysik, setPercentageFysik] = useState(0);
  const [percentageAllergi, setPercentageAllergi] = useState(0);
  const [percentageStorlek, setPercentageStorlek] = useState(0);
  const [percentageErfarenhet, setPercentageErfarenhet] = useState(0);
  const [seeEmail, setSeeEmail] = useState(false);
  const progressColor = ['#000000', '#000000'];

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

    const handlePercentageFysik = () => {
      let percentageFysik = 0;

      if (data?.fysik === 'låg') {
        percentageFysik = 10;
      }
      if (data?.fysik === 'normal') {
        percentageFysik = 50;
      }
      if (data?.fysik === 'hög') {
        percentageFysik = 100;
      }
      setPercentageFysik(percentageFysik)
    };

    const handlePercentageAllergi = () => {
      let percentageAllergi = 0;

      if (data?.allergi === 'ja') {
        percentageAllergi = 0;
      }
      if (data?.allergi === 'nej') {
        percentageAllergi = 100;
      }
      setPercentageAllergi(percentageAllergi)
    }

    const handlePercentageStorlek = () => {
      let percentageStorlek = 0;

      if (data?.storlek === 'liten') {
        percentageStorlek = 10;
      }
      if (data?.storlek === 'mellan') {
        percentageStorlek = 50;
      }
      if (data?.storlek === 'stor') {
        percentageStorlek = 100;
      }
      setPercentageStorlek(percentageStorlek)
    }

    const handlePercentageErfarenhet = () => {
      let percentageErfarenhet = 0;

      if (data?.hunderfarenhet === 'lite') {
        percentageErfarenhet = 10;
      }
      if (data?.hunderfarenhet === 'ganska') {
        percentageErfarenhet = 50;
      }
      if (data?.hunderfarenhet === 'mycket') {
        percentageErfarenhet = 100;
      }
      setPercentageErfarenhet(percentageErfarenhet)
    }

    useEffect(() => {
      if (!seeEmail) {
        window.scrollTo(0, 0);
      }
    })
    useEffect(() => {
      handlePercentageFysik()
      handlePercentageAllergi()
      handlePercentageStorlek()
      handlePercentageErfarenhet()
    }, [data])

    console.log('data', data)


    return (
      <>
      <NavbarBlack color="black" />
        <div className="contentWrapper">
      {/* <Link to="/adoptera"><button className="buttonLink">Gå tillbaka</button></Link> */}
      {/* <button onClick={history.goBack}>Go back</button> */}
        <div className="dogpage-container">
          <div className="dogpage-image-wrapper">
            {data?.bild ? <img src={data.bild} className="dogpage-image"/> : <SkeletonImage />}
          </div>
          <div className="dogpage-info-wrapper">
            {data?.hundnamn ? <h2>{data.hundnamn}</h2> : <SkeletonHeading />}
            <div>
              {data?.ras ? <p>Ras: {data.ras}</p> : <SkeletonText />}
              {data?.alder ? <p>Ålder: {data.alder} år</p> : <SkeletonText />}
            </div>
            <div className="descriptionWrapper">
              <p><i>{data.beskrivning}</i></p>
            </div>
          </div>
        </div>
        <div className="circleProgressWrapper">
          <div className="circleWrapper">
            <CircleProgress percentage={percentageFysik} width={100} strokeWidth={5} primaryColor={progressColor} secondaryColor="#f0f0f0" />
            <h5>Fysisk förmåga</h5>
          </div>
          <div className="circleWrapper">
            <CircleProgress percentage={percentageErfarenhet} width={100} strokeWidth={5} primaryColor={progressColor} secondaryColor="#f0f0f0" />
            <h5>Hunderfarenhet</h5>
          </div>
          <div className="circleWrapper">
            <CircleProgress percentage={percentageAllergi} width={100} strokeWidth={5} primaryColor={progressColor} secondaryColor="#f0f0f0" />
            <h5>Fäller päls</h5>
          </div>
          <div className="circleWrapper">
            <CircleProgress percentage={percentageStorlek} width={100} strokeWidth={5} primaryColor={progressColor} secondaryColor="#f0f0f0" />
            <h5>Mankstorlek</h5>
          </div>
        </div>
        <div>
          <div className="checkboxWrapper">
            {data?.katt === 'ja' ? 
            <span className="successIcon"><i className="fas fa-check"></i></span> 
            : <span className="declineIcon"><i className="fas fa-times"></i></span>
            }
            <h5>Kan bo med katt</h5>
          </div>
          <div className="checkboxWrapper">
            {data?.barn === 'ja' ?
            <span className="successIcon"><i className="fas fa-check"></i></span>
            : <span className="declineIcon"><i className="fas fa-times"></i></span>
            }
            <h5>Kan bo med småbarn</h5>
          </div>
          <div className="checkboxWrapper">
          {(data?.hund === 'tikar' || data?.hund === 'hanar' || data?.hund === 'båda') ?
            <span className="successIcon"><i className="fas fa-check"></i></span> :
          <span className="declineIcon"><i className="fas fa-times"></i></span>}
            <h5>Kan bo med andra hundar</h5>
          </div>
        </div>
          <div className="contactWrapper">
          <h3>Kontakt</h3>
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