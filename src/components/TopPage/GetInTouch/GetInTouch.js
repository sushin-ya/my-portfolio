import React, { useEffect, useRef } from 'react';
import './GetInTouch.css';
import { gsap } from 'gsap';

import window from '../../../images/TopPage/getintouchsvg/window.svg';
import twitter from '../../../images/twitter.svg';
import github from '../../../images/github.svg';

export default function GetInTouch() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.GetInTouch',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(
      element.querySelector('.GetInTouch__text__title'),
      fromVars,
      toVars
    )
      .fromTo(
        element.querySelector('.GetInTouch__mail'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.GetInTouch__wantedly'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.GetInTouch__twitter'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.GetInTouch__github'),
        fromVars,
        toVars,
        '-=1'
      )
      .fromTo(
        element.querySelector('.GetInTouch__window > img'),
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        '-=0.8'
      );
  });
  return (
    <div className='GetInTouch container' ref={ref}>
      <div className='GetInTouch__Inner container__Inner'>
        <div className='GetInTouch__texts container__texts'>
          <div className='GetInTouch__text__title container__text__title'>
            <h1>Get In Touch</h1>
          </div>
          <div className='GetInTouch__text__link'>
            <div className='GetInTouch__text__linkitem'>
              <a href='#/' alt=''>
                <p className='GetInTouch__mail'>drgon8otsuka@gmail.com</p>
              </a>
            </div>
            <div className='GetInTouch__text__linkitem'>
              <a href='#/' alt=''>
                <p className='GetInTouch__wantedly'>Wantedly</p>
              </a>
            </div>
            <div className='GetInTouch__text__linkitem'>
              <a href='#/'>
                <img className='GetInTouch__twitter' src={twitter} alt='' />
              </a>
              <a href='#/'>
                <img className='GetInTouch__github' src={github} alt='' />
              </a>
            </div>
          </div>
        </div>
        <div className='GetInTouch__img container__img'>
          <div className='GetInTouch__window'>
            <img src={window} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
