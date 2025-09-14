import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section text-white text-center">
      <div className="hero-overlay">
        <div className="container">
          <h1 className="display-4">First ISO Certified Wholesale Clothing Company</h1>
          <p className="lead">We are the biggest wholesale clothing company in Bangladesh.</p>
          <a href="#" className="btn btn-primary btn-lg">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
