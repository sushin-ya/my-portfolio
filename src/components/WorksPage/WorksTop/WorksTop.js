import React from 'react';
import './WorksTop.css';

import astronaut from '../../../images/TopPage/workssvg/astronaut.svg';
import rocket from '../../../images/TopPage/workssvg/rocket.svg';
import planet from '../../../images/TopPage/workssvg/planet.svg';

export default function WorksTop() {
  return (
    <div className='Works__Top container'>
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
