import React from "react";
import { render } from "react-dom";
import { Step, WizardForm } from "./WizardForm";
import axios from 'axios';
import DogBox from "../../DogBox/DogBox";
import './Wizard.css';

class WizardParent extends React.Component {
    state = { 
        step: 0, 
        data: [],
        match: false,
        hunderfarenhet: '',
        fysik: '',
        allergi: '',
        barn: '',
        boende: '',
        hundpassning: '',
        aktivitet: {
            sällskap: true,
            jakt: true,
            sportkompis: true,
            sök: true,
            hundsport: true,
            vakt: true
        },
        energi: '',
        problematik: {},
        hund: '',
        katt: '',
        ledarskap: '',
        storlek: '',
        test: true,
    };

    fetchUsersWithAxios = () => {
        this.setState({...this.state});
        axios.get('https://test-matchingpaws.herokuapp.com/dogs')
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

    handleAktivitetSällskapChange = () => {
        this.setState({
            aktivitet: {
                sällskap: !this.state.aktivitet.sällskap, 
            }  
        });
    }

    handleAktivitetSportkompisChange = () => {
        this.setState({
            aktivitet: {
                sportkompis: !this.state.aktivitet.sportkompis,
            }  
        });
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
    
    filterDogs = () => {
        this.setState({match: true})
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
        // const filterOnAktivitet = copyDogs.filter(dog => dog.aktivitet === this.state.aktivitet)
        // this.setState({data: filterOnAktivitet}); 
        const filterOnEnergi = copyDogs.filter(dog => dog.energi === this.state.energi)
        this.setState({data: filterOnEnergi}); 
        // const filterOnProblematik = copyDogs.filter(dog => dog.problematik === this.state.problematik)
        // this.setState({data: filterOnProblematik}); 
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

    return (
      <div className="wizardContainer" id="quiz">
        <WizardForm step={this.state.step} onChange={this.handleStep}>

          <Step title="Erfarenhet" description="Erfarenhet">
            <div>
                Vilket alternativ beskriver bäst din tidigare hunderfarenhet?
                <div className="inputContainer">
                    <input className="radio" type='radio' id='mycket' name='erfarenhet' value='mycket' checked={this.state.hunderfarenhet === 'mycket'} onChange={this.handleErfarenhetChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='mycket'>Jag har haft fullt ansvar för en hund tidigare</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='ganska' name='erfarenhet' value='ganska' checked={this.state.hunderfarenhet === 'ganska'} onChange={this.handleErfarenhetChange} />
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

          <Step title="Fysik" description="Fysik">
            <div>
                Vilket alternativ beskriver bäst din fysiska förmåga?
                <div className="inputContainer">
                    <input className="radio" type='radio' id='hög' name='fysik' value='hög' checked={this.state.fysik === 'hög'} onChange={this.handleFysikChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='hög'>Jag är stark och kan hålla emot även tyngre starka hundar om det behövs</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='mellan' name='fysik' value='mellan' checked={this.state.fysik === 'mellan'} onChange={this.handleFysikChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='mellan'>Jag skulle beskriva min fysiska förmåga som normal</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='låg' name='fysik' value='låg' checked={this.state.fysik === 'låg'} onChange={this.handleFysikChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='låg'>Jag har vissa fysiska begränsningar som gör att jag inte är lämplig som ägare till starkare hundar</label>
                </div>
            </div>
            </Step>

          <Step title="Allergi" description="Allergi">
            <div>
                Har du pälsallergi?
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
          

          <Step title="Barn" description="Barn">
            <div>
                Hur mycket kommer hunden träffa och umgås med barn?
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

          <Step title="Boende" description="Boende">
            <div>
                Hur bor du?
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='villa-stad' name='boende' value='villa-stad' checked={this.state.boende === 'villa-stad'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='villa-stad'>Villa/radhus i stadsmiljö</label>
                </div>
                <div className="inputContainer">  
                    <input className="radio" type='radio' id='villa-landet' name='boende' value='villa-landet' checked={this.state.boende === 'villa-landet'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='villa-landet'>Villa på landet</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='lgh-stad' name='boende' value='lgh-stad' checked={this.state.boende === 'lgh-stad'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='lgh-stad'>Lägenhet i stadsmiljö</label>
                </div>
                <div className="inputContainer">
                    <input className="radio" type='radio' id='lgh-landet' name='boende' value='lgh-landet' checked={this.state.boende === 'lgh-landet'} onChange={this.handleBoendeChange} />
                    <div className="check"></div>
                    <label className="radioLabel" htmlFor='lgh-landet'>Lägenhet på landet</label>
                </div>
            </div>
          </Step>
          
          <Step title="Hundpassning" description="Hundpassning">
            <div>
                Hur planerar du att få ihop vardagen med din hund?
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

          {/* <Step title="Aktiviteter" description="Aktiviteter">
            <div>
                Vilken typ av aktiviteter planerar du att göra med din hund?
                <div className="inputContainer">  
                    <input type="checkbox" onClick={this.onClick} value={!this.state.test}></input>
                </div>
                <div className="inputContainer">  
                    <input type='checkbox' id='sällskap' name='aktivitet' value='sällskap' checked={this.state.aktivitet === 'sällskap'} onChange={this.handleAktivitetChange} />
                    <input type="checkbox"
                        checked={this.state.aktivitet.sällskap}
                        onChange={this.handleAktivitetSällskapChange}
                    />
                    <label htmlFor='sällskap'>Hunden kommer primärt gå som sällskapshund och få stimulans via promenader, aktivitetsövningar och massa gos</label>
                </div>
                <div className="inputContainer">  
                    <input type='checkbox' id='jakt' name='aktivitet' value='jakt' checked={this.state.aktivitet === 'jakt'} onChange={this.handleAktivitetChange} />
                    <label htmlFor='jakt'>Hunden kommer användas till jakt</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='sportkompis' name='aktivitet' value='sportkompis' checked={this.state.aktivitet === 'sportkompis'} onChange={this.handleAktivitetChange} />
                    <input type="checkbox"
                        checked={this.state.aktivitet.sportkompis}
                        onChange={this.handleAktivitetSportkompisChange}
                    />
                    <label htmlFor='sportkompis'>Hunden kommer användas som sportkompis och följa med på diverse joggingturer och cykelturer</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='sök' name='aktivitet' value='sök' checked={this.state.aktivitet === 'sök'} onChange={this.handleAktivitetChange} />
                    <label htmlFor='sök'>Hunden kommer tränas inom sök</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='hundsport' name='aktivitet' value='hundsport' checked={this.state.aktivitet === 'hundsport'} onChange={this.handleAktivitetChange} />
                    <label htmlFor='hundsport'>Hunden kommer tränas och tävlas inom hundsporter så som agility, rallylydnad mm</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='vakt' name='aktivitet' value='vakt' checked={this.state.aktivitet === 'vakt'} onChange={this.handleAktivitetChange} />
                    <label htmlFor='vakt'>Hunden kommer användas som vakthund</label>
                </div>
            </div>
          </Step> */}

          <Step title="Energi" description="Energi">
            <div>
                Vilken beskrivning passar bäst in på energin i ditt hem?
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='fartfyllt' name='energi' value='fartfyllt' checked={this.state.energi === 'fartfyllt'} onChange={this.handleEnergiChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='fartfyllt'>I mitt hem är det full fart och fläkt. Mycket besökare och saker som händer hela tiden</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='lugnt' name='energi' value='lugnt' checked={this.state.energi === 'lugnt'} onChange={this.handleEnergiChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='lugnt'>I mitt hem är det lugnt, tryggt och sansat</label>
                    </div>
                </div>
            </div>
          </Step>

          {/* <Step title="Problematik" description="Problematik">
            <div>
                En del av hundarna vi hjälper att omplacera har med sig viss problematik från sitt förflutna som du som ny ägare kommer att behöva hantera. Vilka av nedanstående utmaningar känner du att du som ägare är villig och kompentent nog att arbeta med?  
                <div className="inputContainer">  
                    <input type='checkbox' id='hundaggressivitet' name='problematik' value='hundaggressivitet' checked={this.state.problematik === 'hundaggressivitet'} onChange={this.handleProblematikChange} />
                    <label htmlFor='hundaggressivitet'>Hundaggresivitet</label>
                </div>
                <div className="inputContainer">  
                    <input type='checkbox' id='hoppar' name='problematik' value='hoppar' checked={this.state.problematik === 'hoppar'} onChange={this.handleProblematikChange} />
                    <label htmlFor='hoppar'>Hoppar på folk när den hälsar</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='integritet' name='problematik' value='integritet' checked={this.state.problematik === 'integritet'} onChange={this.handleProblematikChange} />
                    <label htmlFor='integritet'>Hög intigritet</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='drar' name='problematik' value='drar' checked={this.state.problematik === 'drar'} onChange={this.handleProblematikChange} />
                    <label htmlFor='drar'>Drar i kopplet</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='ensam' name='problematik' value='ensam' checked={this.state.problematik === 'ensam'} onChange={this.handleProblematikChange} />
                    <label htmlFor='ensam'>Kan inte vara ensam hemma</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='skällig' name='problematik' value='skällig' checked={this.state.problematik === 'skällig'} onChange={this.handleProblematikChange} />
                    <label htmlFor='skällig'>Skällig</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='resursförsvar' name='problematik' value='resursförsvar' checked={this.state.problematik === 'resursförsvar'} onChange={this.handleProblematikChange} />
                    <label htmlFor='resursförsvar'>Resursförsvar</label>
                </div>
                <div className="inputContainer">
                    <input type='checkbox' id='sjukdom' name='problematik' value='sjukdom' checked={this.state.problematik === 'sjukdom'} onChange={this.handleProblematikChange} />
                    <label htmlFor='sjukdom'>Sjukdomstillstånd som kräver regelbunden veterinärvård</label>
                </div>
            </div>
          </Step> */}

          <Step title="Katt" description="Katt">
            <div>
                Finns det katt i hemmet?
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='ja' name='katt' value='ja' checked={this.state.katt === 'ja'} onChange={this.handleKattChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='ja'>Ja</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='nej' name='katt' value='nej' checked={this.state.katt === 'nej'} onChange={this.handleKattChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='nej'>Nej</label>
                    </div>
                </div>
            </div>
          </Step>

          <Step title="Hund" description="Hund">
            <div>
                Finns det hund i hemmet idag?
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='tikar' name='hund' value='tikar' checked={this.state.hund === 'tikar'} onChange={this.handleHundChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='tikar'>Ja, tik eller tikar</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='hanar' name='hund' value='hanar' checked={this.state.hund === 'hanar'} onChange={this.handleHundChange} />
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

          <Step title="Ledarskap" description="Ledarskap">
            <div>
                Vilket av följande alternativ beskriver bäst din person och syn på hunduppfostran?
                <div className="inputWrapper">
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='mjukt' name='ledarskap' value='mjukt' checked={this.state.ledarskap === 'mjukt'} onChange={this.handleLedarskapChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='mjukt'>Jag är väldigt mjuk och kärleksfull i mitt umgänge med hundar</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='tydligt' name='ledarskap' value='tydligt' checked={this.state.ledarskap === 'tydligt'} onChange={this.handleLedarskapChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='tydligt'>Jag är rak och tydlig men bestämd i min hunduppfostran</label>
                    </div>
                    <div className="inputContainer">
                        <input className="radio" type='radio' id='båda' name='ledarskap' value='båda' checked={this.state.ledarskap === 'båda'} onChange={this.handleLedarskapChange} />
                        <div className="check"></div>
                        <label className="radioLabel" htmlFor='båda'>Jag är både och</label>
                    </div>
                </div>
            </div>
          </Step>

          <Step title="Storlek" description="Storlek">
            <div>
                Vilken storlek på hund har du möjlighet att ta hand om? (möjligt att välja flera alternativ)
                <div className="inputWrapper">
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
          <h3>Grattis, du har blivit matchad!</h3>
          <p>Enligt våra algoritmer skulle du passa bäst med nedanstående hundar. Läs på om hunden du matchats med och kontakta deras nuvarande ägare om du seriöst är intresserad av att adoptera deras hund.</p>
          <button onClick={this.filterDogs}>Visa hundar</button>
          
          {this.state.match && 
            <>
            {this.state.data.map(dog =>
                    <DogBox
                    key={dog._id}
                        hundnamn={dog.hundnamn}
                        alder={dog.alder}
                        ras={dog.ras}
                        bild={dog.bild}
                        id={dog._id} />)}
            </>}
          </Step>

        </WizardForm>
      </div>
    );
    }
}

export default WizardParent;