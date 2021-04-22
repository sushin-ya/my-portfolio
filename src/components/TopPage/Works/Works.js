import React from 'react';
import classes from './Works.module.css';

import astronaut from '../../../images/workssvg/astronaut.svg';
import rocket from '../../../images/workssvg/rocket.svg';
import planet from '../../../images/workssvg/planet.svg';

export default function Works() {
  return (
    <div className={classes.Works}>
      <div className={classes.Works__Inner}>
        <div className={classes.Works__texts}>
          <div className={classes.Works__text__title}>
            <h1>Works</h1>
          </div>
          <div className={classes.Works__text__lead}>
            <p>これまで制作した成果物です。</p>
          </div>
          <div className={classes.Works__text__btn}>
            <a href='#/' alt=''>
              <span>read more</span>
            </a>
          </div>
        </div>
        <div className={classes.Works__img}>
          <div className={classes.planet}>
            <img src={planet} alt='' />
          </div>
          <div className={classes.rocket}>
            <img src={rocket} alt='' />
          </div>
          <div className={classes.astronaut}>
            <img src={astronaut} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
