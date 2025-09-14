import React from 'react';

const WhyUs = () => {
  const reasons = [
    "First ISO Certified Wholesale Clothing Company in Bangladesh.",
    "We are a member of BGMEA and BKMEA.",
    "We have 48 different items.",
    "We have our own factory.",
    "We have a unique design.",
    "We import fabrics from Turkey, Pakistan, Taiwan, China, and South Korea.",
    "We have a product return policy.",
    "We provide free bags, boxes, and delivery.",
    "We offer incentives for meeting sales targets.",
    "We grant exclusive dealership rights.",
    "We provide complimentary accommodation, meals, and transport for customers visiting Dhaka."
  ];

  return (
    <section className="why-us-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Why is Blue Dream the No. 1 Clothing Company in Bangladesh?</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <ol>
              {reasons.map((reason, index) => (
                <li key={index} className="mb-2">{reason}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
