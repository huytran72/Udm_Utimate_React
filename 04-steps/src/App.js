import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div className="App">
      <h1>Steps</h1>
      <Steps />
    </div>
  );
}

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    // const [test, setTest] = useState({ name: "Kenny Tran" });

    function handlePrevious() {
      if (step > 1) setStep((s) => s - 1);
    }

    function handleNext() {
      if (step < 3) {
        setStep((s) => s + 1);
        // setStep((s) => s + 1);
      }
    }

    return (
      <>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &time;
        </button>

        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <p className="message">
              Step {step}: {messages[step - 1]}
              {/* {test.name} */}
            </p>

            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={() => alert("Previous step")}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={() => alert("Next step")}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
