import React from 'react';
import './style.scss';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Features from '../../components/Features';
import HalfImgHalfText from '../../components/HalfImgHalfText';
import Testimonials from '../../components/Testimonials';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';

import ClickNotf from '../../components/ClickNotf';


// render components and pass through the theme
const LandingPage = props => {
  const {theme} = props;
  return(
    <div theme={theme} style={{backgroundColor:theme.bkgMain}}>
      <Header theme={theme}/>
      <ClickNotf theme={theme}/>
      <Intro theme={theme} />
      <Features theme={theme} />
      <HalfImgHalfText theme={theme} />
      <Testimonials theme={theme} />
      <CallToAction theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}


export default LandingPage;

// TODO: Move components to LandingPage/components
