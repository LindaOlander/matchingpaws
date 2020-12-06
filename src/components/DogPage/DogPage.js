import React from 'react';
import dogsJson from '../../dogsJson.json';
import { Link } from "react-router-dom";
import './DogPage.css';

class DogPage extends React.Component {

  render() {
    const id = this.props.match.params.id
    let dog = null
    dogsJson.dogs.forEach(item => {
      if (item.id === id) {
        dog = item
      }
    })
  
    window.scrollTo(0, 0);

    return (
      <>
      <Link to="/quiz"><div className="back">Gå tillbaka</div></Link>
        <div className="dogpage-wrapper">
            <div className="dogpage-image-wrapper">
              <img alt="dog" src={dog.image} className="dogpage-image"/>
            </div>
          <div className="dogpage-info-wrapper">
              <h2>{dog.name}</h2>
              <p>Ras: {dog.breed}</p>
              <p>Ålder: {dog.age}</p>
            <div>
              <p>{dog.description}</p>
            </div>
            <div className="dogpage-stickers">
              <p>Kan bo med katt: {dog.cat && <span>✓</span>}</p>
              <p>Kan bo med barn: {dog.children && <span>✓</span>}</p>
              {/* {dog.cat ? <div className="sticker cat">Kan bo med katt</div> : <div className="sticker-negative">Kan bo med katt</div>}
              {dog.children ? <div className="sticker child">Kan bo med barn</div> : <div className="sticker-negative">Kan bo med barn</div>}
              {dog.longWalks && <div className="sticker walks">Behöver långa promenader</div>} */}
            </div>
            <div>
              <h3>Energi: {dog.energy} %</h3>
              <h3>Integritet: {dog.integrity} % </h3>
              <h3>Närhet: {dog.closeness} % </h3>
            </div>
            {/* <div>
              <div className="meter">
                <span style={{"width": "40%"}}></span>
              </div>
              <div className="meter">
                <span style={{"width": "30%"}}></span>
              </div>
              <div className="meter">
                <span style={{"width": "80%"}}></span>
              </div>
            </div> */}
          </div>
        </div>
      </>
    )
  }
}

export default DogPage;