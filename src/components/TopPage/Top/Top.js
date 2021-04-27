import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Top.css';

import Scene from './Scene/Scene';

export default function Top() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.Top',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(element.querySelector('.Top__text__title'), fromVars, toVars)
      .fromTo(
        element.querySelector('.Top__text__lead'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Top__text__subtitle'),
        fromVars,
        toVars,
        '-=0.8'
      );
  }, []);

  return (
    <div className='Top container' ref={ref}>
      <div className='Top__Inner container__Inner'>
        <div className='Top__texts container__texts'>
          <div className='Top__text__title container__text__title'>
            <h1>tsuka-ryu</h1>
          </div>
          <div className='Top__text__lead container__text__lead'>
            <p>web developer / designer</p>
          </div>
          <div className='Top__text__subtitle container__text__subtitle'>
            <h2>PORTFOLIO</h2>
          </div>
        </div>
        <div className='Top__img container__img'>
          <Scene />
        </div>
      </div>
    </div>
  );
}
