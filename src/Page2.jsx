import React from 'react'

import './Page2.css'; // Create a new CSS file for Page2 if needed

function Page2() {
  return (
    <div className="Page2-container">
      <h1>Creative Web Agency <br/> <span style={{ color: '#701ABC' }}>Delivering Custom Solutions</span>
      </h1> 
      
      <div className="sections-container">
        <div className="section">
          <p>Tailored Branding Strategies to Drive Engagement</p> 
          <span>/</span>
          <p>Effective Marketing Campaigns To Generate Growth </p>
          <span>/</span>
          <p>Custom Web Design Solutions To Drive Conversions</p>
        </div>
        
        <div className="section">
          <p>5 Star DesignRush Reviews</p>
          <span>/</span>
          <p>Latest Web Design Award</p>
        </div>
      </div>
      <div className="images-container">
        <img src="path/to/image1.jpg" alt="Image 1" />
        <img src="path/to/image2.jpg" alt="Image 2" />
      </div>
    </div>
  );
}

export default Page2;
