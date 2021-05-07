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
        boende: {
            centralt: false,
            lägenhet: false,
            villaområde: false,
            landet: false,
        },
        hundpassning: {
            hunddagis: false,
            kontoret: false,
            ensam: false,
            hemma: false,
        },
        energi: '',
        problematik: {
            hundaggressivitet: false,
            hoppar: false,
            integritet: false,
            drar: false,
            ensam: false,
            skällig: false,
            resursförsvar: false,
            sjukdom: false,
            ingen: false,
        },
        aktivitet: {
            sällskap: false,
            jakt: false,
            sportkompis: false,
            sök: false,
            hundsport: false,
            vakt: false,
            inget: false,
        },
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

    const handleChangeAktivitet = (event) => {
        setState({
            ...state,
            aktivitet: {
                ...state.aktivitet,
                [event.target.name]: event.target.checked
            }
        })
    }
    
    const handleChangeProblematik = (event) => {
        setState({
            ...state,
            problematik: {
                ...state.problematik,
                [event.target.name]: event.target.checked
            }
        })
    }

    const handleChangeHundpassning = (event) => {
        setState({
            ...state,
            hundpassning: {
                ...state.hundpassning,
                [event.target.name]: event.target.checked
            }
        })
    }

    const filterDogs = () => {
        setMatch(true);
        setDogsShown(true);
        const ownerCapabilities = {
            'mycket': ['mycket', 'ganska', 'lite'],
            'ganska': ['ganska', 'lite'],
            'lite': ['lite'],
        };
        const ownerPhysics = {
            'hög': ['hög', 'normal', 'låg'],
            'normal': ['normal', 'låg'],
            'låg': ['låg']
        }
        const ownerAllergy = {
            'ja': ['nej', 'ja'],
            'nej': ['ja']
        }
        const ownerChildren = {
            'ja': ['ja'],
            'nej': ['ja', 'nej']
        }
        const ownerEnergy = {
            'fartfyllt': ['fartfyllt', 'båda'],
            'lugnt': ['lugnt', 'båda']
        }
        const ownerCatsInHome = {
            'ja': ['ja'],
            'nej': ['nej', 'ja']
        }
        const ownerDogsInHome = {
            'nej': ['nej', 'båda', 'tikar', 'hanar'],
            'båda': ['båda'],
            'tikar': ['tikar', 'båda'],
            'hanar': ['hanar', 'båda']
        }
        const ownerLedarskap = {
            'mjukt': ['mjukt', 'båda'],
            'tydligt': ['tydligt', 'båda'],
        }
        const ownerSizes = {
            'liten': ['liten'],
            'mellan': ['mellan', 'liten'],
            'stor': ['stor', 'mellan', 'liten'],
        }
        const inabilities = Object.entries(state.problematik)
            .filter(capability => !capability[1] && capability[0] !== "ingen")
            .map(capability => capability[0])
        const ownerLiving = Object.entries(state.boende).filter(([key, value]) => Boolean(value))[0][0];
        const ownerHundpassning = Object.entries(state.hundpassning).filter(([key, value]) => Boolean(value))[0][0];
        const ownerAktivitet = Object.entries(state.aktivitet).filter(([key, value]) => Boolean(value))[0][0];

        const copyDogs = [...data];
        const filterOnErfarenhet = copyDogs.filter(dog => ownerCapabilities[state.hunderfarenhet].indexOf(dog.hunderfarenhet) > -1)
        const filterOnFysik = filterOnErfarenhet.filter(dog => ownerPhysics[state.fysik].indexOf(dog.fysik) > -1)
        const filterOnAllergi = filterOnFysik.filter(dog => ownerAllergy[state.allergi].indexOf(dog.allergi) > -1)
        const filterOnBarn = filterOnAllergi.filter(dog => ownerChildren[state.barn].indexOf(dog.barn) > -1)
        const filterOnEnergi = filterOnBarn.filter(dog => ownerEnergy[state.energi].indexOf(dog.energi) > -1)
        const filterOnKatt = filterOnEnergi.filter(dog => ownerCatsInHome[state.katt].indexOf(dog.katt) > -1)
        const filterOnHund = filterOnKatt.filter(dog => ownerDogsInHome[state.hund].indexOf(dog.hund) > -1)
        const filterOnLedarskap = filterOnHund.filter(dog => ownerLedarskap[state.ledarskap].indexOf(dog.ledarskap) > -1)
        const filterOnStorlek = filterOnLedarskap.filter(dog => ownerSizes[state.storlek].indexOf(dog.storlek) > -1)
        const filterOnBoende = filterOnStorlek.filter(dog => dog.boende[ownerLiving])
        const filterOnHundpassning = filterOnBoende.filter(dog => dog.hundpassning[ownerHundpassning]);
        const filterAktivitet = filterOnHundpassning.filter(dog => dog.aktivitet[ownerAktivitet])
        const filterProblematik = filterAktivitet.filter(dog => {
            return inabilities.filter(ability => (dog.problematik[ability])).length == 0
        })

        setData(filterProblematik);
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

    // Den här funktionen sätter parametern till true
    const handleChangeStorlek = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    }

    const handleChangeBoende = (event) => {
        setState({
            ...state,
            boende: {
                ...state.boende,
                [event.target.name]: event.target.checked
            }
        });
    }

    console.log('state', state)
    console.log('data', data)

    let transitions = {
        enterRight: 'your custom css transition classes',
        enterLeft : 'your custom css transition classes',
    }

    return (

        <div className="wizardContainer" id="/matchingpaws/quiz">
        <WizardForm step={step} transitions={transitions} onChange={handleStep}>

        <Step title="Erfarenhet" description="Erfarenhet">
            <p className="stepTitle">Vilket alternativ beskriver bäst din tidigare hunderfarenhet?</p>
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
            <p className="stepTitle">Vilket alternativ beskriver bäst din fysiska förmåga?</p>
            <div className="inputContainer">
                <input className="radio" type='radio' id='hög' name='fysik' value='hög' checked={state.fysik === 'hög'} onChange={handleChange} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='hög'>Jag är stark och kan hålla emot även tyngre starka hundar om det behövs</label>
            </div>
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
            <p className="stepTitle">Kan du bo med en hund som fäller päls?</p>
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
            <p className="stepTitle">Kommer hunden träffa barn vardagligen?</p>
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
            <p className="stepTitle">Hur bor du idag?</p>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='centralt' name='centralt' value='centralt' checked={state.boende.centralt} onChange={handleChangeBoende} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='centralt'>Lägenhet centralt i område med mycket människor och trafik</label>
            </div>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='lägenhet' name='lägenhet' value='lägenhet' checked={state.boende.lägenhet} onChange={handleChangeBoende} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='lägenhet'>Lägenhet i lugnt lägenhetsområde</label>
            </div>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='villaområde' name='villaområde' value='villaområde' checked={state.boende.villaområde} onChange={handleChangeBoende} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='villaområde'>Hus eller radhus i villaområde</label>
            </div>
            <div className="inputContainer">  
                <input className="radio" type='radio' id='landet' name='landet' value='landet' checked={state.boende.landet} onChange={handleChangeBoende} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='landet'>Enskilt hus eller gård på landet</label>
            </div>
        </Step>

        <Step title="Hundpassning" description="Hundpassning">
            <p className="stepTitle">Hur planerar du att få ihop vardagen med din hund? *Utgå från vardagen efter pandemin</p>
            <div className="inputContainerCheckbox">  
                <input className="radio" type='radio' id='hunddagis' name='hunddagis' value='hunddagis' checked={state.hundpassning.hunddagis} onChange={handleChangeHundpassning} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='hunddagis'>Hunden kommer gå på hunddagis</label>
            </div>
            <div className="inputContainerCheckbox">  
                <input className="radio" type='radio' id='kontoret' name='kontoret' value='kontoret' checked={state.hundpassning.kontoret} onChange={handleChangeHundpassning} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='kontoret'>Hunden kan följa med mig till kontoret på dagarna</label>
            </div>
            <div className="inputContainerCheckbox">  
                <input className="radio" type='radio' id='ensam' name='ensam' value='ensam' checked={state.hundpassning.ensam} onChange={handleChangeHundpassning} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='ensam'>Hunden kommer behöva vara hemma ensam max 6 timmar per dag</label>
            </div>
            <div className="inputContainerCheckbox">
                <input className="radio" type='radio' id='hemma' name='hemma' value='hemma' checked={state.hundpassning.hemma} onChange={handleChangeHundpassning} />
                <div className="check"></div>
                <label className="radioLabel" htmlFor='hemma'>Hunden kommer kunna vara hemma med mig eller annan närstående om dagarna</label>
            </div>
        </Step>

        <Step title="Energi" description="Energi">
            <p className="stepTitle">Vilken beskrivning passar bäst in på energin i ditt hem?</p>
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
            <p className="stepTitle">Finns det katt i hemmet?</p>
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
            <p className="stepTitle">Finns det hund i hemmet idag?</p>
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
            <p className="stepTitle">Vilket av följande alternativ beskriver bäst din person och syn på hunduppfostran?</p>
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
                <p className="stepTitle">Vilka storlekar på hund har du möjlighet att ta hand om?</p>
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='liten' name='storlek' value='liten' checked={state.storlek === 'liten'} onChange={handleChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='liten'>Enbart liten hund (mindre än 45 cm mankhöjd)</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='mellan' name='storlek' value='mellan' checked={state.storlek === 'mellan'} onChange={handleChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='mellan'>Liten - mellanstor hund (ca 45-55 cm mankhöjd)</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='stor' name='storlek' value='stor' checked={state.storlek === 'stor'} onChange={handleChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='stor'>Liten - stor hund (över 55 cm mankhöjd)</label>
                    </div>
                </div>
            </div>
        </Step>  


        <Step title="Aktiviteter" description="Aktiviteter">
            <div>
                <p className="stepTitle">Vilken typ av aktiviteter vill och planerar du att göra med din hund?</p>
                <div className="inputContainerCheckbox">  
                    <input className="checkbox" type='checkbox' id='sällskap' name='sällskap' value='sällskap' checked={state.aktivitet.sällskap} onChange={handleChangeAktivitet} />
                    <label htmlFor='sällskap'>Hunden kommer primärt gå som sällskapshund och ge stimulans via promenader, aktivitetsövningar och massa gos</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='sportkompis' name='sportkompis' value='sportkompis' checked={state.aktivitet.sportkompis} onChange={handleChangeAktivitet} />
                    <label htmlFor='sportkompis'>Hunden kommer få följa med på diverse joggingturer, cykelturer, vandringar mm.</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='sök' name='sök' value='sök' checked={state.aktivitet.sök} onChange={handleChangeAktivitet} />
                    <label htmlFor='sök'>Hunden kommer få tränas inom sök</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='hundsport' name='hundsport' value='hundsport' checked={state.aktivitet.hundsport} onChange={handleChangeAktivitet} />
                    <label htmlFor='hundsport'>Hunden kommer tränas och tävlas inom hundsporter såsom agility, rallylydnad mm.</label>
                </div>
                <div className="inputContainerCheckbox">  
                    <input className="checkbox" type='checkbox' id='jakt' name='jakt' value='jakt' checked={state.aktivitet.jakt} onChange={handleChangeAktivitet} />
                    <label htmlFor='jakt'>Hunden kommer användas i jakt</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='vakt' name='vakt' value='vakt' checked={state.aktivitet.vakt} onChange={handleChangeAktivitet} />
                    <label htmlFor='vakt'>Hunden kommer användas som vakthund</label>
                </div>
            </div>
        </Step>

        <Step title="Problematik" description="Problematik">
            <div>
                <p className="stepTitle">En del av hundarna vi hjälper att omplacera har med sig viss problematik från sitt förflutna som du som ny ägare kommer att behöva hantera. <br /><br />Vilka av nedanstående utmaningar känner du att du som ägare är villig och kompentent nog att arbeta med?</p>  
                <div className="inputContainerCheckbox">  
                    <input className="checkbox" type='checkbox' id='hundaggressivitet' name="hundaggressivitet" value='hundaggressivitet' checked={state.problematik.hundaggressivitet} onChange={handleChangeProblematik} />
                    <label htmlFor='hundaggressivitet'>Hundaggressivitet</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='hoppar' name="hoppar" value='hoppar' checked={state.problematik.hoppar} onChange={handleChangeProblematik} />
                    <label htmlFor='hoppar'>Hoppar mot folk när den hälsar</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='integritet' name='integritet' value='integritet' checked={state.problematik.integritet} onChange={handleChangeProblematik} />
                    <label htmlFor='integritet'>Hög integritet</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='drar' name='drar' value='drar' checked={state.problematik.drar} onChange={handleChangeProblematik} />
                    <label htmlFor='drar'>Drar i kopplet</label>
                </div>
                <div className="inputContainerCheckbox">  
                    <input className="checkbox" type='checkbox' id='ensam' name='ensam' value='ensam' checked={state.problematik.ensam} onChange={handleChangeProblematik} />
                    <label htmlFor='ensam'>Kan inte vara ensam hemma</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='skällig' name='skällig' value='skällig' checked={state.problematik.skällig} onChange={handleChangeProblematik} />
                    <label htmlFor='skällig'>Skällig</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='resursförsvar' name='resursförsvar' value='resursförsvar' checked={state.problematik.resursförsvar} onChange={handleChangeProblematik} />
                    <label htmlFor='resursförsvar'>Resursförsvar</label>
                </div>
                <div className="inputContainerCheckbox">
                    <input className="checkbox" type='checkbox' id='sjukdom' name='sjukdom' value='sjukdom' checked={state.problematik.sjukdom} onChange={handleChangeProblematik} />
                    <label htmlFor='sjukdom'>Sjukdomstillstånd som kräver regelbunden veterinärvård</label>
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
                        <div id="dogResult" className="dogResult">
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