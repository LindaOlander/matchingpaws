import React, {useRef} from 'react';
import '../Form/Form.css';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Form = () => {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div className="formContainer SiteWrapper">
      <form>
        <div className="questionWrapper yellow">
          <h3>Vilket alternativ beskriver bäst din tidigare hunderfarenhet?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="radio" id="liten" name="size" value="liten" className="option-input radio"/>
              <label for="liten">Jag har erfarenhet från många olika typer av hundar</label>
            </div>
            <div className="option-container">
              <input type="radio" id="mellan" name="size" value="mellan" className="option-input radio"/>
              <label for="mellan">Jag har haft hund tidigare</label>
            </div>
            <div className="option-container">
              <input type="radio" id="stor" name="size" value="stor" className="option-input radio"/>
              <label for="stor">Jag hade hund som barn</label>
            </div>
            <div className="option-container">
              <input type="radio" id="stor" name="size" value="stor" className="option-input radio"/>
              <label for="stor">Jag har inte haft hund själv men har hjälpt vänner och familj med deras hundar</label>
            </div>
            <div className="option-container">
              <input type="radio" id="stor" name="size" value="stor" className="option-input radio"/>
              <label for="stor">Jag har ingen tidigare hunderfarenhet</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Vilket alternativ beskriver bäst din fysiska förmåga?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="radio" id="liten" name="size" value="liten" className="option-input radio"/>
              <label for="liten">Jag är stark och kan hålla emot även tyngre starka hundar om det behövs.</label>
            </div>
            <div className="option-container">
              <input type="radio" id="mellan" name="size" value="mellan" className="option-input radio"/>
              <label for="mellan">Jag skulle beskriva min fysiska förmåga som normal </label>
            </div>
            <div className="option-container">
              <input type="radio" id="stor" name="size" value="stor" className="option-input radio"/>
              <label for="stor">Jag har vissa fysiska begränsningar som gör att jag inte är lämplig som ägare till starkare hundar.</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Finns det pälsallergi?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="radio" id="katt" name="cat" value="katt" className="option-input radio"/>
              <label for="katt">Är okej med att bo med en hund som fäller päls</label>
            </div>
            <div className="option-container">
              <input type="radio" id="ejkatt" name="cat" value="ejkatt" className="option-input radio"/>
              <label for="ejkatt">Kan inte bo med en hund som fäller päls</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Vissa av hundarna som omplaceras via oss älskar barn och vissa kan tycka att barn är lite läskiga. Hur mycket skulle en hund som flyttar in hos dig få träffa barn?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="radio" id="barn" name="barn" value="barn" className="option-input radio"/>
              <label for="barn">Vardagligen i hemmet</label>
            </div>
            <div className="option-container">
              <input type="radio" id="barn" name="barn" value="barn" className="option-input radio"/>
              <label for="barn">Då och då när besökare kommer över</label>
            </div>
            <div className="option-container">
              <input type="radio" id="barn" name="barn" value="barn" className="option-input radio"/>
              <label for="barn">Ytterst sällan eller aldrig</label>
            </div>
            <div className="option-container">
              <input type="radio" id="ejbarn" name="barn" value="ejbarn" className="option-input radio"/>
              <label for="ejbarn">Till en början inte alls men i framtiden vill jag ha barn som jag önskar att min hund kan leva med</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Hur bor du idag?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="checkbox" id="0" name="age" value="0" className="option-input checkbox"/>
              <label for="0">I lägenhet i stadsmiljö</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">I villa/radhus på landet</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">I lägenhet på landet</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Villa/radhus i stadsmiljö</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Hur planerar du att få ihop vardagen med din hund?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="checkbox" id="0" name="age" value="0" className="option-input checkbox"/>
              <label for="0">Hunden kommer gå på hunddagis/ha hundvakt</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Hunden kommer följa med till arbetet</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Hunden kommer få vara ensam hemma ett flertal timmar om dagen</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Jag har ingen plan än</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Vilken typ av aktiviteter planerar du att göra med din hund?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="checkbox" id="0" name="age" value="0" className="option-input checkbox"/>
              <label for="0">Hunden kommer primärt gå som sällskaps hund och få stimulans via promenader, aktivitetsövningar och massa gos</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Hunden kommer användas till jakt</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Hunden kommer användas som sportkompis och följa med på diverse joggingturer och cykelturer</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Hunden kommer tränas inom sök</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Hunden kommer tränas och tävlas inom hundsporter så som agility,rallylydnad m.m</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Hunden kommer användas som vakthund</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Vilket alternativ beskriver bäst din familjesituation?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="checkbox" id="0" name="age" value="0" className="option-input checkbox"/>
              <label for="0">Det är bara jag i familjen</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Familjen består av två vuxna människor</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Vår familj är på tre personer</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="6" name="age" value="6" className="option-input checkbox" />
              <label for="6">Vi är en stor familj på 4 eller mer personer</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Vilken beskrivning passar bäst in  på energin i ditt hem?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="checkbox" id="0" name="age" value="0" className="option-input checkbox"/>
              <label for="0">I mitt hem är det full fart och fläkt. Mycket besökare och saker som händer hela tiden</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">I mitt hem är det lugnt, tryggt och sansat</label>
            </div>
          </div>
        </div>
        <div className="questionWrapper yellow">
          <h3>Ingen är perfekt. En del av hundarna som vi hjälper att omplacera har med sig viss problematik från sitt förflutna som du som ny ägare kommer att behöva hantera. Vilka av nedanstående utmaningar känner du att du som ägare är villig och kompentent nog att arbeta med?</h3>
          <div class="questionCategory">
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Hundaggresivitet</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Hög intigritet</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Drar i kopplet</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Kan inte vara ensam hemma</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Skällig</label>
            </div>
            <div className="option-container">
              <input type="checkbox" id="4" name="age" value="3" className="option-input checkbox"/>
              <label for="4">Resursförsvars</label>
            </div>
          </div>
        </div>
        <div className="questionCategory">
          <button className="button" onClick={executeScroll}>Hitta min match</button>
        </div>     
      </form>
    </div>
  )
};

export default Form;