import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="video-container">
        {project.video.includes("youtube") ||
        project.video.includes("vimeo") ? (
          <iframe
            src={project.video}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video controls>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
