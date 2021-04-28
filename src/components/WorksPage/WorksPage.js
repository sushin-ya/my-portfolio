import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import WorksTop from './WorksTop/WorksTop';
import WorksMain from './WorksMain/WorksMain';

export default function WorksPage() {
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
      <div className='WorksPage  scroll-snapping' ref={(el) => (body = el)}>
        <WorksTop />
        <WorksMain />
      </div>
    </>
  );
}
