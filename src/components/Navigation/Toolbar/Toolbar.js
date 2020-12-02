import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems'
const toolbar=(props) => {
return(
  <header className={styles.Toolbar}>
      <div> MENU</div>
      <Logo />
      <nav>
        <Navigationitems />
      </nav>
  </header>
)
}

export default toolbar;
