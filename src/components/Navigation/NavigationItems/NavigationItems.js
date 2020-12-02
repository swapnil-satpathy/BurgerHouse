import React from 'react';
import styles from './NavigationItems.module.css';
import Navigationitem from '../NavigationItem/NavigationItem';
const navigationitems = () => {
  return(
  <ul className={styles.Navigationitems}>
      <Navigationitem link="/" active>
          Burger Builder
      </Navigationitem>
      <Navigationitem link="/">
          CHECKOUT
      </Navigationitem>
  </ul>
);
}

export default navigationitems;
