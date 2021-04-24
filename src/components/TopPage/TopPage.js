import React from 'react';
import './TopPage.css';

import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import BasicStance from './BasicStance/BasicStance';
import Works from './Works/Works';
import GetInTouch from './GetInTouch/GetInTouch';

export default function TopPage() {
  return (
    <div className='TopPage scroll-snapping'>
      <Top />
      <AboutMe />
      <BasicStance />
      <Works />
      <GetInTouch />
    </div>
  );
}
