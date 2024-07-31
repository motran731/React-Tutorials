import React from "react";

export default function App() {
  return (
    <div className="app">
      <h3> How much was the bill? </h3>
      <Bill />
      <h3> How did you like the service?</h3>
      <Percentage />

      <h3> How did yourr friend like the service?</h3>
      <Percentage />

      <Total />
      <Reset />
    </div>
  );
}

function Bill() {
  return (
    <div>
      <input type="number" />
    </div>
  );
}

function Percentage() {
  return (
    <div>
      <select className="percentage">
        <option value="it was good 10%"> it was good 10%</option>
        <option value="it was great 15%"> it was great 15%</option>
        <option value="it was amazing 20%"> it was amazing 20%</option>
      </select>
    </div>
  );
}

function Total() {
  return <h2> You pay $100 ($80 + $12tip)</h2>;
}

function Reset() {
  return <button> Reset</button>;
}
