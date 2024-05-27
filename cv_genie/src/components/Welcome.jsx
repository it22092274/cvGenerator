import React from 'react';
import '../styles/Welcome.css';
import genieImage from '../assets/genieImage.png';  // Assuming you have this image in src/assets
import { useState } from 'react';
import FormComponent from './Form';
//import Typewriter from './Typewriter';

function Welcome() {
    const [display, setDisplay] = useState(false);
    const handleDisplay = ()=> {
        setDisplay(!display);
    }
  return (
    <div className="welcome">
      <div>
        <h1 >Welcome To <br /> Genie CV</h1>
        <button className="create-cv" onClick={handleDisplay}>create your cv</button>
      </div>

      {display && <FormComponent close={()=>{handleDisplay()}} />}
      <img src={genieImage} alt="Genie" className="genie-image" />
    </div>
  );
}

export default Welcome;
