import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />

      <div id="vertical">
        <Note title={"jskjsfkg"} text={"jern v"} />
        <Note title={"ehoir"} text={492} />
        <Note title={"werfs"} text={"eirbner"} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
