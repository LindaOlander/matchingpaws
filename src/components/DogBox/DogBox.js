import React from "react"
import { Link } from "react-router-dom"
import './DogBox.css';

const DogBox = ({id, bild, hundnamn, ras, alder}) => {
    return (
      <div className="dog-wrapper">
        <Link to={`/adoptera/${id}`}>
          <div className="dog-image-wrapper">
            <img alt="dog" src={bild} className="dog-image"/>
          </div>
        </Link>
        <div className="dog-info-wrapper">
            <h4>{hundnamn}</h4>
            <p>{ras}, {alder} år</p>
        </div>
      </div>
    )
  }

export default DogBox;
