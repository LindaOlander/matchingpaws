import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

export default function ContactUs() {
	const [state, setState] = useState({
		kontaktnamn: "",
		email: "",
		anledning: "",
		ursprung: "",
        hundnamn: "",
        beskrivning: "",
        ras: "",
        alder: "",
        storlek: "",    
        kastrerad: "",
        hunderfarenhet: "",
        fysik: "",
        allergi: "",
        barn: "",
        boende: {
			centralt: false,
			lagenhet: false,
			villaomrade: false,
			landet: false,
		},
        hundpassning: {
			hunddagis: false,
			kontoret: false,
			ensam: false,
			hemma: false,
		},
        energi: "",
        katt: "",
        hund: "",
		ledarskap: "",
		aktivitet: {
			sallskap: false,
			jakt: false,
			sportkompis: false,
			sok: false,
			hundsport: false,
			vakt: false
		},
		problematik: {
            hundaggressivitet: false,
            hoppar: false,
            integritet: false,
            drar: false,
            ensam: false,
            skallig: false,
            resursforsvar: false,
            sjukdom: false,
            ingen: false,
        },
		lank: "",
		GDPR: false
	  })
	const [submit, setSubmit] = useState(false);
	const [disabled, setDisabled] = useState(false);

	console.log('state', state)

  function sendEmail(event) {
	event.preventDefault();
	const serviceId = 'service_g3vrn0d';
	const userId = 'user_so1Tk1CyG7AYEMjyokYMa';
	const templateId = 'template_19nljwc';

    emailjs.send(serviceId, templateId, state, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const handleChange = (event) => {
	const value = 
		event.target.type === "checkbox" ? event.target.checked : event.target.value;
	setState({
	  ...state,
	  [event.target.name]: value
	});
  }

  const handleChangeGDPR = (event) => {
	const value = 
		event.target.type === "checkbox" ? event.target.checked : event.target.value;
	setState({
	  ...state,
	  [event.target.name]: value
	});
	setDisabled(!disabled)
  }

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
	
	const handleSubmit = () => {
		setSubmit(true);
	}

  return (
	<div className="addProductContainer">
		<h2>Omplaceringsformulär</h2>
		<br />
		<p className="smallParagraph">Kom ihåg att svara sanningsenligt på formuläret och kontrollera dina kontaktuppgifter, så att eventuella adoptörer kan komma i kontakt med dig.</p>
		<form className="contact-form" onSubmit={sendEmail}>
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
			{/* Anledning till omplacering */}
			<div className="questionContainer">
				<label className="labelText">
					<p className="questionHeading">Anledning till omplaceringen</p>
					<input value={state.anledning} type="text" name="anledning" onChange={handleChange}/>
				</label>
			</div>
			{/* Ursprung */}
			<div className="questionContainer">
				<label className="labelText">
					<p className="questionHeading">Var kommer din hund ifrån?</p>
					<p className="smallParagraph">Beskriv hur det gick till när du blev ägare till din hund, t.ex. om den kommer från en hunduppfödare registrerad i SKK, tidigare adoption etc.</p>
					<input value={state.ursprung} type="text" name="ursprung" onChange={handleChange}/>
				</label>
			</div>
			<div className="questionContainer">
				<label className="labelText">
					<p className="questionHeading">Vad heter din hund?</p>
					<input value={state.hundnamn} type="text" name="hundnamn" onChange={handleChange}/>
				</label>
			</div>
			<div className="questionContainer">
				<label className="labelText">
					<p className="questionHeading">Vilken ras är din hund?</p>
					<input value={state.ras} type="text" name="ras" onChange={handleChange}/>
				</label>
			</div>
			<div className="questionContainer">
				<label className="labelText">
					<p className="questionHeading">Hur gammal är din hund?</p>
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
				<p className="questionHeading">Vilken typ av erfarenhet av hundar anser du att den som adopterar din hund <i>minst</i> behöver?</p>
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
							value="ofta"
							checked={state.barn === "ofta"} 
							onChange={handleChange}
						/>
						<span>Min hund kan bo med barn</span>
					</label>
					<label>
						<input
							type="radio"
							name="barn"
							value="ibland"
							checked={state.barn === "ibland"}
							onChange={handleChange}
						/>
						<span>Min hund ska bör inte bo med barn men det går bra för min hund att socialisera med barn</span>
					</label>
					<label>
						<input
							type="radio"
							name="barn"
							value="aldrig"
							checked={state.barn === "aldrig"}
							onChange={handleChange}
						/>
						<span>Min hund bör inte vara runt barn</span>
					</label>
				</div>
			</div>
			{/* Boende */}
			<div className="questionContainer">
				<p className="questionHeading">Vilka boendeformer kan din hund bo i?</p>
				{/* Ska kunna klicka i flera */}
				<div className="inputRadioWrapper">
						<label>
							<input type="checkbox" onClick={handleChangeBoende} value={state.boende.centralt} name="centralt"/>
							<span>Lägenhet centralt i område med mycket människor och trafik</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeBoende} value={state.boende.lagenhet} name="lagenhet"/>
							<span>Lägenhet i lugnt lägenhetsområde</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeBoende} value={state.boende.villaomrade} name="villaomrade"/>
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
				<p className="questionHeading">Vilka hundpassningslösningar är lämpliga för din hund?</p>
				{/* Ska kunna skicka in flera */}
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
			{/* Problematik */}
			<div className="questionContainer">
				<p className="questionHeading">Besitter din hund någon känd hundproblematik. Klicka i för de hundproblematiksområden din hund har. Du kan välja fler alternativ.</p>
				<div className="inputRadioWrapper">
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.hundaggressivitet} name="hundaggressivitet"/>
							<span>Hundaggresivitet</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.hoppar} name="hoppar"/>
							<span>Hoppar mot folk när den hälsar</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.integritet} name="integritet"/>
							<span>Hög intigritet</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.drar} name="drar"/>
							<span>Drar i kopplet</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.ensam} name="ensam"/>
							<span>Kan inte vara ensam hemma</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.skallig} name="skallig"/>
							<span>Skällig</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.resursforsvar} name="resursforsvar"/>
							<span>Resursförsvar</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.sjukdom} name="sjukdom"/>
							<span>Sjukdomstillstånd som kräver regelbunden veterinärvård</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.nervos} name="nervos"/>
							<span>Nervös eller stressad</span>
						</label>
						<label>
							<input type="checkbox" onClick={handleChangeProblematik} value={state.problematik.ingen} name="ingen"/>
							<span>Min hund har ingen nämnd problematik</span>
						</label>
				</div>
			</div>
			{/* Aktiviteter */}
			<div className="questionContainer">
				<p className="questionHeading">Vilken eller vilka typer av aktiviteter och livsstil lämpar för sig din hund? Du kan välja fler alternativ.</p>
				<div className="inputRadioWrapper">
					<label>
						<input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.sallskap} name="sallskap"/>
						<span>Min hund vore lycklig som ren sällskapshund</span>
					</label>
					<label>
						<input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.jakt} name="jakt"/>
						<span>Min hund vore lämplig att användas i jakt</span>
					</label>
					<label>
						<input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.sok} name="sok"/>
						<span>Min hund vore lämplig att användas inom sök</span>
					</label>
					<label>
						<input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.sportkompis} name="sportkompis"/>
						<span>Min hund lämpar sig som sportkompis och vore lycklig av att följa med på diverse jogg-och cykelturer.</span>
					</label>
					<label>
						<input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.hundsport} name="hundsport"/>
						<span>Min hund kan användas till hundsporter så som agility,rallylydnad m.m</span>
					</label>
					<label>
						<input type="checkbox" onClick={handleChangeAktivitet} value={state.aktivitet.vakt} name="vakt"/>
						<span>Min hund vore lämplig att användas som vakthund</span>
					</label>
				</div>
			</div>
			{/* Beskrivning */}
			<div className="questionContainer">
				<label className="labelText">
					<p className="questionHeading">Beskriv din hund med egna ord</p>
					<p className="smallParagraph">Denna beskrivning kommer att delas med eventuella adoptörer, varpå det är viktigt att du beskriver din hunds person och behov utförligt.</p>
					<input value={state.beskrivning} type="text" name="beskrivning" onChange={handleChange}/>
				</label>
			</div>
			{/* Länk */}
			<div className="questionContainer">
				<label className="labelText">
					<p className="questionHeading">Eventuell länk till befintlig annons</p>
					<input value={state.lank} type="text" name="lank" onChange={handleChange}/>
				</label>
			</div>
			Du kommer att få möjlighet att komplettera med bilder på din hund när din omplaceringsannons är godkänd.
			{/* GDPR */}
			<div className="questionContainer">
				<div className="inputRadioWrapper">
					<label>
						<input
							type="checkbox"
							name="GDPR"
							value="GDPR"
							id="GDPR"
							checked={state.GDPR === true}
							onChange={handleChangeGDPR}
						/>
						<span>Jag godkänner att mina personuppgifter sparas av Matching Paws och att min mailadress delas med potentiella adoptörer på matchingpaws.se</span>
					</label>
				</div>
			</div>
			<div className="buttonWrapper center">
				<input className={disabled ? "button" : "button buttonDisabled"} type="submit" value="Skicka in förfrågan" onClick={handleSubmit} />
			</div>
			<div className="center" style={{textAlign: 'center'}}>
				{submit && <p>Tack! Din förfrågan om att lägga in {state.hundnamn} har skickats ♥️</p>}
			</div>
		</form>
	</div>
  );
}