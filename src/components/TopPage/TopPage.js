import React from 'react';
import './TopPage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import BasicStance from './BasicStance/BasicStance';
import Works from './Works/Works';
import GetInTouch from './GetInTouch/GetInTouch';

export default function TopPage() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scroller: '.TopPage',
    // markers: true,
  });

  return (
    <div className='TopPage scroll-snapping'>
      <Top />
      <AboutMe />
      <BasicStance />
      <Works />
      <GetInTouch />
    </div>
  );
}
