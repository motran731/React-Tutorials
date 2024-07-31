import React, { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState();
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />

      <Percentage percent1={percent1} setPercent1={setPercent1}>
        {" "}
        How did you like the service?
      </Percentage>

      <Percentage percent2={percent2} setPercent2={setPercent2}>
        How did your friend like the service?
      </Percentage>

      <Output bill={bill} />
      <Reset />
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
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function Percentage({ children }) {
  return (
    <div>
      <label> {children} </label>
      <select className="percentage" value="" onChange="">
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was okay (10%)</option>
        <option value="10"> It was good (15%)</option>
        <option value="20"> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill }) {
  return <h2> Your pay $X (${bill}+ $tip2)</h2>;
}

function Reset() {
  return <button> Reset</button>;
}
