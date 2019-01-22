import React from 'react';
import './style.scss';

// import IconArrow from "./images/IconArrow";

const HalfImgHalfText = props => {
  const {bkgMain, fontBody, accentOne} = props.theme;
  const sectionStyle = {
    color: fontBody,
    backgroundColor: bkgMain
  }
  const spanStyle = {
    color: accentOne,
    borderBottom: `1px solid ${accentOne}`
  }
  return(
  <section className="half-img-half-text" style={sectionStyle}>
    <div className="section-image">
      <img src={require("./images/illustration-stay-productive.png")} alt="" />
    </div>
    <div className="section-content">
      <h1>Stay productive, wherever you are</h1>
      <p>
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file
        storage needs.
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for live collaboration. No email
        attachments required.
      </p>
      <a href="#"><span className="link-decor" style={spanStyle}>See how Fylo works </span></a>
    </div>

  </section>
);}

export default HalfImgHalfText;

// TODO: Convert svg images to svg components
// TODO: Ensure mobile css
