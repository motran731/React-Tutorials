import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import pizzaData from "../public/data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2> Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <h3> Pizza Spinaci</h3>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
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

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}, We are OPEN
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
