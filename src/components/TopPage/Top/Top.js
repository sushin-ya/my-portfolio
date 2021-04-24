import React from 'react';
import './Top.css';

import Scene from './Scene/Scene';

export default function Top() {
  return (
    <div className='Top container'>
      <div className='Top__Inner container__Inner'>
        <div className='Top__texts container__texts'>
          <div className='Top__text__title container__text__title'>
            <h1>tsuka-ryu</h1>
          </div>
          <div className='Top__text__lead container__text__lead'>
            <p>web developer / designer</p>
          </div>
          <div className='Top__text__subtitle container__text__subtitle'>
            <h2>PORTFOLIO</h2>
          </div>
        </div>
        <div className='Top__img container__img'>
          <Scene />
        </div>
      </div>
    </div>
  );
}
