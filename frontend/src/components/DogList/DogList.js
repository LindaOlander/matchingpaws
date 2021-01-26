import React, { useState, useEffect } from 'react';
import DogBox from '../DogBox/DogBox';
import axios from 'axios';
import './DogList.css';

const DogList = () => {
  const finalprojectServer =
  process.env.NODE_ENV === "production"
  ? "https://matchingpaws.herokuapp.com/dogs"
  : "http://localhost:8080/dogs";

  const [data, setData] = useState([{}]);
  const [hunderfarenhet, setHunderfarenhet] = useState('');
  const [catCompatible, setCatCompatible] = useState('ja');
  const [boende, setBoende] = useState('');

  useEffect(() => {
    const fetchDogs = async () => {
      const result = await axios(finalprojectServer);
      setData(result.data);
    };
 
    fetchDogs();
  }, []);

  console.log(data);

  const filterErfarenhet = () => {
    const copyDogs = [...data];
    const filterOnErfarenhet = copyDogs.filter(dog => dog.hunderfarenhet === hunderfarenhet)
    setData(filterOnErfarenhet);
  }

  const filterCat = () => {
    const copyDogs = [...data];
    const filterOnCat = copyDogs.filter(dog => dog.katt === catCompatible)
    setData(filterOnCat); 
  }
  
  const filterBoende = () => {
    const copyDogs = [...data];
    const filterOnBoende = copyDogs.filter(dog => dog.boende === boende)
    setData(filterOnBoende);
  }

  const handleErfarenhetChange = (event) => {
    const erfarenhetInput = event.target.value;
    setHunderfarenhet(erfarenhetInput);
  }

  const handleCatChange = (event) => {
    const catInput = event.target.value;
    setCatCompatible(catInput);
  }

  const handleBoendeChange = (event) => {
    const boendeInput = event.target.value;
    setBoende(boendeInput);
  }

  const dogMatch = data.length > 0;

  return (
    <>
      <div>
      {/* <div className="quizStartWrapper" id="quizStart">
        <h1>Hitta din bästa vän</h1>
        <p>Låt våra algoritmer identifiera lämpliga matchingar till dig</p>
        <a href="#questionErfarenhet"><button className="button" style={{textAlign: "center"}}>Starta</button></a>
      </div>
      <div className="quizWrapper" id="questionErfarenhet">
        <div className="questionWrapper">
            <h5>Vilket alternativ beskriver bäst din tidigare hunderfarenhet?</h5>
            <div className="inputWrapper">
              <div className="inputContainer">
                <input type='radio' id='mycket' name='erfarenhet' value='mycket' checked={hunderfarenhet === 'mycket'} onChange={handleErfarenhetChange} />
                <label htmlFor='mycket'>Jag har erfarenhet från att hantera många olika typer av hundar och personlighet</label>
              </div>
              <div className="inputContainer">
                <input type='radio' id='mycket2' name='erfarenhet' value='mycket2' checked={hunderfarenhet === 'mycket'} onChange={handleErfarenhetChange} />
                <label htmlFor='mycket2'>Jag har haft fullt ansvar för en hund tidigare</label>
              </div>
              <div className="inputContainer">
                <input type='radio' id='ganska' name='erfarenhet' value='ganska' checked={hunderfarenhet === 'ganska'} onChange={handleErfarenhetChange} />
                <label htmlFor='ganska'>Jag har inte haft hund själv, men har hjälpt vänner och familj med deras hundar</label>
              </div>
              <div className="inputContainer">
                <input type='radio' id='lite' name='erfarenhet' value='lite' checked={hunderfarenhet === 'lite'} onChange={handleErfarenhetChange} />
                <label htmlFor='lite'>Jag har ingen tidigare hunderfarenhet</label>
              </div>
            </div>
            <a href="#questionCat">
              <button className="button" onClick={filterErfarenhet}>Gå vidare</button>
            </a>
        </div>
      </div>
      <div className="quizWrapper" id="questionCat">
        <div className="questionWrapper">
          <h5>Finns det katt i hemmet?</h5>
          <div className="inputWrapper">
            <div className="inputContainer">
              <input type='radio' id='ja' name='Cat' value='ja' checked={catCompatible === 'ja'} onChange={handleCatChange} />
              <label htmlFor='ja'>Ja</label>
            </div>
            <div className="inputContainer">
              <input type='radio' id='nej' name='Cat' value='nej' checked={catCompatible === 'nej'} onChange={handleCatChange} />
              <label htmlFor='nej'>Nej</label>
            </div>
          </div>
          <a href="#questionBoende">
            <button className="button" onClick={filterCat}>Gå vidare</button>
          </a>
        </div>
      </div>
      <div className="quizWrapper" id="questionBoende">
        <div className="questionWrapper">
          <h5>Hur bor du?</h5>
          <div className="inputWrapper">
            <div className="inputContainer">  
              <input type='radio' id='villa-stad' name='boende' value='villa-stad' checked={boende === 'villa-stad'} onChange={handleBoendeChange} />
              <label htmlFor='villa-stad'>Villa/radhus i stadsmiljö</label>
            </div>
            <div className="inputContainer">  
              <input type='radio' id='villa-landet' name='boende' value='villa-landet' checked={boende === 'villa-landet'} onChange={handleBoendeChange} />
              <label htmlFor='villa-stad'>Villa på landet</label>
            </div>
            <div className="inputContainer">
              <input type='radio' id='lgh-stad' name='boende' value='lgh-stad' checked={boende === 'lgh-stad'} onChange={handleBoendeChange} />
              <label htmlFor='lgh-stad'>Lägenhet i stadsmiljö</label>
            </div>
            <div className="inputContainer">
              <input type='radio' id='lgh-landet' name='boende' value='lgh-landet' checked={boende === 'lgh-landet'} onChange={handleBoendeChange} />
              <label htmlFor='lgh-landet'>Lägenhet på landet</label>
            </div>
          </div>
          <a href="#dogs">
            <button className="button" onClick={filterBoende}>Gå vidare</button>
          </a>
        </div>
      </div>
      <div className="dogs-wrapper" id="dogs">
        <div style={{padding: "60px 10px 20px 10px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          {!dogMatch && (
            <>
              <h4 style={{margin: "0 0 15px 0", fontSize: "24px", textAlign: 'center'}}>
                Just nu finns ingen matchning för dig. Men det kommer löpande in hundar. Lämna din mailadress så meddelar vi dig när du får en matchning.
              </h4>
              <input placeholder="Din mailadress"/>
            </>
          )}
          {dogMatch && (
            <h4 style={{margin: "0", fontSize: "24px", textAlign: "center"}}>
              Enligt våra algoritmer skulle du passa bäst ihop med:
            </h4>
          )}
        </div> */}
        {data.map(dog =>
          <DogBox
            key={dog._id}
            hundnamn={dog.hundnamn}
            alder={dog.alder}
            ras={dog.ras}
            bild={dog.bild}
            id={dog._id} />)}
      </div>
    </>
  )
};

export default DogList;