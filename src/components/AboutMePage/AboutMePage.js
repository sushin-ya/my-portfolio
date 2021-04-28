import React, { useEffect, useRef } from 'react';
import './AboutMePage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AboutMeTop from './AboutMeTop/AboutMeTop';
import Hobby from './Hobby/Hobby';
import Skill from './Skill/Skill';
import WhoIAm from './WhoIAm/WhoIAm';
import pageTransition from '../../app/pageTransition';
import arrow from '../../images/arrow.svg';
import { Link } from 'react-router-dom';

export default function AboutMePage() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scroller: '.AboutMePage',
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
      <div className='backArrow'>
        <Link to={{ pathname: '/', hash: '#aboutme' }}>
          <img src={arrow} alt='' />
        </Link>
      </div>
      <div className='AboutMePage scroll-snapping' ref={(el) => (body = el)}>
        <AboutMeTop />
        <WhoIAm />
        <Skill />
        <Hobby />
      </div>
    </>
  );
}
