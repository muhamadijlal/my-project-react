import { useState } from "react";
import Button from "./components/Button";
import Caption from "./components/Caption";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const nextStep = () => {
    if (step === 3) return;
    setStep((s) => s + 1);
  };

  const previousStep = () => {
    if (step === 1) return;
    setStep((s) => s - 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <Caption messages={messages} step={step} />

          <div className="buttons">
            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              handleClick={previousStep}
            >
              <span>👈</span> Previous
            </Button>

            <Button
              bgColor={"#7950f2"}
              textColor={"#fff"}
              handleClick={nextStep}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
