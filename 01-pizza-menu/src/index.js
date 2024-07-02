import React from "react";
import ReactDOM from "react-dom/client";
//import pizzaData from "../public/data";

function App() {
  return (
    <div>
      <h1> Hello Midori</h1>
      <Header />
      <Menu />
      <Footer />
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

function Header() {
  return <h1> Fast React Pizza Co</h1>;
}

function Menu() {
  return (
    <div>
      <h2> Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We are currently OPEN!");
  //   else alert("Sorry we are CLOSED");

  return <footer> {new Date().toLocaleTimeString()}, We are OPEN</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
