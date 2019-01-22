import React from 'react';
import './style.scss';

import TestimonialSquare from './components/TestimonialSquare';
import Content from "./content";

const Testimonials = props => {
  const {bkgMain, bkgAddtl, fontBody} = props.theme;
  const {theme} = props;
  const sectionStyle = {
    backgroundColor: bkgMain,
    fontColor: fontBody
  }

  const testimonials = Content.map((content, i) => (
    <TestimonialSquare content={content} className="testimonial-square first" theme={theme} key={i} />
  ));


  return(
  <section className="testimonials" style={sectionStyle}>

    {testimonials}

  </section>
);}

export default Testimonials;
// TODO: Ensure mobile css
// TODO: Create testimonial components


// <div className="testimonial-square">
// <p>
// Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
// become a well-oiled collaboration machine.
// </p>
// <div className="testimonial-profile">
// <img src={require("./images/profile-2.jpg")} alt="" />
// <div className="author">
// <h4>Bruce McKenzie</h4>
// <p>Founder & CEO, Huddle</p>
// </div>
// </div>
// </div>
// <div className="testimonial-square">
// <p>
// Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
// become a well-oiled collaboration machine.
// </p>
// <div className="testimonial-profile">
// <img src={require("./images/profile-3.jpg")} alt="" />
// <div className="author">
// <h4>Iva Boyd</h4>
// <p>Founder & CEO, Huddle</p>
// </div>
// </div>
// </div>
