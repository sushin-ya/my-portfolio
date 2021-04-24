import React from 'react';
import './WorksTop.css';

import moonrocket from '../../../images/TopPage/basicstancesvg/moonrocket.svg';

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
        <div className='Works__Top__img container__img'>
          <div className='Works__Top__moonrocket'>
            <img src={moonrocket} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
