import React from 'react';
import styles from './NavigationItem.module.css';
const navigationitem=(props)=>{
  return(
    <li className={styles.Navigationitem}>
    <a href={props.link}
    className={props.active ? styles.active:null}>
    {props.children} </a></li>
  )
}

export default navigationitem;
