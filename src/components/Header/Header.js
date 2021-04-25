import React from 'react';
import './Header.css';

import { HamburgerSpin } from 'react-animated-burgers';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';

export default function Header() {
  return (
    <header className='Header'>
      <div className='Header__Inner'>
        <div>
          <a href='/'>tsuka-ryu</a>
        </div>
        <ul>
          <li>
            <a href='#/'>
              <img className='Header__twitter' src={twitter} alt='' />
            </a>
          </li>
          <li>
            <a href='#/'>
              <img className='Header__github' src={github} alt='' />
            </a>
          </li>
          <li>
            <a href='#/'>Wantedly</a>
          </li>
          <li>
            <a href='#/'>
              <HamburgerSpin
                className='Header__hamburgerspin'
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
