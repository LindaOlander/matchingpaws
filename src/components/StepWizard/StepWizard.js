import React, { Fragment, useState, useEffect } from 'react';
import StepWizard from 'react-step-wizard';
import axios from 'axios';

import styles from './wizard.less';
import transitions from './transitions.less';
import './StepWizard.css';
import DogBox from '../DogBox/DogBox';

/* eslint react/prop-types: 0 */

const Wizard = () => {
    const [data, setData] = useState([{}]);
    
    const [state, updateState] = useState({
        form: {
            hunderfarenhet: '', 
            cat: '',
            aktiviteter: ''
        },
        transitions: {
            enterRight: `${transitions.animated} ${transitions.enterRight}`,
            enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
            exitRight: `${transitions.animated} ${transitions.exitRight}`,
            exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
            intro: `${transitions.animated} ${transitions.intro}`,
        },
        // demo: true, // uncomment to see more
    });

    const updateForm = (key, value) => {
        const { form } = state;

        form[key] = value;
        updateState({
            ...state,
            form,
        });
    };

    const onStepChange = (stats) => {
    };

    useEffect(() => {
        const fetchDogs = async () => {
          const result = await axios('https://test-matchingpaws.herokuapp.com/dogs');
          setData(result.data);
        };
     
        fetchDogs();
      }, []);

      console.log('state', state.form)
      console.log('data', data)


    return (
        <div className='wizardContainer'>
            <StepWizard
                onStepChange={onStepChange}
                isHashEnabled
                transitions={state.transitions} // comment out for default transitions
            >
                <First hashKey={'FirstStep'} update={updateForm} />
                <Second hashKey={'SecondStep'} update={updateForm} />
                <Third hashKey={'ThirdStep'} update={updateForm} />
                {/* <Progress /> */}
                <Last hashKey={'TheEnd!'} form={state.form}/>
            </StepWizard>
            {/* { (demo && SW) && <InstanceDemo SW={SW} /> } */}
        </div>
    );
};

export default Wizard;

/** Demo of using instance */
const InstanceDemo = ({ SW }) => (
    <Fragment>
        <h4>Control from outside component</h4>
        <button className={'btn btn-secondary'} onClick={SW.previousStep}>Previous Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={SW.nextStep}>Next Step</button>
    </Fragment>
);

const Stats = ({
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
    step,
}) => (
    <>
        <>
            <p>Fråga {currentStep} av {totalSteps}</p>
            {/* <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button> */}
        </>
        { step > 0 &&
            <button className='btn btn-default btn-block' onClick={previousStep}>Bakåt</button>
        }
        { step < totalSteps ?
            <button className='btn btn-primary btn-block' onClick={nextStep}>Fortsätt</button>
            :
            <button className='btn btn-success btn-block' onClick={nextStep}>Skicka in</button>
        }
    </>
);

/** Steps */

const First = props => {
    const update = (e) => {
        props.update(e.target.name, e.target.value);
    };

    return (
        <>
            <div className="wizardWrapper">
            <h5>Vilket alternativ beskriver bäst din tidigare hunderfarenhet?</h5>
              <div className="inputContainer">
                <input className="radio" type='radio' id='mycket' name='hunderfarenhet' value='mycket' onChange={update} />
                <div className="check"></div>
                <label htmlFor='mycket' className="radioLabel">Jag har erfarenhet från att hantera många olika typer av hundar och personlighet</label>
              </div>
              <div className="inputContainer">
                <input className="radio" type='radio' id='mycket' name='hunderfarenhet' value='mycket' onChange={update} />
                <div className="check"></div>
                <label htmlFor='mycket' className="radioLabel">Jag har haft fullt ansvar för en hund tidigare</label>
              </div>
              <div className="inputContainer">
                <input className="radio" type='radio' id='ganska' name='hunderfarenhet' value='ganska' onChange={update} />
                <div className="check"></div>
                <label htmlFor='ganska' className="radioLabel">Jag har inte haft hund själv, men har hjälpt vänner och familj med deras hundar</label>
              </div>
              <div className="inputContainer">
                <input className="radio" type='radio' id='lite' name='hunderfarenhet' value='lite' onChange={update} />
                <div className="check"></div>
                <label htmlFor='lite' className="radioLabel">Jag har ingen tidigare hunderfarenhet</label>
              </div>
            <Stats step={1} {...props} />
            </div>
        </>
    );
};

const Second = props => {
    const update = (e) => {
        props.update(e.target.name, e.target.value);
    };

    return (
        <>
          <div className="wizardWrapper">
            <h5>Finns det katt i hemmet?</h5>
            <div className="inputContainer">
              <input className="radio" type='radio' id='ja' name='cat' value='ja' onChange={update} />
              <div className="check"></div>
              <label htmlFor='ja' className="radioLabel">Ja</label>
            </div>
            <div className="inputContainer">
              <input className="radio" type='radio' id='nej' name='cat' value='nej' onChange={update} />
              <div className="check"></div>
              <label htmlFor='nej' className="radioLabel">Nej</label>
            </div>
            <Stats step={1} {...props} />
          </div>
        </>
    );
};

const Third = props => {
    const update = (e) => {
        props.update(e.target.name, e.target.value);
    };

    return (
        <>
          <div className="wizardWrapper">
            <h5>Vilken typ av aktiviteter planerar du att göra med din hund?</h5>
            <div className="inputContainerCheckbox">
              <input className="checkbox" type="checkbox" id="sällskap" value="sällskap" name="aktiviteter" onChange={update}/>
              <label htmlFor="sällskap">Hunden kommer primärt gå som sällskapshund och få stimulans via promenader, aktivitetsövningar och massa gos</label>
            </div>
            <div className="inputContainerCheckbox">
              <input className="checkbox" type="checkbox" id="jakt" value="jakt" name="aktiviteter" onChange={update}/>
              <label htmlFor="jakt">Hunden kommer användas till jakt</label>
            </div>
            <div className="inputContainerCheckbox">
              <input className="checkbox" type="checkbox" id="sportkompis" value="sportkompis" name="aktiviteter"  onChange={update}/>
              <label htmlFor="sportkompis">Hunden kommer användas som sportkompis och följa med på diverse joggingturer och cykelturer</label>
            </div>
            <div className="inputContainerCheckbox">
              <input className="checkbox" type="checkbox" id="sök" value="sök" name="aktiviteter"  onChange={update}/>
              <label htmlFor="sök">Hunden kommer tränas inom sök</label>
            </div>
            <div className="inputContainerCheckbox">
              <input className="checkbox" type="checkbox" id="hundsport" value="hundsport" name="aktiviteter"  onChange={update}/>
              <label htmlFor="hundsport">Hunden kommer tränas och tävlas inom hundsporter så som agility, rallylydnad m.m</label>
            </div>
            <div className="inputContainerCheckbox">
              <input className="checkbox" type="checkbox" id="vakt" value="vakt" name="aktiviteter"  onChange={update}/>
              <label htmlFor="vakt">Hunden kommer användas som vakthund</label>
            </div>
            <Stats step={1} {...props} />
          </div>
        </>
    );
};

// const Forth = props => {
//     const validate = () => {
//         if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
//             props.previousStep();
//         }
//     };

//     return (
//         <div>
//             { props.form.firstname && <h3>Hey {props.form.firstname}! 👋</h3> }
//             I've added validation to the previous button.
//             <Stats step={2} {...props} previousStep={validate} />
//         </div>
//     );
// };

const Progress = (props) => {
    const [state, updateState] = useState({
        isActiveClass: '',
        timeout: null,
    });

    useEffect(() => {
        const { timeout } = state;

        if (props.isActive && !timeout) {
            updateState({
                isActiveClass: styles.loaded,
                timeout: setTimeout(() => {
                    props.nextStep();
                }, 3000),
            });
        } else if (!props.isActive && timeout) {
            clearTimeout(timeout);
            updateState({
                isActiveClass: '',
                timeout: null,
            });
        }
    });

    return (
        <div className={styles['progress-wrapper']}>
            <p className='text-center'>Automated Progress...</p>
            <div className={`${styles.progress} ${state.isActiveClass}`}>
                <div className={`${styles['progress-bar']} progress-bar-striped`} />
            </div>
        </div>
    );
};

const Last = (props) => {
    const submit = () => {
        alert('You did it! Yay!') // eslint-disable-line
    };
    return (
        <>
            <div className="wizardWrapper">
                <h3>Resultat</h3>
                <p>{props.form.hunderfarenhet}</p>
                <p>{props.form.cat}</p>
                <p>{props.form.aktiviteter}</p>
                <Stats step={4} {...props} nextStep={submit} />
            </div>
        </>
    );
};