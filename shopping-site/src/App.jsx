import React, { useState } from "react";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import "./App.css";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
