import React, { useEffect, useRef } from 'react';
import './WhoIAm.css';
import { gsap } from 'gsap';

export default function WhoIAm() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: '.WhoIAm',
        toggleActions: 'restart none restart none',
      },
      defaults: { duration: 1, ease: 'power3.inOut' },
    });
    const fromVars = { opacity: 0, x: -100 };
    const toVars = { opacity: 1, x: 0 };

    tl.fromTo(element.querySelector('.WhoIAm__text__title'), fromVars, toVars)
      .fromTo(
        element.querySelector('.WhoIAm__text__lead'),
        fromVars,
        toVars,
        '-=0.7'
      )
      .fromTo(
        element.querySelector('.WhoIAm__text__description'),
        fromVars,
        toVars,
        '-=0.7'
      );
  });
  return (
    <div className='WhoIAm container' ref={ref}>
      <div className='WhoIAm__Inner container__Inner'>
        <div className='WhoIAm__texts container__texts'>
          <div className='WhoIAm__text__title container__text__title'>
            <h1>Who I Am</h1>
          </div>
          <div className='WhoIAm__text__lead container__text__lead'>
            <p>Ryutaro Otsuka</p>
            <p>(@tsuka-ryu)</p>
          </div>
          <div className='WhoIAm__text__description'>
            <p>
              1994年生まれ、東京育ち。情報系の大学院を卒業後、大手Slerに就職。
              <br />
              某共済団体の基幹システムにて、要件定義〜運用フェーズの進捗管理や顧客折衝などを2年ほど担当。
              <br />
              炎上プロジェクトで立ち回る中、開発スキルが身につかないことにギャップを感じ、2020年に退職。
              <br />
              現在転職に向けて勉強中です。
              <br />
              未経験ですが、Webデザインやモダンな技術をつかったアプリケーション開発に興味があります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
