import React from "react";
import "./About.css";
import photo from "../../assets/photo.jpg";
import BackgroundVideo from "../../assets/about-video.mp4";

const About = () => {
  return (
    <section id="about" className="about-section">
      <video autoPlay loop muted className="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <div className="about-container">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            My name is <strong>Bozhidar Nunev</strong>, and I'm a freshly
            graduated web developer with a passion for creating modern,
            responsive, and user-friendly applications. I completed my education
            at <strong>SoftUni Bulgaria</strong>, where I learned the
            fundamentals in programming and software development.
          </p>
          <p>
            Currently, I'm part of a training program at{" "}
            <strong>EPAM Systems</strong>, where we do real-world projects. My
            skills are in technologies like <strong>React</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>CSS</strong>.
          </p>
        </div>
        <div className="about-image">
          <img src={photo} alt="Bozhidar Nunev" />
        </div>
      </div>
    </section>
  );
};

export default About;
