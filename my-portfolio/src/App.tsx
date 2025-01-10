
import './App.css'
import Contact from './components/contact/Contact'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import About from './components/home/About'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
function App() {
  return (
    <>
     <Navbar/>
     <About/>
     <Skills/>
     <Experience/>
     <Projects/>
     <Education/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
