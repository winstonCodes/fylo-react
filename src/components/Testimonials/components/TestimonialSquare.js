import React from 'react';

const TestimonialSquare = props => {
  const {author, position, statement, picture} = props.content;
  const {bkgAddtl, fontHeader} = props.theme;
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
