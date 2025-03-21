import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Skill.css';

const skills = [
  
    { id: 1, name: "HTML", icon: "🌐" },
    { id: 2, name: "CSS", icon: "🎨" },
    { id: 3, name: "JavaScript", icon: "⚡" },
    { id: 4, name: "React", icon: "⚛️" },
    { id: 5, name: "Node.js", icon: "🟢" }
    
];

const skill = [
  { id: 1, icon: "💻", name: "Data Structures" },
  { id: 3, icon: "⚡", name: "Operating Systems" },
  { id: 4, icon: "🌐", name: "Computer Networks" },
  { id: 5, icon: "🛢️", name: "Databases" },
  { id: 7, icon: "🖥️", name: "Software Engineering" },
];

const tools = [
  { id: 1, icon: "🐙", name: "Git" },
  { id: 2, icon: "💻", name: "GitHub" },
  { id: 3, icon: "🚀", name: "Netlify" },
  { id: 4, icon: "📮", name: "Postman" },
  { id: 5, icon: "📝", name: "VS Code" },
];

const FrontendSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="skills">
      <div>
        <h2 className="h2" data-aos="fade-down">Skills</h2>
        <p data-aos="fade-up">
          "As a Computer Science Engineering (CSE) student, I have developed a strong technical foundation in Web Development, Software Engineering, and AI/ML. I enjoy crafting scalable applications, optimizing performance, and exploring innovative solutions in technology."
        </p>

        <div className="skills-container" data-aos="fade-right">
          <h2>Frontend Skills</h2>
          <div className="skills-box">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card" data-aos="flip-left">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-container" data-aos="fade-left">
          <h2>CS Fundamentals</h2>
          <div className="skills-box">
            {skill.map((skill) => (
              <div key={skill.id} className="skill-card" data-aos="flip-right">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-container" data-aos="fade-up">
          <h2>Others</h2>
          <div className="skills-box">
            {tools.map((skill) => (
              <div key={skill.id} className="skill-card" data-aos="zoom-in">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FrontendSkills;
