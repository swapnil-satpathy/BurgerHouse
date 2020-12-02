import React from 'react';
import styles from './Modal.module.css';
import Aux from '../../../HOC/Aux';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => {
  return(
    <Aux>
    <Backdrop ordernow={props.ordernow} clicked={props.modalClosed}/>
    <div className={styles.Modal} style={{
      transform: props.ordernow ?'translateY(0)':'translateY(-100vh)',
      opacity: props.ordernow?'1':'0'
    }}>
      {props.children}
    </div>
    </Aux>
  )
};

export default modal;
