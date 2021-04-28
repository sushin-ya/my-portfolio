import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WorksTop from './WorksTop/WorksTop';
import WorksMain from './WorksMain/WorksMain';
import pageTransition from '../../app/pageTransition';
import { HashLink } from 'react-router-hash-link';
import arrow from '../../images/arrow.svg';

export default function WorksPage() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scroller: '.WorksPage',
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
        <HashLink to='/#works'>
          <img src={arrow} alt='' />
        </HashLink>
      </div>

      <div className='WorksPage  scroll-snapping' ref={(el) => (body = el)}>
        <WorksTop />
        <WorksMain />
      </div>
    </>
  );
}
