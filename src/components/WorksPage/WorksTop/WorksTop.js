import React, { useEffect, useRef } from 'react';
import './WorksTop.css';
import { gsap } from 'gsap';

import astronaut from '../../../images/TopPage/workssvg/astronaut.svg';
import rocket from '../../../images/TopPage/workssvg/rocket.svg';
import planet from '../../../images/TopPage/workssvg/planet.svg';

export default function WorksTop() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.Works__Top',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(
      element.querySelector('.Works__Top__text__title'),
      fromVars,
      toVars
    )
      .fromTo(
        element.querySelector('.Works__Top__text__lead'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__Top__text__subtitle'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__planet > img'),
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__rocket > img'),
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__astronaut > img'),
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8'
      )
      .to(
        element.querySelector('.Works__rocket > img'),
        {
          rotation: 100,
          repeat: -1,
          duration: 2,
          yoyo: true,
        },
        '-=0.5'
      );
  }, []);
  return (
    <div className='Works__Top container' ref={ref}>
      <div className='Works__Top__Inner container__Inner'>
        <div className='Works__Top__texts container__texts'>
          <div className='Works__Top__text__title container__text__title'>
            <h1>Works</h1>
          </div>
          <div className='Works__Top__text__lead container__text__lead'>
            <p>これまで制作した成果物です。</p>
          </div>
          <div className='Works__Top__text__subtitle container__text__subtitle'>
            <p>tsuka-ryu</p>
            <p>PORTFOLIO</p>
          </div>
        </div>
        <div className='Works__img container__img'>
          <div className='Works__planet'>
            <img src={planet} alt='' />
          </div>
          <div className='Works__rocket'>
            <img src={rocket} alt='' />
          </div>
          <div className='Works__astronaut'>
            <img src={astronaut} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
