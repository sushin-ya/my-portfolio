import React from 'react';
import classes from './GetInTouch.module.css';

import window from '../../../images/getintouchsvg/window.svg';
import twitter from '../../../images/twitter.svg';
import github from '../../../images/github.svg';

export default function GetInTouch() {
  return (
    <div className={classes.GetInTouch}>
      <div className={classes.GetInTouch__Inner}>
        <div className={classes.GetInTouch__texts}>
          <div className={classes.GetInTouch__text__title}>
            <h1>Get In Touch</h1>
          </div>
          <div className={classes.GetInTouch__text__link}>
            <div className={classes.GetInTouch__text__linkitem}>
              <a href='#/' alt=''>
                <p>drgon8otsuka@gmail.com</p>
              </a>
            </div>
            <div className={classes.GetInTouch__text__linkitem}>
              <a href='#/' alt=''>
                <p>Wantedly</p>
              </a>
            </div>
            <div className={classes.GetInTouch__text__linkitem}>
              <a href='#/'>
                <img className={classes.twitter} src={twitter} alt='' />
              </a>
              <a href='#/'>
                <img className={classes.github} src={github} alt='' />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.GetInTouch__img}>
          <div className={classes.window}>
            <img src={window} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
