import React, { useEffect, useRef } from 'react';
import './Scene.css';

import Parallax from 'parallax-js';

import astronaut from '../../../../images/TopPage/topsvg/astronaut.svg';
import background from '../../../../images/TopPage/topsvg/background.svg';
import backplanet from '../../../../images/TopPage/topsvg/backplanet.svg';
import moonface from '../../../../images/TopPage/topsvg/moonface.svg';
import planet from '../../../../images/TopPage/topsvg/planet.svg';
import rocket from '../../../../images/TopPage/topsvg/rocket.svg';
import slideAnimationInit from '../../../../app/slideAnimationInit';
import { imgAnimation } from '../../../../app/animations';

export default function Scene() {
  useEffect(() => {
    const scene = document.getElementById('scene');
    // eslint-disable-next-line
    const parallaxInstance = new Parallax(scene);
  }, []);

  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let tl = slideAnimationInit({ trigger: '.Top' });
    imgAnimation(element, tl, '.Top__planet > img');
    imgAnimation(element, tl, '.Top__backplanet > img');
    imgAnimation(element, tl, '.Top__rocket > img');
    imgAnimation(element, tl, '.Top__astronaut > img');

    tl.to(element.querySelector('.Top__astronaut > img'), {
      keyframes: [
        { y: -100, duration: 0.4, ease: 'power1' },
        { y: 0, duration: 0.3, delay: 0.1 },
      ],
      repeat: 1,
    }).to(
      element.querySelector('.Top__backplanet > img'),
      {
        rotation: 360,
        repeat: -1,
        ease: 'none',
        duration: 10,
      },
      '-=0.5'
    );
  }, []);

  return (
    <div data-relative-input='true' id='scene' ref={ref}>
      <div data-depth='0.1' className='Top__background'>
        <img src={background} alt='' />
      </div>
      <div data-depth='0.4' className='Top__backplanet'>
        <img src={backplanet} alt='' />
      </div>
      <div data-depth='0.8' className='Top__planet'>
        <img src={planet} alt='' />
      </div>
      <div data-depth='0.4' className='Top__moonface'>
        <img src={moonface} alt='' />
      </div>
      <div data-depth='1.0' className='Top__astronaut'>
        <img src={astronaut} alt='' />
      </div>
      <div data-depth='0.6' className='Top__rocket'>
        <img src={rocket} alt='' />
      </div>
    </div>
  );
}
