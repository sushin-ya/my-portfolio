import React from 'react';
import './AboutMePage.css';

import AboutMeTop from './AboutMeTop/AboutMeTop';
import Hobby from './Hobby/Hobby';
import Skill from './Skill/Skill';
import WhoIAm from './WhoIAm/WhoIAm';

export default function AboutMePage() {
  return (
    <div className='AboutMePage scroll-snapping'>
      <AboutMeTop />
      <WhoIAm />
      <Skill />
      <Hobby />
    </div>
  );
}
