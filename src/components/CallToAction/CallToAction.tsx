import React from 'react';

const CallToAction = () => {
  return (
    <section className="call-to-action-section py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <div className="p-5 bg-primary text-white">
              <h2>Contact With Us</h2>
              <p>We are always ready to serve you. Feel free to contact us for any query.</p>
              <a href="#" className="btn btn-light">Contact Us</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5 bg-secondary text-white">
              <h2>12th Year's Anniversary Celebration</h2>
              <p>We are celebrating our 12th anniversary. We are grateful to our customers and well-wishers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
