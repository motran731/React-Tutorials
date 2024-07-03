import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";
// /Users/midori/Documents/React-Tutorials/01-pizza-menu/public/data.js

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
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2> Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p> We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  if (props.pizzaObj.soldOut) return null;

  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <li>
        <h3> {props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </li>
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

  // if (!isOpen)
  //   return (
  //     <p>
  //       CLOSED
  //     </p>
  //   );

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}, We are OPEN */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          {" "}
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        {" "}
        We're open until {props.closeHour}:00. Come visit us or order online.{" "}
      </p>
      <button className="btn"> Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
