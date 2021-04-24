import React, { useEffect } from 'react';
import './Scene.css';

import Parallax from 'parallax-js';

import astronaut from '../../../../images/TopPage/topsvg/astronaut.svg';
import background from '../../../../images/TopPage/topsvg/background.svg';
import backplanet from '../../../../images/TopPage/topsvg/backplanet.svg';
import moonface from '../../../../images/TopPage/topsvg/moonface.svg';
import planet from '../../../../images/TopPage/topsvg/planet.svg';
import rocket from '../../../../images/TopPage/topsvg/rocket.svg';

export default function Scene() {
  useEffect(() => {
    const scene = document.getElementById('scene');
    // eslint-disable-next-line
    const parallaxInstance = new Parallax(scene);
  }, []);

  return (
    <div data-relative-input='true' id='scene'>
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
