import React from 'react';
import './style.scss';

const CallToAction = props => (
  <section className="call-to-action">
    <div className="section-content">
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

export default CallToAction;
// TODO: Ensure mobile css
