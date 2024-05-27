import React from 'react';
import '../styles/Welcome.css';
import genieImage from '../assets/genieImage.png';  // Assuming you have this image in src/assets
import { useState } from 'react';
import FormComponent from './Form';
import { FaArrowLeft } from 'react-icons/fa';
import ThemesComingSoon from './AddPanelOne';
//import Typewriter from './Typewriter';

function Welcome() {
    const [display, setDisplay] = useState(false);
    const [displayadd, setDisplayAdd] = useState(false)
    const handleDisplay = ()=> {
        setDisplay(!display);
    }
    const handleDisplayAdd = ()=> {
        setDisplayAdd(!displayadd);
    }
  return (
    <div className="welcome">
      <div>
        <h1 >Welcome To <br /> Genie CV</h1>
        <button className="create-cv" onClick={handleDisplay}>create your cv</button>
      </div>

      {display && <FormComponent close={()=>{handleDisplay()}} />}
      <img src={genieImage} alt="Genie" className="genie-image" />
      <button type="button" style={{position: "fixed", top: 150, right: 0, zIndex: 5}} onClick={handleDisplayAdd}><FaArrowLeft /></button>
      {displayadd && (
        <div style={{position: "fixed", top: 150, left: 0, zIndex: 5, backgroundColor: "#ffffff7e",display: "flex",alignItems: "center",justifyContent: "center",borderRadius: 5, boxShadow: "0 0 8px 2px black",flexDirection:"column",padding: "25px"}} >
            <ThemesComingSoon />
            </div>
      )}
    </div>
  );
}

export default Welcome;
