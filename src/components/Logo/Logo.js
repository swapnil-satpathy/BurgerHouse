import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';
const logo=(props) => {
  return(
    <div className={styles.Logo}>
      <img src={burgerlogo} alt="Burger"/>
    </div>
  )
}

export default logo;
