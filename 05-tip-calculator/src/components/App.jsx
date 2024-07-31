import React, { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const tip = bill * ((percent1 + percent2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />

      <Percentage percentage={percent1} setPercent={setPercent1}>
        {" "}
        How did you like the service?
      </Percentage>

      <Percentage percentage={percent2} setPercent={setPercent2}>
        How did your friend like the service?
      </Percentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Percentage({ children, percent, setPercent }) {
  return (
    <div>
      <label> {children} </label>
      <select
        className="percentage"
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
      >
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was okay (10%)</option>
        <option value="10"> It was good (15%)</option>
        <option value="20"> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h2>
      {" "}
      Your pay ${bill + tip} (${bill}+ ${tip})
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}> Reset</button>;
}
