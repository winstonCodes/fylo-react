import React from 'react';
import './style.css';


import FeatureSquare from './components/FeatureSquare';
import Content from './content';

const Features = props => {
  const {theme} = props;
  const {bkgMain, fontBody} = props.theme;
  const style = {
    backgroundColor: bkgMain,
    color: fontBody
  }
  const featureArray = Content.map((content, i) => (
    <FeatureSquare content={content} theme={theme} key={i}/>
  ));

  return (
    <section className="feature-grid" style={style}>
      {featureArray}
    </section>
  );
}

export default Features;

// TODO: Ensure mobile css
// TODO: Convert css to scss

// DONE:
// TODO: Move "feature-squares" to their own component
// TODO: Create feature content file>>array to be mapped over
// TODO: Convert svg images to svg components
