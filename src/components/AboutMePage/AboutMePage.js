import React, { useEffect, useRef } from 'react';
import './AboutMePage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AboutMeTop from './AboutMeTop/AboutMeTop';
import Hobby from './Hobby/Hobby';
import Skill from './Skill/Skill';
import WhoIAm from './WhoIAm/WhoIAm';

export default function AboutMePage() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scroller: '.AboutMePage',
    // markers: true,
  });

  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({});
    tl.to(screen, {
      duration: 1,
      left: '100%',
      ease: 'power3',
      delay: 0.3,
    }).set(screen, { left: '-100%' });

    gsap.to(body, {
      opacity: '1',
      pointerEvents: 'auto',
      delay: 2,
    });

    return () => {
      gsap.to(body, {
        opacity: '0',
        pointerEvents: 'none',
        duration: 1,
      });
    };
  }, []);
  return (
    <>
      <div className='loadContainer'>
        <div className='loadScreen' ref={(el) => (screen = el)}></div>
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
