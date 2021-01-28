import React from 'react';
import dogsJson from '../../../dogsJson.json'; 

const SingleDog = () => {
    // console.log(this.props.params.id);
    const id = this.props.params.id
    let dog = null
    dogsJson.dogs.forEach(item => {
    if (item.id === id) {
        dog = item
    }
    })
    console.log(this.props)

    return (
    <div className="dog-wrapper">
        <div className="dog-image-wrapper">
          <img alt="dog" src={dog.image} className="dog-image"/>
        </div>
      <div className="dog-info-wrapper">
        <div>
          <h2>{dog.name}</h2>
          <p>Ras: {dog.breed}</p>
          <p>Ålder: {dog.age}</p>
        </div>
        <div className="dog-stickers">
          {dog.cat ? <div className="sticker cat">Kan bo med katt</div> : <div className="sticker-negative">Kan bo med katt</div>}
          {dog.children ? <div className="sticker child">Kan bo med barn</div> : <div className="sticker-negative">Kan bo med barn</div>}
          {dog.longWalks && <div className="sticker walks">Behöver långa promenader</div>}
        </div>
      </div>
    </div>
    )
}

export default SingleDog;