import "./App.css";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import DefaultPage from "../components/DefaultPage/DefaultPage";
import Separator from "../components/Separator/Separator";
import About from "../components/About/About";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <DefaultPage />
      <Separator />
      <About />
    </div>
  );
}
