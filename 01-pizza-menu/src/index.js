import React from "react";
import ReactDOM from "react-dom/client";
//import pizzaData from "../public/data";

function App() {
  return (
    <div>
      <h1> Hello Midori</h1>
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h2> Pizza Spinaci</h2>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
