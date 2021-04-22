import React from 'react';
import classes from './Top.module.css';

import Scene from './Scene/Scene';

export default function Top() {
  return (
    <div className={classes.Top}>
      <div className={classes.Top__Inner}>
        <div className={classes.Top__texts}>
          <div className={classes.Top__text__title}>
            <h1>tsuka-ryu</h1>
          </div>
          <div className={classes.Top__text__lead}>
            <p>web developer / designer</p>
          </div>
          <div className={classes.Top__text__subtitle}>
            <h2>PORTFOLIO</h2>
          </div>
        </div>
        <div className={classes.Top__img}>
          <Scene />
        </div>
      </div>
    </div>
  );
}
