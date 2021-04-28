import React, { useEffect, useRef } from 'react';
import './WorksTop.css';

import astronaut from '../../../images/TopPage/workssvg/astronaut.svg';
import rocket from '../../../images/TopPage/workssvg/rocket.svg';
import planet from '../../../images/TopPage/workssvg/planet.svg';
import { imgAnimation, slideTextAnimation } from '../../../app/animations';
import slideAnimationInit from '../../../app/slideAnimationInit';

export default function WorksTop() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.Works__Top' });
    slideTextAnimation(element, tl, '.Works__Top__text__title');
    slideTextAnimation(element, tl, '.Works__Top__text__lead');
    slideTextAnimation(element, tl, '.Works__Top__text__subtitle');
    imgAnimation(element, tl, '.Works__planet > img');
    imgAnimation(element, tl, '.Works__rocket > img');
    imgAnimation(element, tl, '.Works__astronaut > img');
    tl.to(
      element.querySelector('.Works__rocket > img'),
      {
        rotation: 100,
        repeat: -1,
        duration: 2,
        yoyo: true,
      },
      '-=0.5'
    );
  }, []);
  return (
    <div className='Works__Top container' ref={ref}>
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
