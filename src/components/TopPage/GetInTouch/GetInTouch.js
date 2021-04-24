import React from 'react';
import './GetInTouch.css';

import window from '../../../images/getintouchsvg/window.svg';
import twitter from '../../../images/twitter.svg';
import github from '../../../images/github.svg';

export default function GetInTouch() {
  return (
    <div className='GetInTouch container'>
      <div className='GetInTouch__Inner container__Inner'>
        <div className='GetInTouch__texts container__texts'>
          <div className='GetInTouch__text__title container__text__title'>
            <h1>Get In Touch</h1>
          </div>
          <div className='GetInTouch__text__link'>
            <div className='GetInTouch__text__linkitem'>
              <a href='#/' alt=''>
                <p>drgon8otsuka@gmail.com</p>
              </a>
            </div>
            <div className='GetInTouch__text__linkitem'>
              <a href='#/' alt=''>
                <p>Wantedly</p>
              </a>
            </div>
            <div className='GetInTouch__text__linkitem'>
              <a href='#/'>
                <img className='GetInTouch__twitter' src={twitter} alt='' />
              </a>
              <a href='#/'>
                <img className='GetInTouch__github' src={github} alt='' />
              </a>
            </div>
          </div>
        </div>
        <div className='GetInTouch__img'>
          <div className='GetInTouch__window'>
            <img src={window} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
