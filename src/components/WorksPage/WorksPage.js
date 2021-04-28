import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WorksTop from './WorksTop/WorksTop';
import WorksMain from './WorksMain/WorksMain';
import PageTransition from '../../app/PageTransition';

export default function WorksPage() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scroller: '.WorksPage',
  });

  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    PageTransition(screen, body);
  }, []);
  return (
    <>
      <div className='loadContainer'>
        <div className='loadScreen' ref={(el) => (screen = el)}></div>
      </div>
      <div className='WorksPage  scroll-snapping' ref={(el) => (body = el)}>
        <WorksTop />
        <WorksMain />
      </div>
    </>
  );
}
