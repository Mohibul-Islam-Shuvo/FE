import React from 'react';
import { Fade } from "react-awesome-reveal";

const Testimonials = () => {
  const testimonials = [
    {
      name: "RJ Kibria",
      text: "Blue Dream Group is a name of trust. I am really happy with their service.",
      image: "https://placehold.co/100x100/ffffff/000000?text=RJ+Kibria"
    },
    {
      name: "Mehidy Hasan Miraz",
      text: "They are the best in the market. I wish them all the best.",
      image: "https://placehold.co/100x100/ffffff/000000?text=Mehidy+Hasan"
    }
  ];

  return (
    <Fade>
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Testimonials</h2>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex">
                      <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" style={{width: '100px', height: '100px'}} />
                      <div>
                        <p className="card-text">{testimonial.text}</p>
                        <footer className="blockquote-footer">{testimonial.name}</footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Testimonials;
