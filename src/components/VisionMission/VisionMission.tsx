import React from 'react';
import { Fade } from "react-awesome-reveal";

const VisionMission = () => {
  return (
    <Fade>
      <section className="vision-mission-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Vision</h2>
              <p>To be the No. 1 local brand in Bangladesh through the best quality and price. We want to lead the market with our unique design and quality of service.</p>
            </div>
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>To build a 'Fashion Aware Nation'. We are a customer-focused and reliable company in the country. We want to grow with our customers.</p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default VisionMission;
