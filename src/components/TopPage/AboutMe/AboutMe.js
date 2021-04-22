import React from 'react';
import classes from './AboutMe.module.css';

import astronaut from '../../../images/aboutmesvg/astronaut.svg';
import planet from '../../../images/aboutmesvg/planet.svg';

export default function AboutMe() {
  return (
    <div className={classes.AboutMe}>
      <div className={classes.AboutMe__Inner}>
        <div className={classes.AboutMe__texts}>
          <div className={classes.AboutMe__text__title}>
            <h1>About Me</h1>
          </div>
          <div className={classes.AboutMe__text__lead}>
            <p>未経験のdeveloper志望です。</p>
            <p>Who I am / Skill / Hobby</p>
          </div>
          <div className={classes.AboutMe__text__btn}>
            <a href='#/' alt=''>
              <span>read more</span>
            </a>
          </div>
        </div>
        <div className={classes.AboutMe__img}>
          <div className={classes.astronaut}>
            <img src={astronaut} alt='' />
          </div>
          <div className={classes.planet}>
            <img src={planet} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
