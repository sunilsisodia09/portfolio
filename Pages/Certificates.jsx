import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./Certificates.css";
import sun9 from '../assets/sun9.jpg';
import sun8 from '../assets/sun8.jpg';
import sunil7 from '../assets/sunil7.jpg';

const certificates = [
  {
    id: 1,
    image: sun9,
    details: {
      course: "Wed Development",
      issuedBy: "Immensphere",
      recipient: "Sunil Singh Sisodia",
      period: "January 3, 2023 - April 30, 2023",
      certificateId: "3470497359",
      issueDate: "May 11, 2023",
      authorizedBy: "Vamshi Krishna P (CBQ)"
    }
  },
  {
    id: 2,
    image: sun8,
    details: {
      course: "Project Completion",
      issuedBy: "Immensphere",
      recipient: "Sunil Singh Sisodia",
      certificateId: "939242767",
      issueDate: "May 26, 2023",
      authorizedBy: "Vamshi Krishna P (CBQ)"
    }
  },
  {
    id: 3,
    image: sunil7,
    details: {
      event: "HACKATHON - 2k25",
      issuedBy: "IILM University",
      recipient: "Sunil Singh Sisodia",
      institution: "Shivalik College of Engineering",
      issueDate: "March 1, 2025",
      authorizedBy: "Faculty Coordinator, Head of ML & DS Dept., Dean SCSE"
    }
  }
];

const Certificates = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section id="certificates">
     <div className="certificates-container">
      <h2 data-aos="fade-up">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card" data-aos="zoom-in">
            <img
              src={cert.image}
              alt={cert.details.course || cert.details.event}
              className="certificate-image"
              onClick={() => setZoomedImage(cert.image)}
            />
            
         
            <div className="certificate-details" data-aos="fade-up">
              <p><strong>Issued By:</strong> {cert.details.issuedBy}</p>
              {cert.details.course && <p><strong>Course:</strong> {cert.details.course}</p>}
              {cert.details.event && <p><strong>Event:</strong> {cert.details.event}</p>}
              {cert.details.period && <p><strong>Completion Period:</strong> {cert.details.period}</p>}
              <p><strong>Issued Date:</strong> {cert.details.issueDate}</p>
              <p><strong>Authorized By:</strong> {cert.details.authorizedBy}</p>
            </div>
          </div>
        ))}
      </div>

    
      {zoomedImage && (
        <div className="zoom-modal" onClick={() => setZoomedImage(null)} data-aos="fade-in">
          <img src={zoomedImage} alt="Zoomed Certificate" className="zoomed-image" />
        </div>
      )}
    </div>
   </section>
  );
};

export default Certificates;
