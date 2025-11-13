import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Game1 from "./homework/4inLine/Game1";
import Game2 from "./homework/XO/Game2";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} /> */}

          <Route path="/4inLine" element={<Game1/>} />
          <Route path="/XO" element={<Game2/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
