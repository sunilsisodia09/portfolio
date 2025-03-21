import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sunil from "../assets/sunil.jpg"; 
import "./Aboutme.css";

const greetings = ["Hello!", "Namaste!", "Good Morning!", "Good Evening!", "Hey!"];

export default function PortfolioHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false }); 
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1amqV52FYMfaj2IcOpaVI6gS_lW-ZbT_P/view?usp=drive_link", "_blank");
  };

  return (
    <section id="home">
    <div>
    <div className="hero-container">
    
      <div className="animated-text" data-aos="fade-down">
        {greetings[index]}
       
      </div>
    
      <p className="about-text" data-aos="fade-up">
   <spam  className="sp">I am </spam> <spam  className="spam" >Sunil Sisodia</spam> <br></br>
        passionate Computer Science Engineering (CSE) student with a strong interest in Web Development, Software Engineering. I thrive on solving problems, and continuously learning new technologies. With hands on experience in Frontend, I have worked on projects involving Html, CSS, Javascript, React.js. I also have a foundation in Data Structures, Algorithms, Operating Systems.
        I love open-source contributions, collaborating on innovative projects, and exploring new advancements in technology. My goal is to create impactful solutions that enhance user experiences and drive technological growth.
      </p>
      <img src={sunil} alt="Your Name" className="hero-image" data-aos="zoom-in" />
    </div>
    <div className="resume-button-container">
        <button className="resume-button" onClick={handleResumeClick}>
          View Resume
        </button>
      </div>
    </div>
    </section>
  );
}
