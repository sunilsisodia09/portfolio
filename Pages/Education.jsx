import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Education.css";
import shivalik from '../assets/shivalik.jpg'
import baluni from '../assets/baluni.jpg'

const educationData = [
  { degree: "B.Tech in Computer Science", institution: "Shivalik College Of Engineering , Dedradun, Uttarakhand, India.", year: "2022 - 2026", image: shivalik },
  { degree: "Higher Secondary (12th)", institution: "Baluni Public School, Agra,Uttar Pradesh,India.", year: "2019 - 2021", image:baluni },
  { degree: "Secondary (10th)", institution: "Baluni Public School, Agra,Uttar Pradesh,India.", year: "2018 - 2019", image:baluni },
];

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
   <section id="education">
     <section className="education-section">
      <h2 data-aos="fade-down">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card" data-aos="flip-left">
            <img src={edu.image} alt={edu.degree} className="edu-image" />
            <div className="edu-details">
              <h3 data-aos="fade-up">{edu.degree}</h3>
              <p data-aos="fade-up">{edu.institution}</p>
              <span data-aos="fade-up">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
   </section>
  );
}
