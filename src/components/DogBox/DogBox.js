import React from "react"
import { Link } from "react-router-dom"
import './DogBox.css';

class DogBox extends React.Component {

  render() {
    return (
      <div className="dog-wrapper">
        <Link to={`/adoptera/${this.props.id}`}>
          <div className="dog-image-wrapper">
            <img alt="dog" src={this.props.image} className="dog-image"/>
          </div>
        </Link>
        <div className="dog-info-wrapper">
            <h4>{this.props.name}</h4>
            <p>{this.props.breed}, {this.props.age} år</p>
          <div className="dog-stickers">
            {this.props.children ? <div className="sticker child">Kan bo med barn</div> : <div className="sticker-negative">Kan bo med barn</div>}
            {this.props.cat ? <div className="sticker cat">Kan bo med katt</div> : <div className="sticker-negative">Kan bo med katt</div>}
            {this.props.longWalks && <div className="sticker walks">Behöver långa promenader</div>}
          </div>
        </div>
      </div>
    )
  }

}

export default DogBox
