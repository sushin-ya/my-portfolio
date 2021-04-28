import React, { useEffect, useRef } from 'react';
import './AboutMeTop.css';

import astronaut from '../../../images/TopPage/aboutmesvg/astronaut.svg';
import planet from '../../../images/TopPage/aboutmesvg/planet.svg';
import { imgAnimation, slideTextAnimation } from '../../../app/animations';
import slideAnimationInit from '../../../app/slideAnimationInit';

export default function AboutMeTop() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.AboutMe__Top' });
    slideTextAnimation(element, tl, '.AboutMe__Top__text__title');
    slideTextAnimation(element, tl, '.AboutMe__Top__text__lead');
    slideTextAnimation(element, tl, '.AboutMe__Top__text__subtitle');
    imgAnimation(element, tl, '.AboutMe__Top__astronaut > img');
    imgAnimation(element, tl, '.AboutMe__Top__planet > img');
    tl.to(
      element.querySelector('.AboutMe__Top__astronaut > img'),
      {
        // y: -20,
        repeat: -1,
        yoyoEase: true,
        duration: 1.5,
      },
      '-=0.8'
    ).to(
      element.querySelector('.AboutMe__Top__planet > img'),
      {
        y: -20,
        repeat: -1,
        yoyoEase: true,
        duration: 1.5,
      },
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
