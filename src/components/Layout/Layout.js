import React from 'react';
import Aux from '../../HOC/Aux.js';
const layout = (props) => {
  return (
    <Aux>
    <div>Toolbar,Sidedrawer,Backdrop </div>
    <main>
        {props.children}
    </main>
    </Aux>
  )
}

export default layout;
