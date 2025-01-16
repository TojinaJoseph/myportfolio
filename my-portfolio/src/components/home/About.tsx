
import './About.css'
import profile from "../../assets/images/pic.jpg"
import Typewritter from '../typewritter/Typewritter';

function About() {
  const handleDownload = () => {
    const isProduction = import.meta.env.MODE === 'production';
const fileUrl = isProduction 
  ? '/myportfolio/TojinaJoseph-Resume.pdf' 
  : 'TojinaJoseph-Resume.pdf';
    // Provide the path to the PDF file
    const link = document.createElement('a');
    link.href = fileUrl; // Path to the PDF file (e.g., public folder)
    link.download = 'Resume.pdf'; // Optional: Name for the downloaded file
    link.click();
  };

  return (
    <div className='about' id="about">
      <div className='container'>
        <div className="row ">
          <div className="about-main col-sm-12 col-lg-6 order-2 order-md-2 order-lg-1">
            <h1>Hi, I am <br />Tojina Joseph</h1>
            <div className='about-subhead'>
              <h2>I am a </h2><Typewritter text={'Front End Developer'} />
            </div>
            <p>I'm a highly motivated and versatile individual with a strong aptitude for problem-solving and a deep commitment to continuous development. I enjoy tackling complex challenges, analyzing data, and developing effective solutions. I'm a firm believer in lifelong learning and actively pursue opportunities to expand my knowledge and skillset.</p>
            <div className='download-btn'><a onClick={handleDownload}>Check Resume</a></div>
          </div>
          <div className="about-profile col-sm-12 col-lg-6 order-1 order-md-1 order-lg-2">
            <div className="profile-pic">
              <img src={profile} className="img-fluid" alt="Round Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
