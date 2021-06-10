import React from "react";
import './Wizard.css';

export const WizardForm = ({ step: currentIndex, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;
  const lastQuestion = currentIndex >= 13;
  const questionAnswered = ''
  
  console.log('props', props)
  console.log('currentIndex', currentIndex)

  return (
    <div className="stepContainer">
      <div>
        {!lastQuestion && <p className="stepQuestionNumber">Fråga {currentIndex + 1} av {steps.length - 1}</p>}
      </div>
      {steps[currentIndex]}
      {nextStep && <div className="wizardButtonWrapper">
        <Button
          visible={prevStep && !lastQuestion}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Tillbaka
        </Button>
        <Button
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Nästa
        </Button>
      </div>}
    </div>
  );
};

export const Step = ({ children }) => children;

function Button({ visible, ...props }) {
  return (
    <button className={visible ? "button" : "invisible"} {...props} />
  );
}
