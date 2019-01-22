import React from 'react';
import './style.scss';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Features from '../../components/Features';
import HalfImgHalfText from '../../components/HalfImgHalfText';
import Testimonials from '../../components/Testimonials';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';

const theme = {
  bkgMain: "blue",
  bkgSecondary: "pink",
  bkgFooter: "orange",
  bkgAddtl: "purple",
  accentOne: "grey",
  accentTwo: "violet",
  fontHeader: "#50A0D6",
  fontBody: "black",
  fontFooter: "turqoise",
  buttonColor: "white"
}
const LandingPage = props => (
  <div theme={theme}>
    <Header theme={theme}/>
    <Intro theme={theme} />
    <Features theme={theme} />
    <HalfImgHalfText theme={theme} />
    <Testimonials theme={theme} />
    <CallToAction theme={theme} />
    <Footer theme={theme} />
  </div>
);

export default LandingPage;

// TODO: Move components to LandingPage/components
// TODO: Transition css to scss
// TODO: Ensure mobile css
// TODO: Convert css to scss
