import React, { useState } from "react"
import './AddDogs.css';
 

const AddDogs = () => {
    const [state, setState] = useState({
        hundnamn: "",
        beskrivning: "",
        bild: "",
        ras: "",
        alder: "",
        storlek: "",    
        kastrerad: "",
        hunderfarenhet: "",
        fysik: "",
        allergi: "",
        barn: "",
        boende: "",
        hundpassning: "",
        aktivitet: {
            sällskap: true,
            jakt: true,
            sportkompis: true,
            sök: true,
            hundsport: true,
            vakt: true,
            ingen: false,
        },
        energi: "",
        problematik: {
            hundaggressivitet: true,
            hoppar: true,
            integritet: true,
            drar: true,
            ensam: true,
            skällig: true,
            resursförsvar: true,
            sjukdom: true,
            ingen: false,
        },
        katt: "",
        hund: "",
        ledarskap: "",
        kontaktnamn: "",
        email: "",
        lank: ""
      })

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const value = 
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
        // const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
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
            storlek: state.storlek,    
            kastrerad: state.kastrerad,
            hunderfarenhet: state.hunderfarenhet,
            fysik: state.fysik,
            allergi: state.allergi,
            barn: state.barn,
            boende: state.boende,
            hundpassning: state.hundpassning,
            aktivitet: state.aktivitet,
                sällskap: state.aktivitet.sällskap,
                jakt: state.aktivitet.jakt,
                sportkompis: state.aktivitet.sportkompis,
                sök: state.aktivitet.sök,
                hundsport: state.aktivitet.hundsport,
                vakt: state.aktivitet.vakt,
            energi: state.energi,
            problematik: state.problematik,
                hundaggressivitet: state.problematik.hundaggressivitet,
                hoppar: state.problematik.hoppar,
                integritet: state.problematik.integritet,
                drar: state.problematik.drar,
                ensam: state.problematik.ensam,
                skällig: state.problematik.skällig,
                resursförsvar: state.problematik.resursförsvar,
                sjukdom: state.problematik.sjukdom,
                ingen: state.problematik.ingen,
            katt: state.katt,
            hund: state.hund,
            ledarskap: state.ledarskap,
            kontaktnamn: state.kontaktnamn,
            email: state.email,
            lank: state.lank
        }

        // const herokuUrl = "http://localhost:8080/dogs/";
        const herokuUrl = "https://test-matchingpaws.herokuapp.com/dogs";

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
    console.log(submitted)

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
                <div className="inputRadioWrapper">
                    <label className="inputRadioLabel">
                        <input
                            type="radio"
                            name="storlek"
                            value="liten"
                            checked={state.storlek === "liten"}
                            onChange={handleChange}
                        />
                        <span>Liten hund (mindre än 45 cm mankhöjd).</span>
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
                <p className="questionHeading">Vilken typ av erfarenhet av hundar anser du att den som adopterar din hund behöver?</p>
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
                        <span>Ingen större erfarenhet krävs men bra om man umgåtts med hundar tidigare</span>
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
                        <span>..kan bli väldigt stark och tung att hålla emot i vissa situationer</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="fysik"
                            value="normal"
                            checked={state.fysik === "normal"}
                            onChange={handleChange}
                        />
                        <span>Bör en person med normal fysisk förmåga kunna hålla emot och hantera</span>
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
                            value="ja"
                            checked={state.allergi === "ja"}
                            onChange={handleChange}
                        />
                        <span>Ja</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="allergi"
                            value="nej"
                            checked={state.allergi === "nej"}
                            onChange={handleChange}
                        />
                        <span>Nej</span>
                    </label>
                </div>
            </div>
            {/* Barn */}
            <div className="questionContainer">
                <p className="questionHeading">Vilket alternativ stämmer för din hund och dess möjlighet att leva med barn?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="barn"
                            value="ja"
                            checked={state.barn === "ja"}
                            onChange={handleChange}
                        />
                        <span>Min hund kan bo med barn</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="barn"
                            value="lite"
                            checked={state.barn === "lite"}
                            onChange={handleChange}
                        />
                        <span>Min hund ska bör inte bo med barn men det går bra för min hund att socialisera med barn</span>
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
                            value="lgh-stad"
                            checked={state.boende === "lgh-stad"}
                            onChange={handleChange}
                        />
                        <span>I lägenhet i stadsmiljö</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="boende"
                            value="villa-stad"
                            checked={state.boende === "villa-stad"}
                            onChange={handleChange}
                        />
                        <span>I villa/radhus i stadsmiljö</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="boende"
                            value="lgh-landet"
                            checked={state.boende === "lgh-landet"}
                            onChange={handleChange}
                        />
                        <span>I lägenhet på landet</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="boende"
                            value="villa-landet"
                            checked={state.boende === "villa-landet"}
                            onChange={handleChange}
                        />
                        <span>I villa/radhus på landet</span>
                    </label>
                </div>
            </div>
            {/* Hundpassning */}
            <div className="questionContainer">
                <p className="questionHeading">Vilka lösningar är för att få ihop hundpassningen och vardagen är lämplig för din hund?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="radio"
                            name="hundpassning"
                            value="dagis"
                            checked={state.hundpassning === "dagis"}
                            onChange={handleChange}
                        />
                        <span>Min hund kan gå på hunddagis</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hundpassning"
                            value="kontor"
                            checked={state.hundpassning === "kontor"}
                            onChange={handleChange}
                        />
                        <span>Min hund kan följa med sin ägare till kontoret om dagarna</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="hundpassning"
                            value="ensam"
                            checked={state.hundpassning === "ensam"}
                            onChange={handleChange}
                        />
                        <span>Min hund kan vara ensam ett par timmar om dagarna</span>
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
            {/* Aktiviteter */}
            <div className="questionContainer">
                <p className="questionHeading">Vilken eller vilka typer av aktiviteter och livsstil lämpar för sig din hund?</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="checkbox"
                            name="sällskap"
                            checked={state.aktivitet.sällskap}
                            onChange={handleChange}
                        />
                        <span>Min hund vore lycklig som ren sällskapshund</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="jakt"
                            checked={state.aktivitet.jakt}
                            onChange={handleChange}
                        />
                        <span>Min hund vore lämplig att användas i jakt</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="sportkompis"
                            checked={state.aktivitet.sportkompis}
                            onChange={handleChange}
                        />
                        <span>Min hund lämpar sig som sportkompis och vore lycklig av att följa med på diverse jogg-och cykelturer</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="sök"
                            checked={state.aktivitet.sök}
                            onChange={handleChange}
                        />
                        <span>Min hund vore lämplig att användas inom sök</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hundsport"
                            checked={state.aktivitet.hundsport}
                            onChange={handleChange}
                        />
                        <span>Min hund vore lämplig att användas till hundsporter såsom agility, rallylydnad mm</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="vakt"
                            checked={state.aktivitet.vakt}
                            onChange={handleChange}
                        />
                        <span>Min hund vore lämplig att användas som vakthund</span>
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
                <p className="questionHeading">Besitter din hund någon känd hundproblematik? Du kan välja fler alternativ.</p>
                <div className="inputRadioWrapper">
                    <label>
                        <input
                            type="checkbox"
                            name="hundaggressivitet"
                            checked={state.problematik.hundaggressivitet}
                            onChange={handleChange}
                        />
                        <span>Hundaggressivitet</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hundaggressivitet"
                            checked={state.problematik.hundaggressivitet}
                            onChange={handleChange}
                        />
                        <span>Hundaggressivitet</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hoppar"
                            checked={state.problematik.hoppar}
                            onChange={handleChange}
                        />
                        <span>Hoppar på folk när den hälsar</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="integritet"
                            checked={state.problematik.integritet}
                            onChange={handleChange}
                        />
                        <span>Hög integritet</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="drar"
                            checked={state.problematik.drar}
                            onChange={handleChange}
                        />
                        <span>Drar i kopplet</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="ensam"
                            checked={state.problematik.ensam}
                            onChange={handleChange}
                        />
                        <span>Kan inte vara ensam hemma</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="skällig"
                            checked={state.problematik.skällig}
                            onChange={handleChange}
                        />
                        <span>Skällig</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="resursförsvar"
                            checked={state.problematik.resursförsvar}
                            onChange={handleChange}
                        />
                        <span>Resursförsvar</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="sjukdom"
                            checked={state.problematik.sjukdom}
                            onChange={handleChange}
                        />
                        <span>Sjukdomstillstånd som kräver regelbunden veterinärvård</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="ingen"
                            checked={state.problematik.ingen}
                            onChange={handleChange}
                        />
                        <span>Min hund har ingen nämnd problematik</span>
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
                            value="både"
                            checked={state.ledarskap === "både"}
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
                    <input value={state.beskrivning} type="text" name="beskrivning" onChange={handleChange}/>
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
                <button style={{fontSize: '18px'}} type="submit" onClick={handleOnSubmit}>
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
