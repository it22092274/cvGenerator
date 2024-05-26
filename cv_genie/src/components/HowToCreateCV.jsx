import React from 'react';
import '../styles/HowToCreateCV.css';
import { FaMousePointer, FaPalette, FaEdit, FaDownload } from 'react-icons/fa';

function HowToCreateCV() {
  const steps = [
    {
      icon: <FaMousePointer />,
      title: 'Click on Create CV Button',
      description: 'Start by clicking on the "Create CV" button on the homepage.',
    },
    {
      icon: <FaPalette />,
      title: 'Choose a Theme',
      description: 'Select a theme that suits your style and professional needs.',
    },
    {
      icon: <FaEdit />,
      title: 'Fill the Form',
      description: 'Enter your personal and professional information in the provided form.',
    },
    {
      icon: <FaDownload />,
      title: 'Click Download Button',
      description: 'Download your beautifully crafted CV with just one click.',
    },
  ];

  return (
    <div className="how-to-create-cv" id='how-to-use'>
      <h2>How to Create a Free CV</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToCreateCV;
