import React from 'react';

const Members = () => {
  const memberLogos = [
    { name: "BGMEA", logo: "https://placehold.co/150x80/ffffff/000000?text=BGMEA" },
    { name: "BKMEA", logo: "https://placehold.co/150x80/ffffff/000000?text=BKMEA" },
    { name: "ISO", logo: "https://placehold.co/150x80/ffffff/000000?text=ISO" }
  ];

  return (
    <section className="members-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">We are Proud Member of</h2>
        <div className="row justify-content-center">
          {memberLogos.map((member, index) => (
            <div key={index} className="col-md-3 text-center">
              <img src={member.logo} alt={`${member.name} logo`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
