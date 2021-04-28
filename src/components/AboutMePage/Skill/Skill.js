import React, { useEffect, useRef } from 'react';
import './Skill.css';
import { gsap } from 'gsap';

import html from '../../../images/AboutMePage/icons/html.svg';
import css from '../../../images/AboutMePage/icons/css.svg';
import javascript from '../../../images/AboutMePage/icons/javascript.svg';
import react from '../../../images/AboutMePage/icons/react.svg';
import rails from '../../../images/AboutMePage/icons/rails.svg';
import cpp from '../../../images/AboutMePage/icons/cpp.svg';

export default function Skill() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.Skill',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(element.querySelector('.Skill__text__title'), fromVars, toVars)
      .fromTo(
        element.querySelector('.Skill__text__description'),
        fromVars,
        toVars,
        '-=0.7'
      )
      .fromTo(
        element.querySelector('.Skill__icons'),
        { opacity: 0 },
        { opacity: 1 },
        '-=0.7'
      );
  });
  return (
    <div className='Skill container' ref={ref}>
      <div className='Skill__Inner container__Inner'>
        <div className='Skill__texts container__texts'>
          <div className='Skill__text__title container__text__title'>
            <h1>Skill</h1>
          </div>
          <div className='Skill__text__description'>
            <p>
              Progate、ドットインストール、Udemy、書籍などで独習しています。
              <br />
              おもに<span>React</span>
              で開発を行っています。ReactやVueなどトレンドの言語やライブラリに興味があります。
              <br />
              RailsはRailsチュートリアルや現場Railsなどで3ヶ月学習し、簡単な映画レビューサイトを作成しました。
              <br />
              今後は、Node.jsのバックエンドの勉強も行い、フルスタックエンジニアを目指していきたいです。
            </p>
          </div>
        </div>
        <div className='Skill__icons'>
          <div className='Skill__icons__item'>
            <img src={html} alt='' />
          </div>
          <div className='Skill__icons__item'>
            <img src={css} alt='' />
          </div>
          <div className='Skill__icons__item'>
            <img src={javascript} alt='' />
          </div>
          <div className='Skill__icons__item'>
            <img src={react} alt='' />
          </div>
          <div className='Skill__icons__item'>
            <img src={rails} alt='' />
          </div>
          <div className='Skill__icons__item'>
            <img src={cpp} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
