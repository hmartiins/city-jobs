import React from 'react';

import classes from './stylesDTB.module.css';

const drawerToggleButton = props => (
   <button className={classes.toggleButton} onClick={props.click}>
      <div className={classes.toggleButtonLine}/>
      <div className={classes.toggleButtonLine}/>
      <div className={classes.toggleButtonLine}/>
   </button>
);

export default drawerToggleButton;