import React, { useEffect, useRef } from 'react';
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
      gsap.to(body, 1, {
        opacity: '0',
        pointerEvents: 'none',
        duration: 1,
      });
    };
  }, []);

  return (
    <>
      <div className='TopLoadContainer'>
        <div className='TopLoadScreen' ref={(el) => (screen = el)}></div>
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
