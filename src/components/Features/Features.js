import React from 'react';
import './style.css';

const Features = props => (
  <section className="feature-grid" style={props.theme}>
    <div className="feature-square">
      <img src={require("./images/icon-access-anywhere.svg")} alt="" />
      <h3>
        Access your files, anywhere
      </h3>
      <p>
        The ability to use a smartphone, tablet, or computer to access your account means your
        files follow you everywhere.
      </p>
    </div>
    <div className="feature-square">
      <img src={require("./images/icon-security.svg")} alt="" />
      <h3>Security you can trust</h3>
      <p>
        2-factor authentication and user-controlled encryption are just a couple of the security
        features we allow to help secure your files.
      </p>
    </div>
    <div className="feature-square">
      <img src={require("./images/icon-collaboration.svg")} alt="" />
      <h3>Real-time collaboration</h3>
      <p>
        Securely share files and folders with friends, family and colleagues for live collaboration.
        No email attachments required.
      </p>
    </div>
    <div className="feature-square">
      <img src={require("./images/icon-any-file.svg")} alt="" />
      <h3>Store any type of file</h3>
      <p>
        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
        file types to be securely stored and shared.
      </p>
    </div>

  </section>
);

export default Features;

// TODO: Convert svg images to svg components
// TODO: Move "feature-squares" to their own component
// TODO: Create feature content file>>array to be mapped over
// TODO: Transition css to scss
// TODO: Ensure mobile css
// TODO: Convert css to scss
