import React from 'react';
import { FaGraduationCap, FaPhone } from 'react-icons/fa';
import "../../styles/cvs/Theme1.css";


function Theme1({
  name,
  occupation,
  email,
  phone,
  address,
  profileImage,
  education,
  skills,
  experience,
  references,
  profile
}) {
  return (
    <div className='main-container'>
      <div className="leftpane">
        <img src={profileImage} alt="profileimage" />
        <div className="metadatasecti">
          <div className="contactsec">
            <h1>
              <FaPhone className='theme1-icon' id='theme1-icon1' />
              <span className='heading'>Contact</span>
            </h1>
            <p className='contactdetails'>{email}</p>
            <p className='contactdetails'>{phone}</p>
            <p className='contactdetails'>{address}</p>
          </div>
          <div className="Educationsec">
            <h1>
              <FaGraduationCap className='theme1-icon' id='theme1-icon1' />
              <span>Education</span>
            </h1>
            <ul>
              {education.map((edu, index) => (
                <li key={index}>
                  <legend>{edu.degree} <br /></legend>
                  <p>{edu.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='skillsec'>
            <h1>Skills</h1>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="rightpane">
        <div className="details">
          <h1>{name}</h1>
          <small>{occupation}</small>
        </div>
        <div className="profiles">
          {profile}
        </div>
        <div className="workexperience">
          <h1>Experience</h1>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <small>{exp.duration}</small>
                <legend>{exp.company}</legend>
                <p>{exp.role}</p>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="reference">
          <h1>References</h1>
          <div className="refcards">
            {references.map((ref, index) => (
              <div className="card" key={index}>
                <legend>{ref.name}</legend>
                <p>{ref.position}</p>
                <small>phone : {ref.phone}</small>
                <small>Email : {ref.email}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme1;