import React, {useState, useEffect} from "react";
import { Step, WizardForm } from "./WizardForm";
import { Link } from "react-router-dom";
import axios from 'axios';
import DogBox from "../DogBox/DogBox";
import './Wizard.css';

const WizardParent = () => {
    const [data, setData] = useState({ dogs: [] });
    const [step, setStep] = useState(0);
    const [match, setMatch] = useState(false);
    const [dogsShown, setDogsShown] = useState(false);
    const [state, setState] = useState({
        hunderfarenhet: '',
        fysik: '',
        allergi: '',
        barn: '',
        boende: '',
        hundpassning: '', 
        energi: '',
        problematik: '',
        katt: '',
        hund: '',
        ledarskap: '',
        storlek: ''
    })

    const handleStep = (step) => {
        setStep(step)
    };

    const handleRedoQuiz = () => {
        window.location.reload();
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
          [event.target.name]: value
        });
      }

    const filterDogs = () => {
        setMatch(true);
        setDogsShown(true);
        const copyDogs = [...data];
        const filterOnErfarenhet = copyDogs.filter(dog => dog.hunderfarenhet === state.hunderfarenhet)
        const filterOnFysik = filterOnErfarenhet.filter(dog => dog.fysik === state.fysik)
        const filterOnAllergi = filterOnFysik.filter(dog => dog.allergi === state.allergi)
        const filterOnBarn = filterOnAllergi.filter(dog => dog.barn === state.barn)
        const filterOnBoende = filterOnBarn.filter(dog => dog.boende === state.boende)
        const filterOnHundpassning = filterOnBoende.filter(dog => dog.hundpassning === state.hundpassning)
        const filterOnEnergi = filterOnHundpassning.filter(dog => dog.energi === state.energi)
        const filterOnKatt = filterOnEnergi.filter(dog => dog.katt === state.katt)
        const filterOnHund = filterOnKatt.filter(dog => dog.hund === state.hund)
        const filterOnLedarskap = filterOnHund.filter(dog => dog.ledarskap === state.ledarskap)
        const filterOnStorlek = filterOnLedarskap.filter(dog => dog.storlek === state.storlek)
        setData(filterOnStorlek); 
    }
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://matchingpaws-api.herokuapp.com/dogs',
          );
     
          setData(result.data);
        };
        fetchData();
    }, []);

    return (

        <div className="wizardContainer" id="/matchingpaws/quiz">
        <WizardForm step={step} onChange={handleStep}>

        <Step title="Erfarenhet" description="Erfarenhet">
            <strong>Vilket alternativ beskriver bäst din tidigare hunderfarenhet?</strong>
            <div className="inputContainer">
                <input className="radio" type='radio' id='mycket' name='hunderfarenhet' value='mycket' checked={state.hunderfarenhet === 'mycket'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='mycket'>Jag har haft fullt ansvar för en hund tidigare</label>
            </div>
            <div className="inputContainer">
                <input className="radio" type='radio' id='ganska' name='hunderfarenhet' value='ganska' checked={state.hunderfarenhet === 'ganska'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='ganska'>Jag har inte haft hund själv, men har hjälpt vänner och familj med deras hundar</label>
            </div>
            <div className="inputContainer">
                <input className="radio" type='radio' id='lite' name='hunderfarenhet' value='lite' checked={state.hunderfarenhet === 'lite'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='lite'>Jag har ingen tidigare hunderfarenhet</label>
            </div>
        </Step>

        <Step title="Fysik" description="Fysik">
            <strong>Vilket alternativ beskriver bäst din fysiska förmåga?</strong>
            <div className="inputContainer">
                <input className="radio" type='radio' id='normal' name='fysik' value='normal' checked={state.fysik === 'normal'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='normal'>Jag skulle beskriva min fysiska förmåga som normal</label>
            </div>
            <div className="inputContainer">
                <input className="radio" type='radio' id='låg' name='fysik' value='låg' checked={state.fysik === 'låg'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='låg'>Jag har vissa fysiska begränsningar som gör att jag inte är lämplig som ägare till starkare hundar</label>
            </div>
        </Step>

        <Step title="Allergi" description="Allergi">
            <strong>Kan du bo med en hund som fäller päls?</strong>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='allergiJa' name='allergi' value='ja' checked={state.allergi === 'ja'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='allergiJa'>Ja</label>
            </div>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='allergiNej' name='allergi' value='nej' checked={state.allergi === 'nej'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='allergiNej'>Nej</label>
            </div>
        </Step>

        <Step title="Barn" description="Barn">
            <strong>Kommer hunden träffa barn vardagligen?</strong>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='ja' name='barn' value='ja' checked={state.barn === 'ja'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='ja'>Ja</label>
            </div>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='nej' name='barn' value='nej' checked={state.barn === 'nej'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='nej'>Nej</label>
            </div>
        </Step>

        <Step title="Boende" description="Boende">
            <strong>Hur bor du idag?</strong>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='stadsmiljö' name='boende' value='stadsmiljö' checked={state.boende === 'stadsmiljö'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='stadsmiljö'>I stadsmiljö</label>
            </div>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='landet' name='boende' value='landet' checked={state.boende === 'landet'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='landet'>På landet</label>
            </div>
        </Step>

        <Step title="Hundpassning" description="Hundpassning">
            <strong>Hur planerar du att få ihop vardagen med din hund? *Utgå från vardagen efter pandemin</strong>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='hunddagis' name='hundpassning' value='hunddagis' checked={state.hundpassning === 'hunddagis'} onChange={handleChange} />
                <div className="check" onChange={handleChange}></div>
                <label className="radioLabel" htmlFor='hunddagis'>Hunden kommer gå på hunddagis</label>
            </div>
            <div className="inputContainer">
                <input className="radio" type='radio' id='hemma' name='hundpassning' value='hemma' checked={state.hundpassning === 'hemma'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='hemma'>Hunden kommer kunna vara hemma med mig eller annan närstående om dagarna</label>
            </div>
        </Step>

        <Step title="Energi" description="Energi">
            <strong>Vilken beskrivning passar bäst in på energin i ditt hem?</strong>
            <div className="inputWrapper">
                <div className="inputContainer">
                    <input className="radio" type='radio' id='fartfyllt' name='energi' value='fartfyllt' checked={state.energi === 'fartfyllt'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='fartfyllt'>I mitt hem är det fart och fläkt. Mycket besökare och saker som händer hela tiden</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='lugnt' name='energi' value='lugnt' checked={state.energi === 'lugnt'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='lugnt'>I mitt hem är det lugnt, tryggt och sansat</label>
                </div>
            </div>
        </Step>

        <Step title="Katt" description="Katt">
            <strong>Finns det katt i hemmet?</strong>
            <div className="inputWrapper">
                <div className="inputContainer">
                    <input className="radio" type='radio' id='ja' name='katt' value='ja' checked={state.katt === 'ja'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='ja'>Ja</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='nej' name='katt' value='nej' checked={state.katt === 'nej'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='nej'>Nej</label>
                </div>
            </div>
        </Step>

        <Step title="Hund" description="Hund">
            <strong>Finns det hund i hemmet idag?</strong>
            <div className="inputWrapper">
                <div className="inputContainer">
                    <input className="radio" type='radio' id='tikar' name='hund' value='tikar' checked={state.hund === 'tikar'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='tikar'>Ja, en eller flera tikar</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='hanar' name='hund' value='hanar' checked={state.hund === 'hanar'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='hanar'>Ja, en eller flera hanar</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='båda' name='hund' value='båda' checked={state.hund === 'båda'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='båda'>Både tikar och hanar</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='nej' name='hund' value='nej' checked={state.hund === 'nej'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='nej'>Nej</label>
                </div>
            </div>
        </Step>

        <Step title="Ledarskap" description="Ledarskap">
            <strong>Vilket av följande alternativ beskriver bäst din person och syn på hunduppfostran?</strong>
            <div className="inputWrapper">
                <div className="inputContainer">
                    <input className="radio" type='radio' id='mjukt' name='ledarskap' value='mjukt' checked={state.ledarskap === 'mjukt'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='mjukt'>Jag är mjuk och kärleksfull i mitt umgänge med hundar</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='tydligt' name='ledarskap' value='tydligt' checked={state.ledarskap === 'tydligt'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='tydligt'>Jag är rak och konsekvent i min hunduppfostran</label>
                </div>
            </div>
        </Step>

        <Step title="Storlek" description="Storlek">
            <div>
                <strong>Vilken storlek på hund har du möjlighet att ta hand om?</strong>
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='liten' name='storlek' value='liten' checked={state.storlek === 'liten'} onChange={handleChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='liten'>Liten- eller mellanstor hund (upp till 55 cm mankhöjd)</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='stor' name='storlek' value='stor' checked={state.storlek === 'stor'} onChange={handleChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='stor'>Stor hund (över 55 cm mankhöjd)</label>
                    </div>
                </div>
            </div>
        </Step>

        <Step>
            <div className="resultStep">
            {!match &&
                <div className="resultButtonWrapper">
                    <button className="button" onClick={filterDogs}>Visa resultat</button>
                </div>
            }
            <div className="resultContainer">
                {/* Vid matchning */}
                {match && data.length && 
                    <>
                        <h3>Grattis, du har blivit matchad!</h3>
                        <p>Enligt våra algoritmer skulle du passa bäst med nedanstående hundar. Läs på om hunden du matchats med och kontakta deras nuvarande ägare om du seriöst är intresserad av att adoptera deras hund.</p>
                        <div id="dogResult">
                            {data.map(dog =>
                                <DogBox
                                key={dog._id}
                                hundnamn={dog.hundnamn}
                                alder={dog.alder}
                                ras={dog.ras}
                                bild={dog.bild}
                                id={dog._id} />
                            )}
                        </div>
                    </>
                }
                {/* Ingen matchning */}
                {(match && !data.length) && 
                    <>
                        <h3>Just nu finns det tyvärr ingen hund som matchar med dig.</h3>
                        <p>Men ge inte upp! Vi på Matchning Paws får löpande in hundar som behöver omplaceras och snart kanske det kommer in en hund som passar just dig.</p>
                        <p>Vi rekommenderar därför dig att gå in regelbundet på hemsidan och göra om testet för att se om om det kommit ny hundar som du matchar med.</p>
                    </>
                }
                {dogsShown &&
                <div className="wizardButtonWrapper"> 
                    <Link to="/adoptera">
                        <button onClick={handleRedoQuiz} className="button">Gör om quizet</button>
                    </Link>
                </div>
                }
            </div>
        </div>
        </Step>
    </WizardForm>
</div>

    )
}

export default WizardParent;