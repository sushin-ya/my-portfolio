import React, { useEffect, useRef } from 'react';

import cinemas from '../../../../images/WroksPage/cinemas.png';
import github from '../../../../images/github.svg';
import slideAnimationInit from '../../../../app/slideAnimationInit';
import {
  opacityUpAnimation,
  slideTextAnimation,
} from '../../../../app/animations';

export default function Cinemas() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.Works__cinemas' });
    slideTextAnimation(element, tl, '.Works__cinemas__title');
    slideTextAnimation(element, tl, '.Works__cinemas__description');
    slideTextAnimation(element, tl, '.Works__cinemas__skills');
    slideTextAnimation(element, tl, '.Works__cinemas__github');
    opacityUpAnimation(element, tl, '.Works__cinemas__img > img');
  }, []);
  return (
    <div className='Works__Main container Works__cinemas' ref={ref}>
      <div className='Works__Main__Inner container__Inner'>
        <div className='Works__Main__Item'>
          <div className='Works__Main__Item__img Works__cinemas__img'>
            <img src={cinemas} alt='' />
          </div>
          <div className='Works__Main__Item__text'>
            <div className='Works__Main__Item__text__title Works__cinemas__title'>
              CINEMA&apos;S
            </div>
            <div className='Works__Main__Item__text__description Works__cinemas__description'>
              映画人間のためのレビューサイトをコンセプトとして、Railsの練習のために作成しました。
              <br />
              <span>※デプロイはしていません。</span>
            </div>
            <div className='Works__Main__Item__text__skills Works__cinemas__skills'>
              HTML/CSS/Slim/Ruby on Rails
            </div>
            <a
              href='https://github.com/tsuka-ryu/cineman_app'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                className='Works__Main__Item__text__github Works__cinemas__github'
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
