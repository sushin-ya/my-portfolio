import React, { useEffect, useRef } from 'react';
import './BasicStanceTop.css';
import { gsap } from 'gsap';

import moonrocket from '../../../images/TopPage/basicstancesvg/moonrocket.svg';

export default function BasicStanceTop() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.BasicStance__Top',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(
      element.querySelector('.BasicStance__Top__text__title'),
      fromVars,
      toVars
    )
      .fromTo(
        element.querySelector('.BasicStance__Top__text__lead'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.BasicStance__Top__text__subtitle'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.BasicStance__Top__moonrocket > img'),
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        '-=0.8'
      );
  });
  return (
    <div className='BasicStance__Top container' ref={ref}>
      <div className='BasicStance__Top__Inner container__Inner'>
        <div className='BasicStance__Top__texts container__texts'>
          <div className='BasicStance__Top__text__title container__text__title'>
            <h1>Basic Stance</h1>
          </div>
          <div className='BasicStance__Top__text__lead container__text__lead'>
            <p>基本的な考え方についてです。</p>
            <p>technology / design / culture</p>
          </div>
          <div className='BasicStance__Top__text__subtitle container__text__subtitle'>
            <p>tsuka-ryu</p>
            <p>PORTFOLIO</p>
          </div>
        </div>
        <div className='BasicStance__Top__img container__img'>
          <div className='BasicStance__Top__moonrocket'>
            <img src={moonrocket} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
