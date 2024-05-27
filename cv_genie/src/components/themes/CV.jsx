import React from 'react';
import '../../styles/cvs/CV.css'; // Import CSS file for styling
import { BsEnvelope, BsPhone, BsGeoAlt, BsBook, BsBriefcase, BsCodeSlash } from 'react-icons/bs';

import profilePic from '../../assets/genieImage.png'; // Import profile picture

const CV = () => {
    return (
      <div className="cv">
        <div className="header">
          <div className="profile">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="details">
            <h1>John Doe</h1>
            <p>Frontend Developer</p>
            <ul className="contact">
              <li><BsEnvelope /> john.doe@example.com</li>
              <li><BsPhone /> +1 123 456 7890</li>
              <li><BsGeoAlt /> New York, USA</li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <h2><BsCodeSlash /> Skills</h2>
            <ul className="skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
          <div className="section">
            <h2><BsBriefcase /> Experience</h2>
            <div className="job">
              <h3>Senior Frontend Developer</h3>
              <p>Company XYZ - 2020-present</p>
              <ul>
                <li>Developed user-friendly web interfaces using React.js</li>
                <li>Collaborated with design team to implement UI/UX improvements</li>
                <li>Optimized website performance for better user experience</li>
              </ul>
            </div>
            <div className="job">
              <h3>Frontend Developer</h3>
              <p>Company ABC - 2018-2020</p>
              <ul>
                <li>Designed and implemented responsive web layouts</li>
                <li>Worked closely with backend team to integrate APIs</li>
                <li>Participated in code reviews and provided feedback</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <h2><BsBook /> Education</h2>
            <div className="education">
              <h3>Bachelor of Science in Computer Science</h3>
              <p>University XYZ - 2014-2018</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CV;
