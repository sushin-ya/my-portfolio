import React, { useEffect, useRef } from 'react';
import './GetInTouch.css';

import window from '../../../images/TopPage/getintouchsvg/window.svg';
import twitter from '../../../images/twitter.svg';
import github from '../../../images/github.svg';
import slideAnimationInit from '../../../app/slideAnimationInit';
import { slideTextAnimation } from '../../../app/TopPageAnimation';

export default function GetInTouch() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.GetInTouch' });
    slideTextAnimation(element, tl, '.GetInTouch__text__title', '');
    slideTextAnimation(element, tl, '.GetInTouch__mail');
    slideTextAnimation(element, tl, '.GetInTouch__wantedly');
    slideTextAnimation(element, tl, '.GetInTouch__twitter');
    slideTextAnimation(element, tl, '.GetInTouch__github', '-=1');

    tl.fromTo(
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
