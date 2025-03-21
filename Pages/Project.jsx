import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Project.css';

const projects = [
  {
    id: 1,
    title: "Photography",
    description: "Showcasing photography work and you can book your shoot from this site.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express", "Mongoose"],
    liveLink: "https://your-live-website.com",
  },
  {
    id: 2,
    title: "AI ORG 11",
    description: "Drug development project reducing time for drug discovery and helping save lives.",
    technologies: ["React", "CSS", "HTML", "Node.js", "Express", "Mongoose"],
    liveLink: "https://aiorg11.netlify.app/",
  },
  {
    id: 3, 
    title: "Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and achievements. Built with a modern and responsive design to enhance user experience.",
    technologies: ["React", "CSS", "HTML", "Node.js", "Express", "Mongoose"],
    liveLink: "#"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="projects">
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2 data-aos="fade-down">My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
             
              <h3 data-aos="fade-up" data-aos-delay="200">{project.title}</h3>
              <p data-aos="fade-up" data-aos-delay="400">{project.description}</p>

       
              {project.technologies && (
                <p data-aos="fade-up" data-aos-delay="600">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
              )}

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-btn"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
