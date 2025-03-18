import "./App.css";
import React from "react";
import DefaultPage from "../components/DefaultPage/DefaultPage";
import Separator from "../components/Separator/Separator";
import About from "../components/About/About";
import ProjectsSection from "../components/Projects/ProjectsSection";

export default function App() {
  return (
    <div className="App">
      <DefaultPage />
      <Separator />
      <About />
      <ProjectsSection />
    </div>
  );
}
