import React, {useRef} from 'react';
import '../Form/Form.css';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const FormGiveAway = () => {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div className="formGiveAwayContainer siteWrapper">
      <form>
        <div class="questionCategoryGiveAway">
          <div className="option-containerGiveAway">
            <label for="tik"><b>Vad heter din hund?</b></label>
            <textarea className="textareaGiveAway-small" />
          </div>
        </div>
        <div class="questionCategoryGiveAway">
          <div className="option-containerRadios">
            <label for="tik">Tik</label>
            <input type="radio" id="tik" name="dog" value="tik" className="option-inputGiveAway"/>
          </div>
          <div className="option-containerRadios">
            <label for="hane">Hane</label>
            <input type="radio" id="hane" name="dog" value="hane" className="option-inputGiveAway"/>
          </div>
        </div>
        <div class="questionCategoryGiveAway">
          <div className="option-container">
            <label for="katt">Kan bo med katt</label>
            <input type="checkbox" id="katt" name="cat" value="katt" className="option-input checkbox"/>
          </div>
          <div className="option-container">
            <label for="barn">Kan bo med barn</label>
            <input type="checkbox" id="barn" name="barn" value="barn" className="option-input checkbox"/>
          </div>
          <div className="option-container">
            <label for="dogs">Har bott med andra hundar</label>
            <input type="checkbox" id="dogs" name="dogs" value="dogs" className="option-input checkbox"/>
          </div>
          <div className="option-container">
            <label for="garden">Har bott i hus med trädgård</label>
            <input type="checkbox" id="garden" name="garden" value="garden" className="option-input checkbox"/>
          </div>
        </div>
        <div class="questionCategoryGiveAway">
          <div className="option-containerGiveAway">
            <label for="tik"><b>Berätta om din hund</b></label>
            <textarea className="textareaGiveAway"/>
          </div>
        </div>
        <div class="questionCategoryGiveAway">
          <div className="option-containerGiveAway">
            <label for="tik"><b>Varför kan du inte ha den kvar?</b></label>
            <textarea className="textareaGiveAway"/>
          </div>
        </div>
        <div className="questionCategoryGiveAway">
          <button className="button" onClick={executeScroll}>Skicka in min älskling</button>
        </div>
        
      </form>
    </div>
  )
};

export default FormGiveAway;