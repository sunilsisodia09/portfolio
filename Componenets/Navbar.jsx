import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({ backgroundColor: "rgba(10, 25, 47, 0.9)", backdropFilter: "blur(10px)" });
      } else {
        controls.start({ backgroundColor: "transparent" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.nav className="navbar" animate={controls}>
    

    
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {["Home", "Skills", "Projects", "Contact", "Education", "Certificates"].map((item, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.1 }}
          >
            <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>
          </motion.li>
        ))}
      </ul>

      <motion.div 
        className="menu-icon" 
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </motion.div>
    </motion.nav>
  );
}
