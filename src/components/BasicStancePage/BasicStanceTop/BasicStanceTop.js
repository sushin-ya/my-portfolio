import React, { useEffect, useRef } from 'react';
import './BasicStanceTop.css';

import moonrocket from '../../../images/TopPage/basicstancesvg/moonrocket.svg';
import { opacityAnimation, slideTextAnimation } from '../../../app/animations';
import slideAnimationInit from '../../../app/slideAnimationInit';

export default function BasicStanceTop() {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.BasicStance__Top' });
    slideTextAnimation(element, tl, '.BasicStance__Top__text__title');
    slideTextAnimation(element, tl, '.BasicStance__Top__text__lead');
    slideTextAnimation(element, tl, '.BasicStance__Top__text__subtitle');
    opacityAnimation(element, tl, '.BasicStance__Top__moonrocket > img');
  });
  return (
    <div className='BasicStance__Top container' ref={ref}>
      <div className='BasicStance__Top__Inner container__Inner'>
        <div className='BasicStance__Top__texts container__texts'>
          <div className='BasicStance__Top__text__title container__text__title'>
            <h1>Basic Stance</h1>
          </div>
          <div className='BasicStance__Top__text__lead container__text__lead'>
            <p>基本的な考え方についてです。</p>
            <p>technology / design / culture</p>
          </div>
          <div className='BasicStance__Top__text__subtitle container__text__subtitle'>
            <p>tsuka-ryu</p>
            <p>PORTFOLIO</p>
          </div>
        </div>
        <div className='BasicStance__Top__img container__img'>
          <div className='BasicStance__Top__moonrocket'>
            <img src={moonrocket} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
