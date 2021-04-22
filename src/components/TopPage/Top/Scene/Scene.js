import React, { useEffect } from 'react';
import classes from './Scene.module.css';

import Parallax from 'parallax-js';

import astronaut from '../../../../images/topsvg/astronaut.svg';
import background from '../../../../images/topsvg/background.svg';
import backplanet from '../../../../images/topsvg/backplanet.svg';
import moonface from '../../../../images/topsvg/moonface.svg';
import planet from '../../../../images/topsvg/planet.svg';
import rocket from '../../../../images/topsvg/rocket.svg';

export default function Scene() {
  useEffect(() => {
    const scene = document.getElementById('scene');
    // eslint-disable-next-line
    const parallaxInstance = new Parallax(scene);
  }, []);

  return (
    <div data-relative-input='true' id='scene'>
      <div data-depth='0.1' className={classes.background}>
        <img src={background} alt='' />
      </div>
      <div data-depth='0.4' className={classes.backplanet}>
        <img src={backplanet} alt='' />
      </div>
      <div data-depth='0.8' className={classes.planet}>
        <img src={planet} alt='' />
      </div>
      <div data-depth='0.4' className={classes.moonface}>
        <img src={moonface} alt='' />
      </div>
      <div data-depth='1.0' className={classes.astronaut}>
        <img src={astronaut} alt='' />
      </div>
      <div data-depth='0.6' className={classes.rocket}>
        <img src={rocket} alt='' />
      </div>
    </div>
  );
}
