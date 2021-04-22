import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.copyright}>&copy; tsukaryu 2021</div>
    </footer>
  );
}
