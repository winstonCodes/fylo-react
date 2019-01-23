import React from 'react';

const FeatureSquare = props => {
  const {header, paragraph, image} = props.content;
  const {accentOne, bkgMain, featureIcon} = props.theme;

  return(
    <div className="feature-square">
      {React.cloneElement(image, {color:(featureIcon||accentOne), bkgColor:bkgMain})}
      <h3>
        {header}
      </h3>
      <p>
        {paragraph}
      </p>
    </div>
  );
}

export default FeatureSquare;
