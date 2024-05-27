import React from 'react';
import '../../styles/cvs/Resume.css'; // Make sure to create a CSS file for styles
import profileimage from "../../assets/themes/theme2boy.png"
const Resume = () => {
  return (
    <div className="resume-themefour">
      <div className="header-themefour">
        <img src={profileimage} alt="Profile" className="profile-image-themefour" />
        <div style={{display: "flex"}}>
        <h1 className="name-themefour">John Doe</h1>
        <h2 className="occupation-themefour">Software Developer</h2>
        </div>
      </div>
      
      <div className="contact-info-themefour">
        <p><strong>Tel:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/johndoe">github.com/johndoe</a></p>
      </div>
      
      <div className="section-themefour">
        <h3 className="section-title-themefour">Education</h3>
        <ul>
          <li>
            <strong>Bachelor of Science in Computer Science</strong> - University of Example (2015-2019)
          </li>
          <li>
            <strong>Master of Science in Software Engineering</strong> - Example Institute of Technology (2020-2022)
          </li>
        </ul>
      </div>
      
      <div className="section-themefour">
        <h3 className="section-title-themefour">Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
      
      <div className="section-themefour">
        <h3 className="section-title-themefour">Languages</h3>
        <ul>
          <li>English (Native)</li>
          <li>Spanish (Fluent)</li>
          <li>French (Intermediate)</li>
        </ul>
      </div>
      
      <div className="section-themefour">
        <h3 className="section-title-themefour">About Me</h3>
        <p>
          Passionate software developer with over 5 years of experience in building web applications.
          Enjoys working on full-stack projects and learning new technologies.
        </p>
      </div>
      
      <div className="section-themefour">
        <h3 className="section-title-themefour">Work Experience</h3>
        <ul>
          <li>
            <strong>Software Developer</strong> - Tech Company (2019-Present)
            <p>Developed and maintained web applications using React and Node.js.</p>
          </li>
          <li>
            <strong>Junior Developer</strong> - Another Tech Company (2017-2019)
            <p>Assisted in the development of internal tools and client projects.</p>
          </li>
        </ul>
      </div>
      
      <div className="section-themefour">
        <h3 className="section-title-themefour">References</h3>
        <ul>
          <li>
            <strong>Jane Smith</strong> - Manager at Tech Company
            <p>Email: jane.smith@techcompany.com</p>
          </li>
          <li>
            <strong>Robert Brown</strong> - Professor at Example Institute of Technology
            <p>Email: robert.brown@example.edu</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
