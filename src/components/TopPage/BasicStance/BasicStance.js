import React from 'react';
import './BasicStance.css';
import { Link } from 'react-router-dom';

import moonrocket from '../../../images/basicstancesvg/moonrocket.svg';

export default function BasicStance() {
  return (
    <div className='BasicStance container'>
      <div className='BasicStance__Inner container__Inner'>
        <div className='BasicStance__texts container__texts'>
          <div className='BasicStance__text__title container__text__title'>
            <h1>Basic Stance</h1>
          </div>
          <div className='BasicStance__text__lead container__text__lead'>
            <p>基本的な考え方についてです。</p>
            <p>technology / design / culture</p>
          </div>
          <div className='BasicStance__text__btn container__text__btn'>
            <Link to='/basicstance'>
              <span>read more</span>
            </Link>
          </div>
        </div>
        <div className='BasicStance__img container__img'>
          <div className='BasicStance__moonrocket'>
            <img src={moonrocket} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
