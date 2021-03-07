import React, { useState } from "react"
import FileUploader from '../Wizard/FileUploader';
import './AddDogs.css';
 

const AddDogs = () => {
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
        boende: "",
        hundpassning: "",
        energi: "",
        problematik: "",
        katt: "",
        hund: "",
        ledarskap: "",
        storlek: "",    
      })

    const [selectedFile, setSelectedFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        // const value = 
        //     event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }

    const handleFileChange = (event) => {
        setState({ 
            ...state,
            [event.target.name]: event.target.files[0]
        });
      }

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
            boende: state.boende,
            hundpassning: state.hundpassning,
            energi: state.energi,
            problematik: state.problematik,
            katt: state.katt,
            hund: state.hund,
            ledarskap: state.ledarskap,
            storlek: state.storlek,    
        }

        // const herokuUrl = "http://localhost:8080/dogs/";
        // const herokuUrl = "https://test-matchingpaws.herokuapp.com/dogs";
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
        
    const handleOnSubmit = () => {
        setSubmitted(true);
    }

    const submitButtonMessage = `Skicka in ${state.hundnamn} för matchning`;

    return (
    <div className="addProductContainer">
        <form id="postingForm" className="postingForm" onSubmit={submitForm}>
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
                    <input value={state.alder} type="text" name="alder" onChange={handleChange}/>  
                </label>    
            </div> 

            {/* Storlek */}
            <div className="questionContainer">
                <p className="questionHeading">Hur stor är din hund?</p>
                {/* <div className="inputContainer">
                <input className="radio" type='radio' id='liten' name='storlek' value='liten' checked={state.storlek === 'liten'} onChange={handleChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='mycket'>Liten- eller mellanstor hund (upp till 55 cm mankhöjd).</label>
                </div> */}
                <div className="inputRadioWrapper">
                    <label className="inputRadioLabel">
                        <input
                            type="radio"
                            name="storlek"
                            value="liten"
                            checked={state.storlek === "liten"}
                            onChange={handleChange}
                        />
                        <span>Liten- eller mellanstor hund (upp till 55 cm mankhöjd).</span>
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
                        <span>Min hund kan bo och umgås med barn</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="barn"
                            value="nej"
                            checked={state.barn === "nej"}
                            onChange={handleChange}
                        />
                        <span>Min hund bör inte vara runt barn</span>
                    </label>
                </div>
            </div>

            {/* Boende */}
            <div className="questionContainer">
                <p className="questionHeading">Vilka boendeformer kan din hund bo i?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="boende"
                            value="stadsmiljö"
                            checked={state.boende === "stadsmiljö"}
                            onChange={handleChange}
                        />
                        <span>I stadsmiljö och på landet</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="boende"
                            value="landet"
                            checked={state.boende === "landet"}
                            onChange={handleChange}
                        />
                        <span>Endast på landet</span>
                    </label>
                </div>
            </div>

            {/* Hundpassning */}
            <div className="questionContainer">
                <p className="questionHeading">Kan din hund gå på hunddagis?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="hundpassning"
                            value="hunddagis"
                            checked={state.hundpassning === "hunddagis"}
                            onChange={handleChange}
                        />
                        <span>Min hund kan gå på hunddagis</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hundpassning"
                            value="hemma"
                            checked={state.hundpassning === "hemma"}
                            onChange={handleChange}
                        />
                        <span>Min hund måste bo med en adoptör som kan vara hemma med hunden om dagarna</span>
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

            {/* Problematik */}
            <div className="questionContainer">
                <p className="questionHeading">Besitter din hund någon känd hundproblematik, t.ex. aggressivitet, resursförsvar eller långvarigt sjukdomstillstånd som kräver regelbunden veterinärvård?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="problematik"
                            value="ja"
                            checked={state.problematik === "ja"}
                            onChange={handleChange}
                        />
                        <span>Ja</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="problematik"
                            value="nej"
                            checked={state.problematik === "nej"}
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
                        Din hund är inlagd för matchning.
                    </p>
                </div>
            }
        </form>
    </div>
    )
}

export default AddDogs;
