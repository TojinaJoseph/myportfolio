import { useState } from "react"
import menuBar from "../../assets/menu-svg.svg"
import './Navbar.css'
import { Link } from "react-scroll"

function Navbar() {
  const [showDiv, setShowDiv] = useState(false)
  const toggleMenu = () => {
    setShowDiv(!showDiv);
  }
  const closeMenu = () => {
    setShowDiv(false);
  };
  return (
    <div className='nav-main'>
      <div className='navbar-wrapper'>
        <a className='nav-brand'>Tojina Joseph</a>
        <ul className='nav-list'>
          <li><Link to="about">About</Link></li>
          <li><Link to="skills">Skills</Link></li>
          <li><Link to="experience">Experience</Link></li>
          <li><Link to="projects">Projects</Link></li>
          <li><Link to="education">Education</Link></li>
        </ul>
        {showDiv && (
          <ul className='nav-list-mobile'>
            <li><Link to="about" onClick={closeMenu}>About</Link></li>
            <li><Link to="skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link to="experience" onClick={closeMenu}>Experience</Link></li>
            <li><Link to="projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="education" onClick={closeMenu}>Education</Link></li>
            <li> <div className='nav-btn'><a className='nav-git'>Github Profile</a></div></li>
          </ul>
        )}

        <div className='nav-btn'><a className='nav-git' href="https://github.com/TojinaJoseph" target="_blank">Github Profile</a></div>
        <div className='nav-btn-mobile'><a className='nav-menu' onClick={() => toggleMenu()}><img src={menuBar} /></a></div>
      </div>
    </div>
  )
}

export default Navbar
