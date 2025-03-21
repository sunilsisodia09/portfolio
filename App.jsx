import Navbar from './Componenets/Navbar'
import Footer from './Componenets/Footer'
import Aboutme from './Pages/Aboutme'
import Education from './Pages/Education'
import Project from './Pages/Project'
import Skills from './Pages/Skills'
// import Exper from './Pages/Exper.jsx'
import Contact from './Pages/Contact'
import ParticleCursorBackground from './Pages/ParticleCursorBackground'
import Certificates from './Pages/Certificates'
import './App.css'

function App() {
  

  return (
    <>
     
      <ParticleCursorBackground/>
      <Navbar/>
      <Aboutme/>
      {/* <Exper/> */}
      <Skills/>
      <Project/>
      <Certificates/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
