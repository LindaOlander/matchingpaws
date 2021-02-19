import React from "react";
import { render } from "react-dom";
import { Step, WizardForm } from "./WizardForm";
import axios from 'axios';
import DogBox from "../../DogBox/DogBox";
import { Link } from "react-router-dom";
import './Wizard.css';

class WizardParent extends React.Component {
    state = { 
        step: 0, 
        data: [],
        match: false,
        dogsShown: false,
        hunderfarenhet: '',
        fysik: '',
        allergi: '',
        barn: '',
        boende: '',
        hundpassning: '',
        energi: '',
        hund: '',
        katt: '',
        ledarskap: '',
        storlek: '',
        test: true,
    };

    fetchUsersWithAxios = () => {
        this.setState({...this.state});
        axios.get('https://matchingpaws-api.herokuapp.com/dogs')
            .then(response => {
                this.setState({data: response.data})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state});
            });
    };

    componentDidMount() {
        this.fetchUsersWithAxios();
    }

    handleStep = step => {
        this.setState({ step });
    };

    handleKattChange = (event) => {
        const kattInput = event.target.value;
        this.setState({katt: kattInput});
    }

    handleErfarenhetChange = (event) => {
        const erfarenhetInput = event.target.value;
        this.setState({hunderfarenhet: erfarenhetInput});
    }
    
    handleBoendeChange = (event) => {
        const boendeInput = event.target.value;
        this.setState({boende: boendeInput});
    }

    handleFysikChange = (event) => {
        const fysikInput = event.target.value;
        this.setState({fysik: fysikInput});
    }

    handleAllergiChange = (event) => {
        const allergiInput = event.target.value;
        this.setState({allergi: allergiInput});
    }

    handleBarnChange = (event) => {
        const barnInput = event.target.value;
        this.setState({barn: barnInput});
    }

    handleHundpassningChange = (event) => {
        const hundpassningInput = event.target.value;
        this.setState({hundpassning: hundpassningInput});
    }

    handleEnergiChange = (event) => {
        const energiInput = event.target.value;
        this.setState({energi: energiInput});
    }

    handleProblematikChange = (event) => {
        const problematikInput = event.target.value;
        this.setState({problematik: problematikInput});
    }

    handleHundChange = (event) => {
        const hundInput = event.target.value;
        this.setState({hund: hundInput});
    }

    handleLedarskapChange = (event) => {
        const ledarskapInput = event.target.value;
        this.setState({ledarskap: ledarskapInput});
    }

    handleStorlekChange = (event) => {
        const storlekInput = event.target.value;
        this.setState({storlek: storlekInput});
    }

    handleRedoQuiz = () => {
        window.location.reload();
    }
    
    filterDogs = () => {
        this.setState({match: true})
        this.setState({dogsShown: true})
        const copyDogs = [...this.state.data];
        const filterOnErfarenhet = copyDogs.filter(dog => dog.hunderfarenhet === this.state.hunderfarenhet)
        this.setState({data: filterOnErfarenhet}); 
        const filterOnBoende = copyDogs.filter(dog => dog.boende === this.state.boende)
        this.setState({data: filterOnBoende}); 
        const filterOnFysik = copyDogs.filter(dog => dog.fysik === this.state.fysik)
        this.setState({data: filterOnFysik}); 
        const filterOnAllergi = copyDogs.filter(dog => dog.allergi === this.state.allergi)
        this.setState({data: filterOnAllergi}); 
        const filterOnBarn = copyDogs.filter(dog => dog.barn === this.state.barn)
        this.setState({data: filterOnBarn}); 
        const filterOnHundpassning = copyDogs.filter(dog => dog.hundpassning === this.state.hundpassning)
        this.setState({data: filterOnHundpassning}); 
        const filterOnEnergi = copyDogs.filter(dog => dog.energi === this.state.energi)
        this.setState({data: filterOnEnergi}); 
        const filterOnHund = copyDogs.filter(dog => dog.hund === this.state.hund)
        this.setState({data: filterOnHund}); 
        const filterOnKatt = copyDogs.filter(dog => dog.katt === this.state.katt)
        this.setState({data: filterOnKatt}); 
        const filterOnLedarskap = copyDogs.filter(dog => dog.ledarskap === this.state.ledarskap)
        this.setState({data: filterOnLedarskap}); 
        const filterOnStorlek = copyDogs.filter(dog => dog.storlek === this.state.storlek)
        this.setState({data: filterOnStorlek}); 
    }

    render() {
    console.log('data', this.state.data);
    console.log('state', this.state);
    console.log('this.state.data.length', this.state.data.length);

    return (
      <div className="wizardContainer" id="/matchingpaws/quiz">
        <WizardForm step={this.state.step} onChange={this.handleStep}>

        {/* Check */}
          <Step title="Erfarenhet" description="Erfarenhet">
            <div>
                <strong>Vilket alternativ beskriver bäst din tidigare hunderfarenhet?</strong>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='mycket' name='erfarenhet' value='mycket' checked={this.state.hunderfarenhet === 'mycket'} onChange={this.handleErfarenhetChange} />
                    {/* Matchas med mycket, ganska, lite */}
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='mycket'>Jag har haft fullt ansvar för en hund tidigare</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='ganska' name='erfarenhet' value='ganska' checked={this.state.hunderfarenhet === 'ganska'} onChange={this.handleErfarenhetChange} />
                    {/* Matchas med ganska, lite */}
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='ganska'>Jag har inte haft hund själv, men har hjälpt vänner och familj med deras hundar</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='lite' name='erfarenhet' value='lite' checked={this.state.hunderfarenhet === 'lite'} onChange={this.handleErfarenhetChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='lite'>Jag har ingen tidigare hunderfarenhet</label>
                </div>
            </div>
          </Step>

            {/* Check */}
          <Step title="Fysik" description="Fysik">
            <div>
                <strong>Vilket alternativ beskriver bäst din fysiska förmåga?</strong>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='hög' name='fysik' value='hög' checked={this.state.fysik === 'hög'} onChange={this.handleFysikChange} />
                    {/* Matchas med hög, låg, normal */}
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='hög'>Jag är stark och kan hålla emot även tyngre starka hundar om det behövs</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='normal' name='fysik' value='normal' checked={this.state.fysik === 'normal'} onChange={this.handleFysikChange} />
                    {/* Matchas med normal, låg */}
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='normal'>Jag skulle beskriva min fysiska förmåga som normal</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='låg' name='fysik' value='låg' checked={this.state.fysik === 'låg'} onChange={this.handleFysikChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='låg'>Jag har vissa fysiska begränsningar som gör att jag inte är lämplig som ägare till starkare hundar</label>
                </div>
            </div>
            </Step>

        {/* Check */}
          <Step title="Allergi" description="Allergi">
            <div>
                <strong>Kan du bo med en hund som fäller päls?</strong>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='allergiJa' name='allergi' value='ja' checked={this.state.allergi === 'ja'} onChange={this.handleAllergiChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='allergiJa'>Ja</label>
                </div>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='allergiNej' name='allergi' value='nej' checked={this.state.allergi === 'nej'} onChange={this.handleAllergiChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='allergiNej'>Nej</label>
                </div>
            </div>
          </Step>
          
            {/* Check */}
          <Step title="Barn" description="Barn">
            <div>
                <strong>Hur mycket kommer hunden träffa och umgås med barn?</strong>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='ofta' name='barn' value='ofta' checked={this.state.barn === 'ofta'} onChange={this.handleBarnChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='ofta'>Vardagligen i hemmet</label>
                </div>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='ibland' name='barn' value='ibland' checked={this.state.barn === 'ibland'} onChange={this.handleBarnChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='ibland'>Då och då när besökare kommer över</label>
                </div>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='ibland' name='barn' value='ibland' checked={this.state.barn === 'ibland'} onChange={this.handleBarnChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='ibland'>Till en början inte alls men i framtiden vill jag ha barn som jag önskar att min hund kan leva med</label>
                </div>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='aldrig' name='barn' value='aldrig' checked={this.state.barn === 'aldrig'} onChange={this.handleBarnChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='aldrig'>Ytterst sällan eller aldrig</label>
                </div>
            </div>
          </Step>

        {/* Check */}
          <Step title="Boende" description="Boende">
            <div>
                <strong>Hur bor du?</strong>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='villa-landet' name='boende' value='villa-landet' checked={this.state.boende === 'villa-landet'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='villa-landet'>Villa utanför stan</label>
                </div>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='villa-stad' name='boende' value='villa-stad' checked={this.state.boende === 'villa-stad'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='villa-stad'>Villa i stadsmiljö</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='lgh-landet' name='boende' value='lgh-landet' checked={this.state.boende === 'lgh-landet'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='lgh-landet'>Lägenhet utanför stan</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='lgh-stad' name='boende' value='lgh-stad' checked={this.state.boende === 'lgh-stad'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='lgh-stad'>Lägenhet i stadsmiljö</label>
                </div>
            </div>
          </Step>

          {/* Check */}
          <Step title="Hundpassning" description="Hundpassning">
            <div>
                <strong>Hur planerar du att få ihop vardagen med din hund?</strong>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='hunddagis' name='hundpassning' value='hunddagis' checked={this.state.hundpassning === 'hunddagis'} onChange={this.handleHundpassningChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='hunddagis'>Hunden kommer gå på hunddagis</label>
                </div>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='kontor' name='hundpassning' value='kontor' checked={this.state.hundpassning === 'kontor'} onChange={this.handleHundpassningChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='kontor'>Hunden kommer att följa med till arbetet</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='ensam' name='hundpassning' value='ensam' checked={this.state.hundpassning === 'ensam'} onChange={this.handleHundpassningChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='ensam'>Hunden kommer få vara ensam hemma ett par timmar om dagen</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='hemma' name='hundpassning' value='hemma' checked={this.state.hundpassning === 'hemma'} onChange={this.handleHundpassningChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='hemma'>Hunden kommer kunna vara hemma med mig eller annan närstående om dagarna</label>
                </div>
            </div>
          </Step>

          {/* Check */}
          <Step title="Energi" description="Energi">
            <div>
                <strong>Vilken beskrivning passar bäst in på energin i ditt hem?</strong>
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='fartfyllt' name='energi' value='fartfyllt' checked={this.state.energi === 'fartfyllt'} onChange={this.handleEnergiChange} />
                        {/* Matchas med fartfyllt, båda */}
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='fartfyllt'>I mitt hem är det fart och fläkt. Mycket besökare och saker som händer hela tiden</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='lugnt' name='energi' value='lugnt' checked={this.state.energi === 'lugnt'} onChange={this.handleEnergiChange} />
                        {/* Matchas med lugnt, båda */}
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='lugnt'>I mitt hem är det lugnt, tryggt och sansat</label>
                    </div>
                </div>
            </div>
          </Step>

          {/* Check */}
          <Step title="Katt" description="Katt">
            <div>
                <strong>Finns det katt i hemmet?</strong>
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='ja' name='katt' value='ja' checked={this.state.katt === 'ja'} onChange={this.handleKattChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='ja'>Ja</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='nej' name='katt' value='nej' checked={this.state.katt === 'nej'} onChange={this.handleKattChange} />
                        {/* Matchas med nej, ja */}
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='nej'>Nej</label>
                    </div>
                </div>
            </div>
          </Step>

          {/* Check */}
          <Step title="Hund" description="Hund">
            <div>
                <strong>Finns det hund i hemmet idag?</strong>
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='tikar' name='hund' value='tikar' checked={this.state.hund === 'tikar'} onChange={this.handleHundChange} />
                        {/* Matchas med tikar, båda */}
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='tikar'>Ja, tik eller tikar</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='hanar' name='hund' value='hanar' checked={this.state.hund === 'hanar'} onChange={this.handleHundChange} />
                        {/* Matchas med hanar, båda */}
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='hanar'>Ja, hane eller hanar</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='båda' name='hund' value='båda' checked={this.state.hund === 'båda'} onChange={this.handleHundChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='båda'>Ja, både tik och hane</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='nej' name='hund' value='nej' checked={this.state.hund === 'nej'} onChange={this.handleHundChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='nej'>Nej</label>
                    </div>
                </div>
            </div>
          </Step>

          {/* Check */}
          <Step title="Ledarskap" description="Ledarskap">
            <div>
                <strong>Vilket av följande alternativ beskriver bäst din person och syn på hunduppfostran?</strong>
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='mjukt' name='ledarskap' value='mjukt' checked={this.state.ledarskap === 'mjukt'} onChange={this.handleLedarskapChange} />
                        {/* Matchas med mjukt, båda */}
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='mjukt'>Jag är mjuk och kärleksfull i mitt umgänge med hundar</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='tydligt' name='ledarskap' value='tydligt' checked={this.state.ledarskap === 'tydligt'} onChange={this.handleLedarskapChange} />
                        {/* Matchas med tydligt, båda */}
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='tydligt'>Jag är rak och konsekvent i min hunduppfostran</label>
                    </div>
                </div>
            </div>
          </Step>

          {/* Check */}
          <Step title="Storlek" description="Storlek">
            <div>
                <strong>Vilken storlek på hund har du möjlighet att ta hand om?</strong>
                <div className="inputWrapper">
                    {/* Ska kunna välja flera */}
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='liten' name='storlek' value='liten' checked={this.state.storlek === 'liten'} onChange={this.handleStorlekChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='liten'>Liten hund (under 45 cm mankhöjd)</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='mellan' name='storlek' value='mellan' checked={this.state.storlek === 'mellan'} onChange={this.handleStorlekChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='mellan'>Mellanstor hund (ca 45-55 cm mankhöjd)</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='checkbox' id='stor' name='storlek' value='stor' checked={this.state.storlek === 'stor'} onChange={this.handleStorlekChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='stor'>Stor hund (över 55 cm mankhöjd)</label>
                    </div>
                </div>
            </div>
          </Step>

          {/* <Step title="Result" description="Result">
            <div>
                <p>Hittar dina matchingar..</p>
                <div className="wizardButtonWrapper">
                </div>
            </div>
          </Step> */}

          <Step>
              <div className="resultStep">
                {!this.state.match &&
                    <div className="resultButtonWrapper">
                        <button className="button" onClick={this.filterDogs}>Visa resultat</button>
                    </div>
                }
                <div className="resultContainer">
                    {/* Vid matchning */}
                    {this.state.match && this.state.data.length && 
                        <>
                            <h3>Grattis, du har blivit matchad!</h3>
                            <p>Enligt våra algoritmer skulle du passa bäst med nedanstående hundar. Läs på om hunden du matchats med och kontakta deras nuvarande ägare om du seriöst är intresserad av att adoptera deras hund.</p>
                            <div id="dogResult">
                                {this.state.data.map(dog =>
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
                    {(this.state.match && !this.state.data.length) && 
                        <>
                            <h3>Just nu finns det tyvärr ingen hund som matchar med dig.</h3>
                            <p>Men ge inte upp! Vi på Matchning Paws får löpande in hundar som behöver omplaceras och snart kanske det kommer in en hund som passar just dig.</p>
                            <p>Vi rekommenderar därför dig att gå in regelbundet på hemsidan och göra om testet för att se om om det kommit ny hundar som du matchar med.</p>
                        </>
                    }
                    {this.state.dogsShown &&
                    <div className="wizardButtonWrapper"> 
                        <Link to="/adoptera">
                            <button onClick={this.handleRedoQuiz} className="button">Gör om quizet</button>
                        </Link>
                    </div>
                    }
                </div>
            </div>
          </Step>
        </WizardForm>
      </div>
    );
    }
}

export default WizardParent;