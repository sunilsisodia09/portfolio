import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <div>
        <ul className="footer-links" data-aos="fade-up">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
          <li><a href="#skills">Skills</a></li>
        </ul>
        </div>
       

     

        <div className="social-icons" data-aos="fade-right">
          <a href="https://github.com/sunilsisodia09" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sunil-singh-sisodia-4a9850276/?trk=products_details_guest_profile_link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/sunilsisodia_/?next=%2F" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div data-aos="fade-up">
        <hr></hr>
        <br></br>
        <p>©2025 sunilsinghsisodia . All rights reserved.</p>
      </div>
    </footer>
  );
}
