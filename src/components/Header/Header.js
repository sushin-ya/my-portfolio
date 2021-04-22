import React from 'react';
import classes from './Header.module.css';

import { HamburgerSpin } from 'react-animated-burgers';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';

export default function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__Inner}>
        <div>
          <a href='#/'>tsuka-ryu</a>
        </div>
        <ul>
          <li>
            <a href='#/'>
              <img className={classes.twitter} src={twitter} alt='' />
            </a>
          </li>
          <li>
            <a href='#/'>
              <img className={classes.github} src={github} alt='' />
            </a>
          </li>
          <li>
            <a href='#/'>Wantedly</a>
          </li>
          <li>
            <a href='#/'>
              <HamburgerSpin
                className={classes.hamburgerspin}
                barColor='#fff'
                isActive={false}
                toggleButton={() => {}}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
