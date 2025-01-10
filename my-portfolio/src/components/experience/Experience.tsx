import reflLogo from "../../assets/ReflectionsLogo.svg"
import { Timeline } from "../timeline/Timeline"
import './Experience.css'
function Experience() {
  const experiences = [
    {
      index: 0,
      designation: "Software Engineer",
      company: "Reflections Info Systems",
      date: "July-2022 to present",
      description: "Redesign the entire web product initially launched in 2009. The primary goal is to modernize the user interface and underlying technologies to enhance the product's market competitiveness, beginning with the real estate segment.Our key focus would be on making the product portal very mobile friendly. The User Interface (UI) would as well be enhanced to adapt to various screen sizes and features such as two-factor authentication (2FA) for heightened security would be incorporated.",
      skills: "ReactJS • Redux • HTML • CSS • JavaScript • API Integration • Bootstrap",
      img:reflLogo
    }
  ]

  return (
    <div className='experience' id="experience">
      <div className='container'>
        <div className='row'>
          <div className="sectionHeader">
            <h1>Experience</h1>
            <h3>My work experience as a software engineer and working on different projects.</h3>
          </div>
          <div className="col-md-12">
            <Timeline data={experiences}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
