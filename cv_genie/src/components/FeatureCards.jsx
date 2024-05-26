import React from 'react';
import '../styles/FeatureCards.css';
import unlimitedDownloads from '../assets/unlimited.png';
import noWatermark from '../assets/no_watermark.png';
import easyToUse from '../assets/easy_to_use.png';

function FeatureCards() {
  const features = [
    {
      image: unlimitedDownloads,
      title: 'Unlimited CV Downloads',
      description: 'Download as many CVs as you want without any limits.',
    },
    {
      image: noWatermark,
      title: 'No Watermark',
      description: 'Your CVs will be completely free of watermarks.',
    },
    {
      image: easyToUse,
      title: 'Easy to Use',
      description: 'Our tool is user-friendly and simple to navigate.',
    },
  ];

  return (
    <div className="feature-cards">
      {features.map((feature, index) => (
        <div className="card" key={index}>
          <img src={feature.image} alt={feature.title} className="card-image" />
          <h3 className="card-title">{feature.title}</h3>
          <p className="card-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
