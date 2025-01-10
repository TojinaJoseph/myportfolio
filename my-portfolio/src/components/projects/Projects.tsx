import "./Projects.css";
import portfolio from "../../assets/portfolio.png"
import { useState } from "react";
import ProjectModal from "../projectModal/ProjectModal";
import { TruncatedText } from "../truncText/TruncText";

function Projects() {
  const [open,setOpen]=useState(false);
  const projects=[
    {index:0,
      tools:['React Js','Bootstrap','Html','Css'],
      name:'My Portfolio',
      description:'My Portfolio is a React.js application that serves as an online portfolio to showcase my work, skills, and achievements. It provides an overview of my background, displays my projects, and offers a way to contact me.',
      img:portfolio
    },
    
  ]
    return (
      <div className='projects' id="projects">
       <div className="container">
        <div className="row">
          <div className="sectionHeader">
          <h1>Projects</h1>
          <h3>I have worked on a wide range of projects. Adding here some of my good projects.</h3>
          </div>
          <div className="col-12">
            <div className="row d-flex justify-content-center">
              {projects.map((i,index)=>(
                 <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                 <div className="projectWrapper" onClick={()=>setOpen(true)}>
                    <img src={portfolio}/>
                    <div className="tools">
                      {i.tools.map((i,index)=>(
                        <div key={index}>{i}</div>
                      ))}
                    </div>
                    <div className="description">
                      <h6>{i.name}</h6>
                      <TruncatedText text={i.description} maxLength={100}/>
                    </div>
                 </div>
                 {open && (
                  <ProjectModal open={open} onClick={()=>setOpen(false)} data={i}/>
                 )}
                </div>  
              ))}            
            </div>
          </div>
        </div>
       </div>
       
      </div>
    )
  }
  
  export default Projects
  