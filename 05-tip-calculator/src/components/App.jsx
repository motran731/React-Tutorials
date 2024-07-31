import React, { useState } from "react";

export default function App() {
  const [bill, setBill] = useState();

  // function handleBill(num) {
  //   setBill(bill);
  // }
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <Bill />

      <Percentage> How did you like the service?</Percentage>

      <Percentage>How did your friend like the service?</Percentage>

      <Output />
      <Reset />
    </div>
  );
}
function Bill() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        // onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function Percentage({ children }) {
  return (
    <div>
      <label> {children} </label>
      <select className="percentage">
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was okay (10%)</option>
        <option value="10%"> It was good (15%)</option>
        <option value="20%"> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return <h2> You pay $X ($tip1+ $tip2)</h2>;
}

function Reset() {
  return <button> Reset</button>;
}
