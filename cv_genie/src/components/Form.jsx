import React, { useState, useRef } from 'react';
import Theme1 from './themes/Theme1';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import "../styles/Form.css";

function FormComponent({close}) {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    email: '',
    phone: '',
    address: '',
    profileImage: '',
    education: [{ degree: '', description: '' }],
    skills: [],
    experience: [{ duration: '', company: '', role: '', description: '' }],
    references: [{ name: '', position: '', phone: '', email: '' }],
    profile: ''
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resumeRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const education = [...formData.education];
    education[index][name] = value;
    setFormData((prevData) => ({ ...prevData, education }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const experience = [...formData.experience];
    experience[index][name] = value;
    setFormData((prevData) => ({ ...prevData, experience }));
  };

  const handleReferenceChange = (index, e) => {
    const { name, value } = e.target;
    const references = [...formData.references];
    references[index][name] = value;
    setFormData((prevData) => ({ ...prevData, references }));
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    const skills = value.split(',').map(skill => skill.trim());
    setFormData((prevData) => ({ ...prevData, skills }));
  };

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const loadImageAsBase64 = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = reject;
      img.src = url;
    });
  };

  const handlePrint = async () => {
    // Hide the download button
    const downloadButton = document.querySelector('.modal-content button');
    downloadButton.style.display = 'none';
  
    // Hide the scroll bars
    document.body.style.overflow = 'hidden';
  
    if (formData.profileImage) {
      try {
        const base64Image = await loadImageAsBase64(formData.profileImage);
        setFormData((prevData) => ({ ...prevData, profileImage: base64Image }));
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }
  
    html2canvas(resumeRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
  
      // Restore the visibility of download button and scroll bars after capturing screenshot
      downloadButton.style.display = 'block';
      document.body.style.overflow = 'auto';

    });
  };
  

  return (
    <div className="form-container">
       <button type='button' className='close' onClick={()=>{close()}} style={{zIndex: 100}}>x</button>
      <form onSubmit={handleSubmit}>
      
        {currentSection === 0 && (
          <>
            <h2>Personal Information</h2>
            <div className="form-section">
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Occupation:
                <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </label>
              <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              </label>
              <label>
                Profile Image URL:
                <input type="url" name="profileImage" value={formData.profileImage} onChange={handleChange} required />
              </label>
            </div>
          </>
        )}

        {currentSection === 1 && (
          <>
            <h2>Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="education-block">
                <label>
                  Degree:
                  <input type="text" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} required />
                </label>
                <label>
                  Description:
                  <input type="text" name="description" value={edu.description} onChange={(e) => handleEducationChange(index, e)} required />
                </label>
              </div>
            ))}
            <button type="button" onClick={() => setFormData((prevData) => ({ ...prevData, education: [...prevData.education, { degree: '', description: '' }] }))}>
              Add Education
            </button>
          </>
        )}

        {currentSection === 2 && (
          <>
            <h2>Skills</h2>
            <label>
              Skills (comma separated):
              <input type="text" value={formData.skills.join(', ')} onChange={handleSkillsChange} required />
            </label>
          </>
        )}

        {currentSection === 3 && (
          <>
            <h2>Work Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={index} className="experience-block">
                <label>
                  Duration:
                  <input type="text" name="duration" value={exp.duration} onChange={(e) => handleExperienceChange(index, e)} required />
                </label>
                <label>
                  Company:
                  <input type="text" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} required />
                </label>
                <label>
                  Role:
                  <input type="text" name="role" value={exp.role} onChange={(e) => handleExperienceChange(index, e)} required />
                </label>
                <label>
                  Description:
                  <textarea name="description" value={exp.description} onChange={(e) => handleExperienceChange(index, e)} required />
                </label>
              </div>
            ))}
            <button type="button" onClick={() => setFormData((prevData) => ({ ...prevData, experience: [...prevData.experience, { duration: '', company: '', role: '', description: '' }] }))}>
              Add Experience
            </button>
          </>
        )}

        {currentSection === 4 && (
          <>
            <h2>References</h2>
            {formData.references.map((ref, index) => (
              <div key={index} className="reference-block">
                <label>
                  Name:
                  <input type="text" name="name" value={ref.name} onChange={(e) => handleReferenceChange(index, e)} required />
                </label>
                <label>
                  Position:
                  <input type="text" name="position" value={ref.position} onChange={(e) => handleReferenceChange(index, e)} required />
                </label>
                <label>
                  Phone:
                  <input type="tel" name="phone" value={ref.phone} onChange={(e) => handleReferenceChange(index, e)} required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={ref.email} onChange={(e) => handleReferenceChange(index, e)} required />
                </label>
              </div>
            ))}
            <button type="button" onClick={() => setFormData((prevData) => ({ ...prevData, references: [...prevData.references, { name: '', position: '', phone: '', email: '' }] }))}>
              Add Reference
            </button>
          </>
        )}

        {currentSection === 5 && (
          <>
            <h2>Profile</h2>
            <label>
              Profile Description:
              <textarea name="profile" value={formData.profile} onChange={handleChange} required />
            </label>
          </>
        )}

        <div className="button-group">
          {currentSection > 0 && (
            <button type="button" onClick={handlePrevious}>Previous</button>
          )}
          {currentSection < 5 && (
            <button type="button" onClick={handleNext}>Next</button>
          )}
          {currentSection === 5 && (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div  ref={resumeRef} style={{backgroundColor: "transparent"}}>
                <Theme1 {...formData} />
                <button type='button' onClick={handlePrint}>Download PDF</button>     
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default FormComponent;

