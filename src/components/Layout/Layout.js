import React from 'react';
import Aux from '../../HOC/Aux.js';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout = (props) => {
  return (
    <Aux>
    <Toolbar />
    
    <main className={styles.Content}>
        {props.children}
    </main>
    </Aux>
  )
}

export default layout;
