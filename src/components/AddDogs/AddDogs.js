import React, { useState } from "react"
// import FileUploader from '../Wizard/FileUploader';
import './AddDogs.css';
 

const AddDogs = () => {
    const [submitted, setSubmitted] = useState(false);
    const [state, setState] = useState({
        hundnamn: "",
        beskrivning: "",
        bild: "",
        ras: "",
        alder: "",
        kastrerad: "",
        kontaktnamn: "",
        email: "",
        lank: "",
        hunderfarenhet: "",
        fysik: "",
        allergi: "",
        barn: "",
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
        energi: "",
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
        katt: "",
        hund: "",
        ledarskap: "",
        storlek: "",
        kön: "",    
      })

    const handleChange = (event) => {
        const value = 
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
    }

    const handleChangeProblematik = (event) => {
        setState({
            ...state,
            problematik: {
                ...state.problematik,
                [event.target.name]: event.target.checked
            }
        }) 
    }; 
    const handleChangeAktivitet = (event) => {
        setState({
            ...state,
            aktivitet: {
                ...state.aktivitet,
                [event.target.name]: event.target.checked
            }
        }) 
    }; 
    const handleChangeBoende = (event) => {
        setState({
            ...state,
            boende: {
                ...state.boende,
                [event.target.name]: event.target.checked
            }
        }) 
    }; 
    const handleChangeHundpassning = (event) => {
        setState({
            ...state,
            hundpassning: {
                ...state.hundpassning,
                [event.target.name]: event.target.checked
            }
        }) 
    }; 

    const handleOnSubmit = () => {
        setSubmitted(true);
    }

    // const handleFileChange = (event) => {
    //     setState({ 
    //         ...state,
    //         [event.target.name]: event.target.files[0]
    //     });
    //   }

    const submitForm = (event) => {
        event.preventDefault()

        const dogs = {
            hundnamn: state.hundnamn,
            beskrivning: state.beskrivning,
            bild: state.bild,
            ras: state.ras,
            alder: state.alder,
            kastrerad: state.kastrerad,
            kontaktnamn: state.kontaktnamn,
            email: state.email,
            lank: state.lank,
            hunderfarenhet: state.hunderfarenhet,
            fysik: state.fysik,
            allergi: state.allergi,
            barn: state.barn,
            boende: {
                centralt: state.boende.centralt,
                lägenhet: state.boende.lägenhet,
                villaområde: state.boende.villaområde,
                landet: state.boende.landet,
            },
            hundpassning: {
                hunddagis: state.hundpassning.hunddagis,
                kontoret: state.hundpassning.kontoret,
                ensam: state.hundpassning.ensam,
                hemma: state.hundpassning.hemma,
            },
            energi: state.energi,
            problematik: {
                hundaggressivitet: state.problematik.hundaggressivitet,
                hoppar: state.problematik.hoppar,
                integritet: state.problematik.integritet,
                drar: state.problematik.drar,
                ensam: state.problematik.ensam,
                skällig: state.problematik.skällig,
                resursförsvar: state.problematik.resursförsvar,
                sjukdom: state.problematik.sjukdom,
                ingen: state.problematik.ingen,
            },
            aktivitet: {
                sällskap: state.aktivitet.sällskap,
                jakt: state.aktivitet.jakt,
                sportkompis: state.aktivitet.sportkompis,
                sök: state.aktivitet.sök,
                hundsport: state.aktivitet.hundsport,
                vakt: state.aktivitet.vakt,
                inget: state.aktivitet.inget,
            },
            katt: state.katt,
            hund: state.hund,
            ledarskap: state.ledarskap,
            storlek: state.storlek, 
            kön: state.kön,   
        }

        const herokuUrl = "https://matchingpaws-api.herokuapp.com/dogs";

        fetch(herokuUrl, {
                headers: { "Content-Type": "application/json" },
                method: "Post",
                body: JSON.stringify(dogs)
            })
            .then(data => {
                console.log('Request success: ', data)
            })
            .catch(error => {
                console.log('Request failure: ', error)
                alert(error)
            })
            console.log('dog added')
            
        }
        
    const submitButtonMessage = `Skicka in ${state.hundnamn} för matchning`;

    return (
    <div className="addProductContainer">
        <form id="postingForm" className="postingForm" onSubmit={submitForm}>
            <h5>Lägg till hund</h5>
            <hr />
            <div className="questionContainer">
                <label className="labelText">
                    Vad heter din hund?
                    <input value={state.hundnamn} type="text" name="hundnamn" onChange={handleChange}/>
                </label>
            </div>
            <div className="questionContainer">
                <label className="labelText">
                    Vilken ras är din hund?
                    <input value={state.ras} type="text" name="ras" onChange={handleChange}/>
                </label>
            </div>
            <div className="questionContainer">
                <label className="labelText">
                    Hur gammal är din hund?
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <input value={state.alder} className="shortInput" type="text" name="alder" onChange={handleChange}/> 
                        <span style={{marginLeft: '10px'}}>år</span> 
                    </div>
                </label>    
            </div> 

            {/* Kön */}
            <div className="questionContainer">
                <p className="questionHeading">Vilket kön är din hund?</p>
                <div className="inputRadioWrapper">
                    <label className="inputRadioLabel">
                        <input
                            type="radio"
                            name="kön"
                            value="tik"
                            checked={state.kön === "tik"}
                            onChange={handleChange}
                        />
                        <span>Tik</span>
                        <span className="checkmark"></span>
                    </label>
                    <label className="inputRadioLabel">
                        <input
                            type="radio"
                            name="kön"
                            value="hane"
                            checked={state.kön === "hane"}
                            onChange={handleChange}
                        />
                        <span>Hane</span>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

            {/* Storlek */}
            <div className="questionContainer">
                <p className="questionHeading">Hur stor är din hund?</p>
                <div className="inputRadioWrapper">
                    <label className="inputRadioLabel">
                        <input
                            type="radio"
                            name="storlek"
                            value="liten"
                            checked={state.storlek === "liten"}
                            onChange={handleChange}
                        />
                        <span>Liten hund (mindre än 45 cm mankhöjd)</span>
                        <span className="checkmark"></span>
                    </label>
                    <label className="inputRadioLabel">
                        <input
                            type="radio"
                            name="storlek"
                            value="mellan"
                            checked={state.storlek === "mellan"}
                            onChange={handleChange}
                        />
                        <span>Mellanstor hund (ca 45-55 cm mankhöjd)</span>
                        <span className="checkmark"></span>
                    </label>
                    <label className="inputRadioLabel">
                        <input
                            type="radio"
                            name="storlek"
                            value="stor"
                            checked={state.storlek === "stor"}
                            onChange={handleChange}
                        />
                        <span>Stor hund (över 55 cm i mankhöjd)</span>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

            {/* Kastrerad */}
            <div className="questionContainer">
                <p className="questionHeading">Är din hund kastrerad?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="kastrerad"
                            value="ja"
                            checked={state.kastrerad === "ja"}
                            onChange={handleChange}
                        />
                        <span>Ja</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="kastrerad"
                            value="nej"
                            checked={state.kastrerad === "nej"}
                            onChange={handleChange}
                        />
                        <span>Nej</span>
                    </label>
                </div>
            </div>

            {/* Hunderfarenhet */}
            <div className="questionContainer">
                <p className="questionHeading">Vilken typ av hunderfarenhet av hundar anser du att den som adopterar din hund behöver?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="hunderfarenhet"
                            value="mycket"
                            checked={state.hunderfarenhet === "mycket"}
                            onChange={handleChange}
                        />
                        <span>Adoptören bör ha godkännedom om hundars beteende och kunna hantera diverse hundproblematik</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hunderfarenhet"
                            value="ganska"
                            checked={state.hunderfarenhet === "ganska"}
                            onChange={handleChange}
                        />
                        <span>Adoptören bör ha haft hund tidigare</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hunderfarenhet"
                            value="lite"
                            checked={state.hunderfarenhet === "lite"}
                            onChange={handleChange}
                        />
                        <span>Ingen större hunderfarenhet krävs men bra om man umgåtts med hundar tidigare</span>
                    </label>
                </div>
            </div>

            {/* Fysik */}
            <div className="questionContainer">
                <p className="questionHeading">Min hund..</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="fysik"
                            value="hög"
                            checked={state.fysik === "hög"}
                            onChange={handleChange}
                        />
                        <span>Kan bli väldigt stark och tung att hålla emot i vissa situationer</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="fysik"
                            value="normal"
                            checked={state.fysik === "normal"}
                            onChange={handleChange}
                        />
                        <span>Kan en person med normal eller hög fysisk förmåga hålla emot och hantera</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="fysik"
                            value="låg"
                            checked={state.fysik === "låg"}
                            onChange={handleChange}
                        />
                        <span>Min hund är inte så stark och kan bo med en ägare med nedatt fysiskt förmåga som t.ex. har svårt att hålla emot hunden i koppel</span>
                    </label>
                </div>
            </div>

            {/* Allergi */}
            <div className="questionContainer">
                <p className="questionHeading">Fäller din hund päls?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="allergi"
                            value="nej"
                            checked={state.allergi === "nej"}
                            onChange={handleChange}
                        />
                        <span>Min hund fäller päls</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="allergi"
                            value="ja"
                            checked={state.allergi === "ja"}
                            onChange={handleChange}
                        />
                        <span>Min hund fäller inte päls</span>
                    </label>
                </div>
            </div>

            {/* Barn */}
            <div className="questionContainer">
                <p className="questionHeading">Vilket alternativ stämmer för din hund och dess kompatiblitet med barn?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="barn"
                            value="ja"
                            checked={state.barn === "ja"} 
                            onChange={handleChange}
                        />
                        <span>Min hund kan bo och umgås med barn över 9 år</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="barn"
                            value="nej"
                            checked={state.barn === "nej"}
                            onChange={handleChange}
                        />
                        <span>Min hund bör inte vara runt barn 0-9 år</span>
                    </label>
                </div>
            </div>

            {/* Boende */}
            <div className="questionContainer">
                <p className="questionHeading">Vilka boendeformer kan din hund bo i?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input type="checkbox" onClick={handleChangeBoende} value={state.boende.centralt} name="centralt"/>
                        <span>Lägenhet centralt i område med mycket människor och trafik</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeBoende} value={state.boende.lägenhet} name="lägenhet"/>
                        <span>Lägenhet i lugnt lägenhetsområde</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeBoende} value={state.boende.villaområde} name="villaområde"/>
                        <span>Hus eller radhus i villaområde</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeBoende} value={state.boende.landet} name="landet"/>
                        <span>Enskilt hus eller gård på landet</span>
                    </label>
                </div>
            </div>

            {/* Hundpassning */}
            <div className="questionContainer">
                <p className="questionHeading">Vilka lösningar för att få ihop hundpassningen och vardagen är lämplig för din hund?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input type="checkbox" onClick={handleChangeHundpassning} value={state.hundpassning.hunddagis} name="hunddagis"/>
                        <span>Min hund kan gå på hunddagis</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeHundpassning} value={state.hundpassning.kontoret} name="kontoret"/>
                        <span>Min hund kan följa med sin ägare till kontoret om dagarna</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeHundpassning} value={state.hundpassning.ensam} name="ensam"/>
                        <span>Min hund kan vara ensam ett par timmar om dagarna</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeHundpassning} value={state.hundpassning.hemma} name="hemma"/>
                        <span>Min hund måste bo med en adoptör som kan vara hemma med hunden om dagarna</span>
                    </label>
                </div>
            </div>

            {/* Aktiviteter */}
            <div className="questionContainer">
                <p className="questionHeading">Vilken eller vilka typer av aktiviteter och livsstil lämpar för sig din hund?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.sällskap} name="sällskap"/>
                        <span>Min hund vore lycklig som ren sällskapshund</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.jakt} name="jakt"/>
                        <span>Min hund vore lämplig att användas i jakt</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.sportkompis} name="sportkompis"/>
                        <span>Min hund lämpar sig som sportkompis och vore lycklig av att följa med på diverse jogg-och cykelturer</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.sök} name="sök"/>
                        <span>Min hund vore lämplig att användas inom sök</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.hundsport} name="hundsport"/>
                        <span>Min hund vore lämplig att användas till hundsporter såsom agility, rallylydnad mm</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.vakt} name="vakt"/>
                        <span>Min hund vore lämplig att användas som vakthund</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.inget} name="inget"/>
                        <span>Ingen av ovan aktiviteter</span>
                    </label>
                </div>
            </div>

            {/* Energi */}
            <div className="questionContainer">
                <p className="questionHeading">Min hund behöver bo i hem där det är:</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="energi"
                            value="fartfyllt"
                            checked={state.energi === "fartfyllt"}
                            onChange={handleChange}
                        />
                        <span>Farfyllt och mycket händer</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="energi"
                            value="lugnt"
                            checked={state.energi === "lugnt"}
                            onChange={handleChange}
                        />
                        <span>Lugnt och sansat</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="energi"
                            value="båda"
                            checked={state.energi === "båda"}
                            onChange={handleChange}
                        />
                        <span>Min hund kan trivas i både lugnare och mer fartfyllda hem</span>
                    </label>
                </div>
            </div>

            {/* Problematik */}
            <div className="questionContainer">
                <p className="questionHeading">Besitter din hund någon känd hundproblematik, t.ex. aggressivitet, resursförsvar eller långvarigt sjukdomstillstånd som kräver regelbunden veterinärvård?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.hundaggressivitet} name="hundaggressivitet" />
                        <span>Hundaggressivitet</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.hoppar} name="hoppar" />
                        <span>Hoppar</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.integritet} name="integritet" />
                        <span>Hög integritet</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.drar} name="drar" />
                        <span>Drar i kopplet</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.skällig} name="skällig" />
                        <span>Skällig</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.ensam} name="ensam" />
                        <span>Kan inte lämnas ensam</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.resursförsvar} name="resursförsvar" />
                        <span>Resursförsvar</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.sjukdom} name="sjukdom" />
                        <span>Sjukdomstillstånd som kräver regelbunden veterinärvård</span>
                    </label>
                    <label>
                        <input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.ingen} name="ingen"/>
                        <span>Ingen känd hundproblematik</span>
                    </label>
                </div>
            </div>

            {/* Katt */}
            <div className="questionContainer">
                <p className="questionHeading">Kan din hund bo med katt?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="katt"
                            value="ja"
                            checked={state.katt === "ja"}
                            onChange={handleChange}
                        />
                        <span>Ja</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="katt"
                            value="nej"
                            checked={state.katt === "nej"}
                            onChange={handleChange}
                        />
                        <span>Nej</span>
                    </label>
                </div>
            </div>


            {/* Hund */}
            <div className="questionContainer">
                <p className="questionHeading">Kan din hund bo med andra hundar förutsatt rätt personkemi?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="hund"
                            value="tikar"
                            checked={state.hund === "tikar"}
                            onChange={handleChange}
                        />
                        <span>Ja, men bara med tikar</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hund"
                            value="hanar"
                            checked={state.hund === "hanar"}
                            onChange={handleChange}
                        />
                        <span>Ja, men bara med hanar</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hund"
                            value="båda"
                            checked={state.hund === "båda"}
                            onChange={handleChange}
                        />
                        <span>Ja, med båda hanar och tikar</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hund"
                            value="nej"
                            checked={state.hund === "nej"}
                            onChange={handleChange}
                        />
                        <span>Nej</span>
                    </label>
                </div>
            </div>

            {/* Ledarskap */}
            <div className="questionContainer">
                <p className="questionHeading">Vilket typ av ledarskap passar din hund bäst?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="ledarskap"
                            value="mjukt"
                            checked={state.ledarskap === "mjukt"}
                            onChange={handleChange}
                        />
                        <span>Mjukt och känsligt ledarskap</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="ledarskap"
                            value="tydligt"
                            checked={state.ledarskap === "tydligt"}
                            onChange={handleChange}
                        />
                        <span>Tydligt, rakt och bestämt ledarskap</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="ledarskap"
                            value="båda"
                            checked={state.ledarskap === "båda"}
                            onChange={handleChange}
                        />
                        <span>Båda ledarskapsstilarna kan passa min hund</span>
                    </label>
                </div>
            </div>

            {/* Beskrivning */}
            <div className="questionContainer">
                <label className="labelText">
                    <p className="questionHeading">Beskriv din hund med egna ord och förklara kort bakgrunden till omplaceringen</p>
                    <textarea value={state.beskrivning} type="text" name="beskrivning" onChange={handleChange} style={{height: '100px', fontSize: '20px', fontFamily: 'Arial'}}></textarea>
                </label>
            </div>

            {/* Bild */}
            <div className="questionContainer">
                <label className="labelText">
                    <p className="questionHeading">Lägg till en bild på din hund</p>
                    <input value={state.bild} type="text" name="bild" onChange={handleChange}/>
                </label>
            </div>

            {/* Ditt namn */}
            <div className="questionContainer">
                <label className="labelText">
                    <p className="questionHeading">Ditt namn</p>
                    <input value={state.kontaktnamn} type="text" name="kontaktnamn" onChange={handleChange}/>
                </label>
            </div>

            {/* Din mailadress */}
            <div className="questionContainer">
                <label className="labelText">
                    <p className="questionHeading">Din mailadress</p>
                    <input value={state.email} type="text" name="email" onChange={handleChange}/>
                </label>
            </div>

            {/* Länk */}
            <div className="questionContainer">
                <label className="labelText">
                    <p className="questionHeading">Eventuell länk till befitlig annons</p>
                    <input value={state.lank} type="text" name="lank" onChange={handleChange}/>
                </label>
            </div>
            <div style={{margin: '20px 0 20px 0', display: 'flex', justifyContent: 'center'}}>
                <button className="button" type="submit" onClick={handleOnSubmit}>
                    {submitButtonMessage}
                </button>
            </div>
            {submitted && 
                <div className="submitMessage">
                    <p>
                        {state.hundnamn && `${state.hundnamn} är inlagd ♥`}
                    </p>
                </div>
            }
        </form>
    </div>
    )
}

export default AddDogs;
