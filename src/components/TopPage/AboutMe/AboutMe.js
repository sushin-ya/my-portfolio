import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

import astronaut from '../../../images/TopPage/aboutmesvg/astronaut.svg';
import planet from '../../../images/TopPage/aboutmesvg/planet.svg';
import slideAnimationInit from '../../../app/slideAnimationInit';
import {
  imgAnimation,
  slideTextAnimation,
} from '../../../app/TopPageAnimation';

export default function AboutMe() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.AboutMe' });
    slideTextAnimation(element, tl, '.AboutMe__text__title', '-=0.2');
    slideTextAnimation(element, tl, '.AboutMe__text__lead');
    slideTextAnimation(element, tl, '.AboutMe__text__btn');
    imgAnimation(element, tl, '.AboutMe__astronaut > img');
    imgAnimation(element, tl, '.AboutMe__planet > img');
    tl.to(
      element.querySelector('.AboutMe__astronaut > img'),
      {
        // y: -20,
        repeat: -1,
        yoyoEase: true,
        duration: 1.5,
      },
      '-=0.8'
    ).to(
      element.querySelector('.AboutMe__planet > img'),
      {
        y: -20,
        repeat: -1,
        yoyoEase: true,
        duration: 1.5,
      },
      '-=0.8'
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
