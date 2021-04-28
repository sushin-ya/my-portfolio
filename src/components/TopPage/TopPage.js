import React, { useEffect, useRef } from 'react';
import './TopPage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import BasicStance from './BasicStance/BasicStance';
import Works from './Works/Works';
import GetInTouch from './GetInTouch/GetInTouch';
import pageTransition from '../../app/pageTransition';

export default function TopPage() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scroller: '.TopPage',
  });

  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    pageTransition(screen, body);
  }, []);

  return (
    <>
      <div className='loadContainer'>
        <div className='loadScreen' ref={(el) => (screen = el)}></div>
      </div>
      <div className='TopPage scroll-snapping' ref={(el) => (body = el)}>
        <Top />
        <AboutMe />
        <BasicStance />
        <Works />
        <GetInTouch />
      </div>
    </>
  );
}
