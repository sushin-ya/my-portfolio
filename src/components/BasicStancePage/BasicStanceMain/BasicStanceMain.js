import React, { useEffect, useRef } from 'react';
import './BasicStanceMain.css';

import devices from '../../../images/BasicStancePage/icons/devices.svg';
import human from '../../../images/BasicStancePage/icons/human.svg';
import palette from '../../../images/BasicStancePage/icons/palette.svg';
import { opacityAnimation, slideTextAnimation } from '../../../app/animations';
import slideAnimationInit from '../../../app/slideAnimationInit';

export default function BasicStanceMain() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.BasicStance__Main' });

    slideTextAnimation(element, tl, '.BasicStance__Main__text__title');
    opacityAnimation(element, tl, '.BasicStance__Main__items');
  });
  return (
    <div className='BasicStance__Main container' ref={ref}>
      <div className='BasicStance__Main__Inner container__Inner'>
        <div className='BasicStance__Main__texts container__texts'>
          <div className='BasicStance__Main__text__title container__text__title'>
            <h1>BasicStance</h1>
          </div>
        </div>
        <div className='BasicStance__Main__items'>
          <div className='BasicStance__Main__item'>
            <img src={devices} alt='' />
            <h1 className='BasicStance__Main__item__title'>technology</h1>
            <p className='BasicStance__Main__item__subtitle'>
              &ldquo; Any sufficiently advanced technology is
              <br />
              indistinguishable from magic.&rdquo;
            </p>
            <p className='BasicStance__Main__item__description'>
              SF作家のアーサー・C・クラークは「十分に高度なテクノロジーは、魔法と区別することができない」という名言を残していますが、テクノロジーは、世界や個人に対して計り知れない影響力を持っていると思っています。魔法使いの弟子として、常に最新の技術のキャッチアップを行い、イノベーションにコミットしていきたいです。
            </p>
          </div>
          <div className='BasicStance__Main__item'>
            <img src={palette} alt='' />
            <h1 className='BasicStance__Main__item__title'>design</h1>
            <p className='BasicStance__Main__item__subtitle'>
              &ldquo; Design is not just what it looks like and feels like.
              <br />
              Design is how it works.&rdquo;
            </p>
            <p className='BasicStance__Main__item__description'>
              「デザインとは単にどのように見えるか、どのように感じるかということではない。どう機能するかだ」というジョブスの言葉にあるように、デザインはアートとは違い、アプリケーションをひとつの体験と捉えたときにその大部分を占める機能だと考えています。そのためデザインについても、より効果的な方法について学んでいきたいです。
            </p>
          </div>
          <div className='BasicStance__Main__item'>
            <img src={human} alt='' />
            <h1 className='BasicStance__Main__item__title'>culture</h1>
            <p className='BasicStance__Main__item__subtitle'>
              &ldquo; The customs and beliefs, art, way of life, and social
              organization of a particular country or group&rdquo;
            </p>
            <p className='BasicStance__Main__item__description'>
              小説・漫画・映画・音楽・絵画・思想・哲学など様々なカルチャーに興味があります。プログラミングやハッカー文化なども、独特の思想やカルチャーの総体であり、興味深いものの一つです。それらの歴史から、世の中のトレンドを予想することはとても有意義なことだと思っています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
