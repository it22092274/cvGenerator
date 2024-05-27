import React from 'react';
import Theme1Image from "../assets/themes/6.png";

function ThemesComingSoon() {
  return (
    <div className="themes-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: '#333', fontSize: '24px' }}>More Themes Coming Soon</h2>
      <p style={{ color: '#666', fontSize: '18px', marginTop: '20px' }}>Stay tuned for more themes!</p>
      <small style={{ color: '#e0e0e0', fontSize: '14px', marginTop: '20px', display: 'block' }}>Current themes available:</small>
      <img src={Theme1Image} alt="Theme 1" style={{ marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} width={150} height={250}/>
    </div>
  );
}

export default ThemesComingSoon;
