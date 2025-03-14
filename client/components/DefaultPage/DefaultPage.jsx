import React from "react";
import "./DefaultPage.css";
import Navbar from "../Navbar/Navbar";

const DefaultPage = () => {
  return (
    <section id="defaultPage" className="defaultPage-section">
      <Navbar />
      <div className="defaultPage-content">
        <h1>Welcome to my Portfolio</h1>
        <p>I hope you like it!</p>
      </div>
    </section>
  );
};

export default DefaultPage;
