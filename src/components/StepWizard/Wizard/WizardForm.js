import React from "react";
import './Wizard.css';

export const WizardForm = ({ step: currentIndex, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;
  console.log('prevStep', prevStep);
  console.log('nextStep', nextStep);
  console.log(currentIndex + 1);
  console.log('steps.length', steps.length)
  const lastQuestion = (currentIndex + 1) < (steps.length);

  return (
    <div>
      <div>
        {lastQuestion && <p>Fråga {currentIndex + 1} av {steps.length - 1}</p>}
      </div>
      {steps[currentIndex]}
      <div className="wizardButtonWrapper">
        <Button
          visible={prevStep}
          lastStep={!nextStep}
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
      </div>
    </div>
  );
};

export const Step = ({ children }) => children;

function getClsNavBtn(active) {
  return "btn btn-primary flex-fill" + (active ? " active" : "");
}
function Button({ visible, lastStep, ...props }) {
  return (
    <button className={visible ? "button" : "invisible"} {...props} />
  );
}
