import { Timeline } from "../timeline/Timeline";
import "./Education.css";
import clgLogo from "../../assets/clglogo.jpg"

function Education() {
  const educations = [
    {
      index: 0,
      college: "College of Engineering Aranmula",
      course: "BTech in computer science",
      date: "June 2014 to May 2018",
      description: "I have completed 4 years and have a CGPA of 6.8 . I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
      grade: "6.8 CGPA",
      img:clgLogo
    },
  ]

  return (
    <div className='education' id="education">
      <div className="container">
        <div className="row">
          <div className="sectionHeader">
            <h1>Education</h1>
            <h3>My education has been a journey of self-discovery and growth. My educational details are as follows.</h3>
          </div>
          <div className="col-12">
            <Timeline data={educations}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
