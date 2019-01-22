import React from 'react';
import './style.scss';

import TestimonialSquare from './components/TestimonialSquare';
import Content from "./content";

const Testimonials = props => {
  const {bkgMain, fontBody} = props.theme;
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
