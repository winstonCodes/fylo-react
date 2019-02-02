import React from 'react';
import './style.scss';

import TestimonialSquare from './components/TestimonialSquare';
import Content from "./content";

const Testimonials = props => {

  //import individual theme values from theme prop
  const {bkgMain, fontHeader, accentOne} = props.theme;

  //import theme prop as a whole in order to pass through to child components
  const {theme} = props;

  // inline style variable
  const sectionStyle = {
    backgroundColor: bkgMain,
    fontColor: fontHeader
  }

  //map through testimonial content file; render testimonial squares
  const testimonials = Content.map((content, i) => (
    <TestimonialSquare content={content} className="testimonial-square first" theme={theme} key={i} />
  ));

  //display testimonials section beginning w/ big ass quoatation mark
  return(
  <section className="testimonials" style={sectionStyle}>
    <p className="testimonial-quotation" style={{color: accentOne}}>"</p>
    {testimonials}

  </section>
);}

export default Testimonials;
