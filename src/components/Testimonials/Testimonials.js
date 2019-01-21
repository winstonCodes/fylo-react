import React from 'react';
import './style.scss';

const Testimonials = props => (
  <section className="testimonials">

    <div className="testimonial-square first">
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
        become a well-oiled collaboration machine.
      </p>
      <div className="testimonial-profile">
        <img src={require("./images/profile-1.jpg")} alt="" />
        <div className="author">
          <h4>Satish Patel</h4>
          <p>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
    <div className="testimonial-square">
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
        become a well-oiled collaboration machine.
      </p>
      <div className="testimonial-profile">
        <img src={require("./images/profile-2.jpg")} alt="" />
        <div className="author">
          <h4>Bruce McKenzie</h4>
          <p>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
    <div className="testimonial-square">
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
        become a well-oiled collaboration machine.
      </p>
      <div className="testimonial-profile">
        <img src={require("./images/profile-3.jpg")} alt="" />
        <div className="author">
          <h4>Iva Boyd</h4>
          <p>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>

  </section>
);

export default Testimonials;
// TODO: Ensure mobile css
// TODO: Create testimonial components
