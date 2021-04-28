import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BasicStanceTop from './BasicStanceTop/BasicStanceTop';
import BasicStanceMain from './BasicStanceMain/BasicStanceMain';
import pageTransition from '../../app/pageTransition';

export default function BasicStancePage() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scroller: '.BasicStancePage',
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
      <div
        className='BasicStancePage  scroll-snapping'
        ref={(el) => (body = el)}
      >
        <BasicStanceTop />
        <BasicStanceMain />
      </div>
    </>
  );
}
