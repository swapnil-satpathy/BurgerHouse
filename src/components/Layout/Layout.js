import React from 'react';
import Aux from '../../HOC/Aux.js';
import styles from './Layout.module.css';
const layout = (props) => {
  return (
    <Aux>
    <div>Toolbar,Sidedrawer,Backdrop </div>
    <main className={styles.Content}>
        {props.children}
    </main>
    </Aux>
  )
}

export default layout;
