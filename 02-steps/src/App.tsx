import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((stepEl) => stepEl - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((stepEl) => stepEl + 1);
      //setStep(step + 1);
    }
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpEl) => !isOpEl)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}> 1</div>
            <div className={step >= 2 ? "active" : ""}> 2</div>
            <div className={step >= 3 ? "active" : ""}> 3</div>
          </div>

          <p className="message">
            {" "}
            <h3> Step {step}: </h3> {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              text="Previous"
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            />

            <Button
              text="Next"
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    ></button>
  );
}
