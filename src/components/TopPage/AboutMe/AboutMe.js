import React from 'react';
import './AboutMe.css';

import astronaut from '../../../images/aboutmesvg/astronaut.svg';
import planet from '../../../images/aboutmesvg/planet.svg';

export default function AboutMe() {
  return (
    <div className='AboutMe container'>
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
            <a href='#/' alt=''>
              <span>read more</span>
            </a>
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
