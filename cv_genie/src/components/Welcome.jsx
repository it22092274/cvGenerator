import React from 'react';
import '../styles/Welcome.css';
import genieImage from '../assets/genieImage.png';  // Assuming you have this image in src/assets
//import Typewriter from './Typewriter';

function Welcome() {
  return (
    <div className="welcome">
      <div>
        <h1 >Welcome To <br /> CV Genie</h1>
        <button className="create-cv">create your cv</button>
      </div>
      <img src={genieImage} alt="Genie" className="genie-image" />
    </div>
  );
}

export default Welcome;
