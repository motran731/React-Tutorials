import React, { useState } from "react";

function App() {
  //let time = new Date().toLocaleTimeString();

  const now = new Date().toLocaleTimeString("en-US", { hour12: false });

  const [time, setTIme] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTimeout(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
