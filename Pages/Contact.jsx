import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "./Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const mongoResponse = await axios.post('http://localhost:5000/submit', formData);
      console.log(mongoResponse.data.message);

   
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

    
    } catch (error) {
      console.error(error);
    
    }

   
    setFormData({ name: "", email: "", message: "", number: "" });
  };

  return (
    <section id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 data-aos="fade-down">Contact Me</h2>
        <h4>Feel Free To Contact Me Anytime!</h4>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <p><FaEnvelope />  sunilsinghsisodia994@gmail.com</p>
            <p><FaPhone />+91 85328 56775</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="number"
              placeholder="Your Number"
              required
              value={formData.number}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
