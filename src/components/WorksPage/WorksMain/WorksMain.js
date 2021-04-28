import React from 'react';
import './WorksMain.css';

import backplanet from '../../../images/TopPage/topsvg/backplanet.svg';
import NewPortfolio from './NewPortfolio/NewPortfolio';
import Cinemas from './Cinemas/Cinemas';
import OldPortfolio from './OldPortfolio/OldPortfolio';

export default function WorksMain() {
  return (
    <div className='Works__Main__Container'>
      <div className='Works__Main__Background'>
        <img src={backplanet} alt='' />
      </div>
      <NewPortfolio />
      <Cinemas />
      <OldPortfolio />
    </div>
  );
}
