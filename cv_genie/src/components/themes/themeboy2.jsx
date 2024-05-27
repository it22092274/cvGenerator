import React from 'react';
import '../../styles/cvs/CV_theme_two.css'; // Import CSS file for styling
import profileImage from "../../assets/themes/theme2boy.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';


function CV_theme_three() {
  return (
    <div className="cv-container">
      <div className="header">
        <div className="profile">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="details">
          <h1>Jane Doe</h1>
          <p>Full Stack Developer</p>
          <div className="contact">
            <div>
              <FaPhone className="icon" /> <span>+1 234 567 890</span>
            </div>
            <div>
              <FaEnvelope className="icon" /> <span>jane.doe@example.com</span>
            </div>
            <div>
              <FaMapMarkerAlt className="icon" /> <span>New York, USA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="section">
          <h2><FaGraduationCap className="icon" /> Education</h2>
          <div className="education">
            <div>
              <p>Bachelor's Degree in Computer Science</p>
              <p>2015 - 2019</p>
              <p>New York University</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2><FaCode className="icon" /> Skills</h2>
          <div className="skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
          </div>
        </div>
        <div className="section">
          <h2><FaBriefcase className="icon" /> Work Experience</h2>
          <div className="work-experience">
            <div>
              <h3>Senior Frontend Developer</h3>
              <p>ABC Company</p>
              <p>2019 - Present</p>
              <p>Lead a team of developers in designing and implementing user-friendly web interfaces.</p>
            </div>
            <div>
              <h3>Web Developer</h3>
              <p>XYZ Agency</p>
              <p>2017 - 2019</p>
              <p>Developed responsive websites for various clients using modern web technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV_theme_three;
