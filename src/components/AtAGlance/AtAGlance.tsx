import React from 'react';

const AtAGlance = () => {
  const companies = [
    "Blue Dream Apparels",
    "Blue Dream Fashion",
    "Blue Dream Sourcing",
    "Blue Dream Printing",
    "Blue Dream Embroidery",
    "Blue Dream Accessories"
  ];

  return (
    <section className="at-a-glance-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">At a Glance</h2>
        <div className="row">
          {companies.map((company, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  {company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;
