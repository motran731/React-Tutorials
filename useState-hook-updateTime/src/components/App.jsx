import React, { useState } from "react";

function App() {
  //let time = new Date().toLocaleTimeString();

  const now = new Date().toLocaleTimeString();

  function updateTime() {
    //const newTime = new Date().toLocaleTimeString();
    console.log("click");
  }

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
