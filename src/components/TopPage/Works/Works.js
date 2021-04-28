import React, { useEffect, useRef } from 'react';
import './Works.css';
import { Link } from 'react-router-dom';

import astronaut from '../../../images/TopPage/workssvg/astronaut.svg';
import rocket from '../../../images/TopPage/workssvg/rocket.svg';
import planet from '../../../images/TopPage/workssvg/planet.svg';
import slideAnimationInit from '../../../app/slideAnimationInit';
import { imgAnimation, slideTextAnimation } from '../../../app/animations';

export default function Works() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.Works' });
    slideTextAnimation(element, tl, '.Works__text__title', '');
    slideTextAnimation(element, tl, '.Works__text__lead', '');
    slideTextAnimation(element, tl, '.Works__text__btn', '');
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
    <div id='works' className='Works container' ref={ref}>
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
