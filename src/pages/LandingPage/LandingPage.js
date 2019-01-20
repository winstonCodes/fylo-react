import React from 'react';
import './style.css';

import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Features from '../../components/Features';
import HalfImgHalfText from '../../components/HalfImgHalfText';
import Testimonials from '../../components/Testimonials';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';


const LandingPage = props => (
  <div>
    <Header />
    <Intro />
    <Features />
    <HalfImgHalfText />
    <Testimonials />
    <CallToAction />
    <Footer />
  </div>
);

export default LandingPage;
