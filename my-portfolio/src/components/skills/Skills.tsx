import React from "../../assets/react-svg.svg";
import Angular from "../../assets/angular.png";
import Html from "../../assets/html.png";
import Css from "../../assets/CSS.svg";
import Js from "../../assets/Js.png";
import Bootstrap from "../../assets/bootstrap.png";
import Node from "../../assets/nodejs.svg";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.svg";
import vs from "../../assets/vs.png";
import github from "../../assets/github.png";
import azure from "../../assets/azure.jpg";
import "./Skills.css"
function Skills() {
  

  return (
    <div className='skills' id="skills">
      <div className="container">
        <div className="row">
        <div><h1>Skills</h1></div>
     <div><h3>Here are some of my skills on which I have been working on for the past year.</h3></div>
     <div className="skills-content">
        <div className="frontend">
            <div className="front-content">
                <h4>Frontend</h4>
                <div className="front-main">
                    <div><img src={React}/>React Js</div>
                    <div><img src={Angular}/>Angular</div>
                    <div><img src={Html}/>Html</div>
                    <div><img src={Css}/>Css</div>
                    <div><img src={Js}/>Javascript</div>
                    <div><img src={Bootstrap}/>Bootstrap</div>
                </div>
                </div>
                
                </div>
        <div className="backend"><div className="back-content">
        <h4>Backend</h4>
                <div className="back-main">
                    <div><img src={Node}/>Node Js</div>
                    <div><img src={express}/>Express Js</div>
                    <div><img src={mongodb}/>MongoDB</div>
                </div></div></div>
        <div className="other"><div className="other-content">
        <h4>Other</h4>
                <div className="other-main">
                    <div><img src={github}/>GitHub</div>
                    <div><img src={vs}/>Vs Code</div>
                    <div><img src={azure}/>Azure</div>
                </div></div> </div>
     </div>
        </div>
      </div>
    
    </div>
  )
}

export default Skills
