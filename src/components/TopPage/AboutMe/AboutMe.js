import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './AboutMe.css';

import astronaut from '../../../images/TopPage/aboutmesvg/astronaut.svg';
import planet from '../../../images/TopPage/aboutmesvg/planet.svg';

export default function AboutMe() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.AboutMe',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(element.querySelector('.AboutMe__text__title'), fromVars, toVars)
      .fromTo(
        element.querySelector('.AboutMe__text__lead'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.AboutMe__text__btn'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.AboutMe__astronaut > img'),
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, duration: 1.5 },
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.AboutMe__planet > img'),
        { opacity: 0, y: -500 },
        { opacity: 1, y: 0, duration: 1.5 },
        '-=0.8'
      )
      .to(
        element.querySelector('.AboutMe__astronaut > img'),
        {
          y: -20,
          repeat: -1,
          yoyoEase: true,
          duration: 1.5,
        },
        '-=0.8'
      )
      .to(
        element.querySelector('.AboutMe__planet > img'),
        {
          y: -20,
          repeat: -1,
          yoyoEase: true,
          duration: 1.5,
        },
        '-=0.7'
      );
  }, []);
  return (
    <div className='AboutMe container' ref={ref}>
      <div className='AboutMe__Inner container__Inner'>
        <div className='AboutMe__texts container__texts'>
          <div className='AboutMe__text__title container__text__title'>
            <h1>About Me</h1>
          </div>
          <div className='AboutMe__text__lead container__text__lead'>
            <p>未経験のdeveloper志望です。</p>
            <p>Who I am / Skill / Hobby</p>
          </div>
          <div className='AboutMe__text__btn container__text__btn'>
            <Link to='/aboutme'>
              <span>read more</span>
            </Link>
          </div>
        </div>
        <div className='AboutMe__img container__img'>
          <div className='AboutMe__astronaut'>
            <img src={astronaut} alt='' />
          </div>
          <div className='AboutMe__planet'>
            <img src={planet} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
