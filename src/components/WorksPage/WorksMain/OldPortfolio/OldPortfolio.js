import React, { useEffect, useRef } from 'react';

import oldPortfolio from '../../../../images/WroksPage/old_portfolio.png';
import github from '../../../../images/github.svg';
import {
  opacityUpAnimation,
  slideTextAnimation,
} from '../../../../app/animations';
import slideAnimationInit from '../../../../app/slideAnimationInit';

export default function Cinamas() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.Works__oldPortfolio' });
    slideTextAnimation(element, tl, '.Works__oldPortfolio__title');
    slideTextAnimation(element, tl, '.Works__oldPortfolio__description');
    slideTextAnimation(element, tl, '.Works__oldPortfolio__skills');
    slideTextAnimation(element, tl, '.Works__oldPortfolio__github');
    opacityUpAnimation(element, tl, '.Works__oldPortfolio__img > img');
  }, []);
  return (
    <div className='Works__Main container Works__oldPortfolio' ref={ref}>
      <div className='Works__Main__Inner container__Inner'>
        <div className='Works__Main__Item'>
          <div className='Works__Main__Item__img Works__oldPortfolio__img'>
            <img src={oldPortfolio} alt='' />
          </div>
          <div className='Works__Main__Item__text'>
            <div className='Works__Main__Item__text__title Works__oldPortfolio__title'>
              <span>旧</span>ポートフォリオ
            </div>
            <div className='Works__Main__Item__text__description Works__oldPortfolio__description'>
              初めて作った自己紹介ページです。Reactナニモワカラナイのときに勢いで作りました。
            </div>
            <div className='Works__Main__Item__text__skills Works__oldPortfolio__skills'>
              HTML/CSS/React/Gatsby/responsive web design
            </div>
            <a
              href='https://github.com/tsuka-ryu/tsuka-ryu.github.io'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                className='Works__Main__Item__text__github Works__oldPortfolio__github'
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
