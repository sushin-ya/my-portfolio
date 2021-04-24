import React from 'react';
import './Works.css';
import { Link } from 'react-router-dom';

import astronaut from '../../../images/workssvg/astronaut.svg';
import rocket from '../../../images/workssvg/rocket.svg';
import planet from '../../../images/workssvg/planet.svg';

export default function Works() {
  return (
    <div className='Works container'>
      <div className='Works__Inner container__Inner'>
        <div className='Works__texts container__texts'>
          <div className='Works__text__title container__text__title'>
            <h1>Works</h1>
          </div>
          <div className='Works__text__lead container__text__lead'>
            <p>これまで制作した成果物です。</p>
          </div>
          <div className='Works__text__btn container__text__btn'>
            <Link to='/works'>
              <span>read more</span>
            </Link>
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
