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
    gsap.fromTo(
      element.querySelector('.AboutMe__text__title'),
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, scrollTrigger: '.AboutMe', duration: 1 }
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
