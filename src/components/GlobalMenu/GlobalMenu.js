import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './GlobalMenu.css';

export default function GlobalMenu({ open, menuToggle }) {
  return (
    <div className={open ? 'GlobalMenu open' : 'GlobalMenu'}>
      <ul>
        <li>
          <HashLink to='/#top' data-text='TOP' onClick={menuToggle}>
            <span>TOP</span>
          </HashLink>
        </li>
        <li>
          <NavLink to='/aboutme' data-text='ABOUT ME' onClick={menuToggle}>
            <span>ABOUT ME</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/basicstance'
            data-text='BASIC STANCE'
            onClick={menuToggle}
          >
            <span>BASIC STANCE</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/works' data-text='WORKS' onClick={menuToggle}>
            <span>WORKS</span>
          </NavLink>
        </li>
        <li>
          <HashLink to='/#getintouch' data-text='CONTACT' onClick={menuToggle}>
            <span>CONTACT</span>
          </HashLink>
        </li>
      </ul>
    </div>
  );
}
