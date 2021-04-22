import React from 'react';
// import classes from './TopPage.module.css';

import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import BasicStance from './BasicStance/BasicStance';
import Works from './Works/Works';
import GetInTouch from './GetInTouch/GetInTouch';

export default function TopPage() {
  return (
    <>
      <Top />
      <AboutMe />
      <BasicStance />
      <Works />
      <GetInTouch />
    </>
  );
}
