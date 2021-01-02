import React from "react"
import { Link } from "react-router-dom"
import './DogBox.css';

const DogBox = ({id, image, name, breed, age}) => {
    return (
      <div className="dog-wrapper">
        <Link to={`/adoptera/${id}`}>
          <div className="dog-image-wrapper">
            <img alt="dog" src={image} className="dog-image"/>
          </div>
        </Link>
        <div className="dog-info-wrapper">
            <h4>{name}</h4>
            <p>{breed}, {age} år</p>
        </div>
      </div>
    )
  }

export default DogBox;
