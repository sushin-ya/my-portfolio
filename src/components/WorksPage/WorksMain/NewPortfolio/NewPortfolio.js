import React, { useEffect, useRef } from 'react';

import newPortfolio from '../../../../images/WroksPage/new_portfolio.png';
import github from '../../../../images/github.svg';
import {
  opacityUpAnimation,
  slideTextAnimation,
} from '../../../../app/animations';
import slideAnimationInit from '../../../../app/slideAnimationInit';

export default function NewPortfolio() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.Works__newPortfolio' });
    slideTextAnimation(element, tl, '.Works__newPortfolio__title');
    slideTextAnimation(element, tl, '.Works__newPortfolio__description');
    slideTextAnimation(element, tl, '.Works__newPortfolio__skills');
    slideTextAnimation(element, tl, '.Works__newPortfolio__github');
    opacityUpAnimation(element, tl, '.Works__newPortfolio__img > img');
  }, []);
  return (
    <div className='Works__Main container Works__newPortfolio' ref={ref}>
      <div className='Works__Main__Inner container__Inner'>
        <div className='Works__Main__Item'>
          <div className='Works__Main__Item__img Works__newPortfolio__img'>
            <img src={newPortfolio} alt='' />
          </div>
          <div className='Works__Main__Item__text'>
            <div className='Works__Main__Item__text__title Works__newPortfolio__title'>
              tsuka-ryu PORTFOLIO
            </div>
            <div className='Works__Main__Item__text__description Works__newPortfolio__description'>
              本サイトです。 デザインから実装まですべて作成しました。
            </div>
            <div className='Works__Main__Item__text__skills Works__newPortfolio__skills'>
              HTML/CSS/React/GSAP/Parallax.js
            </div>
            <a href='#/'>
              <img
                className='Works__Main__Item__text__github Works__newPortfolio__github'
                src={github}
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
