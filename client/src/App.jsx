import "./App.css";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/DefaultPage/DefaultPage";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
    </div>
  );
}
