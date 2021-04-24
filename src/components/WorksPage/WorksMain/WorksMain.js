import React from 'react';
import './WorksMain.css';

import newPortfolio from '../../../images/WroksPage/new_portfolio.png';
import oldPortfolio from '../../../images/WroksPage/old_portfolio.png';
import cinemas from '../../../images/WroksPage/cinemas.png';
import github from '../../../images/github.svg';
import backplanet from '../../../images/TopPage/topsvg/backplanet.svg';

export default function WorksMain() {
  return (
    <div className='Works__Main__Container'>
      <div className='Works__Main__Background'>
        <img src={backplanet} alt='' />
      </div>
      <div className='Works__Main container'>
        <div className='Works__Main__Inner container__Inner'>
          <div className='Works__Main__Item'>
            <div className='Works__Item__img'>
              <img src={newPortfolio} alt='' />
            </div>
            <div className='Works__Item__text'>
              <div className='Works__Item__text__title'>
                tsuka-ryu PORTFOLIO
              </div>
              <div className='Works__Item__text__description'>
                本サイトです。
                <br />
                デザインから実装まですべて作成しました。
              </div>
              <div className='Works__Item__text__skills'>
                HTML/CSS/React/GSAP/Swiper.js/Parallax.js
              </div>
              <a href='#/'>
                <img
                  className='Works__Item__text__github'
                  src={github}
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='Works__Main container'>
        <div className='Works__Main__Inner container__Inner'>
          <div className='Works__Main__Item'>
            <div className='Works__Item__img'>
              <img src={cinemas} alt='' />
            </div>
            <div className='Works__Item__text'>
              <div className='Works__Item__text__title'>CINEMA&apos;S</div>
              <div className='Works__Item__text__description'>
                映画人間のためのレビューサイトをコンセプトとして、
                <br />
                Railsの練習のために作成しました。
                <span>※デプロイはしていません。</span>
              </div>
              <div className='Works__Item__text__skills'>
                HTML/CSS/Slim/Ruby on Rails
              </div>
              <a href='#/'>
                <img
                  className='Works__Item__text__github'
                  src={github}
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='Works__Main container'>
        <div className='Works__Main__Inner container__Inner'>
          <div className='Works__Main__Item'>
            <div className='Works__Item__img'>
              <img src={oldPortfolio} alt='' />
            </div>
            <div className='Works__Item__text'>
              <div className='Works__Item__text__title'>
                <span>旧</span>ポートフォリオ
              </div>
              <div className='Works__Item__text__description'>
                初めて作った自己紹介ページです。
                <br />
                Reactナニモワカラナイのときに勢いで作りました。
              </div>
              <div className='Works__Item__text__skills'>
                HTML/CSS/React/Gatsby/responsive web design
              </div>
              <a href='#/'>
                <img
                  className='Works__Item__text__github'
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
