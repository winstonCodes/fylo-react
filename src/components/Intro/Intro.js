import React from 'react';
import './style.css';

const Intro = props => {
  const {bkgSecondary, fontBody, accentOne, accentTwo, buttonColor} = props.theme
  return (
    <section className="intro-container"
      style={{
        color:fontBody,
        backgroundColor: bkgSecondary
      }}>
      <div className="intro">
        <img src={require("./images/illustration-intro.png")} alt="" />
        <h1>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p>
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
        </p>
        <button className="get-started" type="button" name="button"
          style={{
            backgroundColor:accentOne,
            backgroundImage:`linear-gradient(to right, ${accentOne}, ${accentTwo})`,
            color:buttonColor
          }}>
          Get Started
        </button>
      </div>

    </section>
  );
}

export default Intro;

// TODO: Transition css to scss
// TODO: Ensure mobile css
// TODO: Convert css to scss
