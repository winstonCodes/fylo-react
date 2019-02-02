import React from 'react';

const TestimonialSquare = props => {
  // info taken from content file
  const {author, position, statement, picture} = props.content;

  // theme colors
  const {bkgAddtl, fontHeader} = props.theme;

  //render individual testimonial content
  return(
    <div className="testimonial-square" style={{backgroundColor:bkgAddtl, color:fontHeader}}>
      <p>
      {statement}
      </p>
      <div className="testimonial-profile">
        {picture}
        <div className="author">
          <h4>{author}</h4>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSquare;
