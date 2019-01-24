import React from 'react';
import './style.scss';

import TestimonialSquare from './components/TestimonialSquare';
import Content from "./content";

const Testimonials = props => {
  const {bkgMain, fontHeader, accentOne} = props.theme;
  const {theme} = props;
  const sectionStyle = {
    backgroundColor: bkgMain,
    fontColor: fontHeader
  }

  const testimonials = Content.map((content, i) => (
    <TestimonialSquare content={content} className="testimonial-square first" theme={theme} key={i} />
  ));


  return(
  <section className="testimonials" style={sectionStyle}>
    <p className="testimonial-quotation" style={{color: accentOne}}>"</p>
    {testimonials}

  </section>
);}

export default Testimonials;
// TODO: Ensure mobile css
// TODO: Create testimonial components
