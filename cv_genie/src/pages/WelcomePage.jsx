import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import FeatureCards from '../components/FeatureCards';
import About from '../components/About';
import HowToCreateCV from '../components/HowToCreateCV';
import ReviewAndRate from '../components/ReviewAndRate';


function WelcomePage() {
  return (
    <div >
      <Navbar />
      <Welcome />
      <FeatureCards />
      <About />
      <HowToCreateCV />
      <ReviewAndRate />
      <Footer />
    </div>
  );
}

export default WelcomePage;
