import React from 'react';
import './style.scss';

const CallToAction = props => {

  const {bkgSecondary, bkgMain, bkgFooter, fontBody} = props.theme;
  const sectionStyle = {
      backgroundImage: `linear-gradient(to bottom,  ${bkgMain} 0%,${bkgMain} 50%,${bkgFooter} 50%,${bkgFooter} 100%)`,
      color: fontBody
  }
  const contentStyle = {
    backgroundColor: bkgSecondary
  }

  return(
    <section className="call-to-action" style={sectionStyle}>
      <div className="section-content" style={contentStyle}>
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.
        </p>
        <input type="email" name="" value="" />
        <button type="button" name="button" className="get-started">Get Started For Free</button>
      </div>
    </section>
  );
}
export default CallToAction;
// TODO: Ensure mobile css
