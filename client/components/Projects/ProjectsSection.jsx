import React from "react";
import projects from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
