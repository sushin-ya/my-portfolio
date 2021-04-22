import React from 'react';
import classes from './BasicStance.module.css';

import moonrocket from '../../../images/basicstancesvg/moonrocket.svg';

export default function BasicStance() {
  return (
    <div className={classes.BasicStance}>
      <div className={classes.BasicStance__Inner}>
        <div className={classes.BasicStance__texts}>
          <div className={classes.BasicStance__text__title}>
            <h1>Basic Stance</h1>
          </div>
          <div className={classes.BasicStance__text__lead}>
            <p>基本的な考え方についてです。</p>
            <p>technology / design / culture</p>
          </div>
          <div className={classes.BasicStance__text__btn}>
            <a href='#/' alt=''>
              <span>read more</span>
            </a>
          </div>
        </div>
        <div className={classes.BasicStance__img}>
          <div className={classes.moonrocket}>
            <img src={moonrocket} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
