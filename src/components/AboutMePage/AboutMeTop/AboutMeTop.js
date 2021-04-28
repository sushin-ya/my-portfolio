import React, { useEffect, useRef } from 'react';
import './AboutMeTop.css';
import { gsap } from 'gsap';

import astronaut from '../../../images/TopPage/aboutmesvg/astronaut.svg';
import planet from '../../../images/TopPage/aboutmesvg/planet.svg';

export default function AboutMeTop() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.AboutMe__Top',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(
      element.querySelector('.AboutMe__Top__text__title'),
      fromVars,
      toVars
    )
      .fromTo(
        element.querySelector('.AboutMe__Top__text__lead'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.AboutMe__Top__text__subtitle'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.AboutMe__Top__astronaut > img'),
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.AboutMe__Top__planet > img'),
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8'
      );
  });
  return (
    <div className='AboutMe__Top container' ref={ref}>
      <div className='AboutMe__Top__Inner container__Inner'>
        <div className='AboutMe__Top__texts container__texts'>
          <div className='AboutMe__Top__text__title container__text__title'>
            <h1>About Me</h1>
          </div>
          <div className='AboutMe__Top__text__lead container__text__lead'>
            <p>未経験のdeveloper志望です。</p>
            <p>Who I am / Skill / Hobby</p>
          </div>
          <div className='AboutMe__Top__text__subtitle container__text__subtitle'>
            <p>tsuka-ryu</p>
            <p>PORTFOLIO</p>
          </div>
        </div>
        <div className='AboutMe__Top__img container__img'>
          <div className='AboutMe__Top__astronaut'>
            <img src={astronaut} alt='' />
          </div>
          <div className='AboutMe__Top__planet'>
            <img src={planet} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
