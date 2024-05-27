import React from 'react';
import profileImage from "../../assets/themes/theme1girl.png";
import "../../styles/cvs/CV_theme_one.css"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';


function CV_theme_one() {
  return (
    <div className="cv-containers">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <p className="name">Theekshana Nemindi</p>
          <small className="position">Full Stack Developer</small>
          <div className="contact-info">
            <div className="contact-detail">
              <div>
                <span><FaPhone className="icon" id='icon'/></span>
                <p>tel: 0773318215</p>
              </div>
              <div>
                <span><FaEnvelope className="icon" id='icon'/></span>
                
                <p> email: theku@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
                <div>
                <span><FaMapMarkerAlt className="icon" id='icon' /></span>
                <p>address: no 2/4 forest lane, Passara Road,<br /> Badulla</p>
                </div>
                <div>
                <FaBriefcase  className="icon" id='icon' />
                <p>portfolio: <a href="www.vihanga.brandbuzz.lk">www.vihanga.brandbuzz.lk</a></p>
                </div>
                       
            </div>
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="section">
          <h1 className="section-title">Education</h1>
          <div className="education-details">
            <div className="detail">
              <p>Bachelor degree</p>
              <p>2022 - Present</p>
              <p>SLIIT</p>
            </div>
            <div className="detail">
              <p>Advanced level</p>
              <p>2019 - Present</p>
              <p>Badulla Central College</p>
            </div>
            <div className="detail">
              <p>Ordinary level</p>
              <p>2018</p>
              <p>Badulla Oxford College</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="section-title">Skills</h1>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>React</li>
            <li>Node</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className="section">
          <h1 className="section-title">Languages</h1>
          <ul className="languages">
            <li>Sinhala</li>
            <li>English</li>
            <li>Tamil</li>
          </ul>
        </div>
        <div className="section">
          <h1 className="section-title">About Me</h1>
          <p className="about-me">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure consequatur doloribus, vel, eum ullam similique aliquid tempora iste ut, error repudiandae architecto ex eius eaque magni deleniti veniam voluptates necessitatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ratione minima vero dolorum neque sed tempora facilis distinctio magnam suscipit vitae, ea tenetur quidem quaerat, nulla labore maxime atque deleniti.
          </p>
        </div>
        <div className="section">
          <h1 className="section-title">Work Experience</h1>
          <div className="work-experience-details">
            <div className="experience">
              <p>Main Developer</p>
              <small>Hi Tech Coop</small>
              <small>2016 - 2022</small>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit molestias eos. Natus quisquam quae earum. Facilis, deserunt eaque libero delectus dolore numquam. Ab hic, asperiores numquam facere odit dignissimos?</p>
            </div>
            <div className="experience">
              <p>Senior Developer</p>
              <small>Hi Tech Coop</small>
              <small>2016 - 2022</small>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit molestias eos. Natus quisquam quae earum. Facilis, deserunt eaque libero delectus dolore numquam. Ab hic, asperiores numquam facere odit dignissimos?</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="section-title">References</h1>
          <div className="references">
            <div className="reference">
              <p>Nimehs Liyanage</p>
              <small>Brandbuzz CEO</small>
              <p>tel: 0123456789</p>
              <p>email: abella123@gmail.com</p>
            </div>
            <div className="reference">
              <p>Chinthana Weligamage</p>
              <small>Brandbuzz CEO</small>
              <p>tel: 0123456789</p>
              <p>email: abella123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV_theme_one;
