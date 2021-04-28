import React, { useEffect, useRef } from 'react';
import './WorksMain.css';
import { gsap } from 'gsap';

import newPortfolio from '../../../images/WroksPage/new_portfolio.png';
import oldPortfolio from '../../../images/WroksPage/old_portfolio.png';
import cinemas from '../../../images/WroksPage/cinemas.png';
import github from '../../../images/github.svg';
import backplanet from '../../../images/TopPage/topsvg/backplanet.svg';

export default function WorksMain() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.Works__newPortfolio',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: 100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(
      element.querySelector('.Works__newPortfolio__title'),
      fromVars,
      toVars
    )
      .fromTo(
        element.querySelector('.Works__newPortfolio__description'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__newPortfolio__skills'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__newPortfolio__github'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__newPortfolio__img > img'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        '-=0.8'
      );
  }, []);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.Works__cinemas',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: 100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(element.querySelector('.Works__cinemas__title'), fromVars, toVars)
      .fromTo(
        element.querySelector('.Works__cinemas__description'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__cinemas__skills'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__cinemas__github'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__cinemas__img > img'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        '-=0.8'
      );
  }, []);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.Works__oldPortfolio',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: 100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(
      element.querySelector('.Works__oldPortfolio__title'),
      fromVars,
      toVars
    )
      .fromTo(
        element.querySelector('.Works__oldPortfolio__description'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__oldPortfolio__skills'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__oldPortfolio__github'),
        fromVars,
        toVars,
        '-=0.8'
      )
      .fromTo(
        element.querySelector('.Works__oldPortfolio__img > img'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        '-=0.8'
      );
  }, []);
  return (
    <div className='Works__Main__Container' ref={ref}>
      <div className='Works__Main__Background'>
        <img src={backplanet} alt='' />
      </div>
      <div className='Works__Main container Works__newPortfolio'>
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
                HTML/CSS/React/GSAP/Swiper.js/Parallax.js
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
      <div className='Works__Main container Works__cinemas'>
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
              <a href='#/'>
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
      <div className='Works__Main container Works__oldPortfolio'>
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
              <a href='#/'>
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
    </div>
  );
}
