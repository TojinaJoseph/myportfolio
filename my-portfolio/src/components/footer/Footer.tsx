import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Footer.css'
import { Link } from 'react-scroll';

function Footer() {
  return (
   <div className='footer'>
      <div className='container'>
        <div className='row'>
           <div className='col-md-12'><h4>Tojina Joseph</h4></div>
           <div className='col-md-12'>
            <div className='socialIcons'>
              <ul>
                <li><a href="https://www.linkedin.com/in/tojina-joseph-71a07a153/" target="_blank"><LinkedInIcon/></a></li>
                <li><a href="https://github.com/TojinaJoseph" target="_blank"><GitHubIcon/></a></li>
                <li><a href='mailto:tojinajoseph123@gmail.com' target="_blank"><MailOutlineIcon/></a></li>
              </ul>
            </div>
           </div>
           <div className='col-md-12'>
              <nav className='container-xs'>
                <a><Link to="about">About</Link></a>
                <a><Link to="skills">Skills</Link></a>
                <a><Link to="experience">Experience</Link></a>
                <a><Link to="projects">Projects</Link></a>
                <a><Link to="education">Education</Link></a>
              </nav>
           </div>
           <div className='col-md-12'>
            <p className='copyright'>© 2025 Tojina Joseph. All rights reserved.</p>
           </div>
        </div>
      </div>
   </div>
  )
}

export default Footer
