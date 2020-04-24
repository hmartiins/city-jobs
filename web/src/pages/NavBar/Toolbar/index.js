import React from 'react';

import DrawerToggleButton from '../SideDrawer/drawerToggleButton';

import classes from './styles.module.css';
import '../../../global.css';

const Toolbar = props => (
   <div className={classes.container}>
      <header className={classes.toolbar}>
      <nav className={classes.toolbarNavigation}>
         <div className={classes.toolbarToggleButton}>
            <DrawerToggleButton click={props.drawerClickHandle}/>
         </div>
         <div className={classes.toolbarLogo}><a href="/">Logo</a></div>
         <div className={classes.spacer} />
         <div className={classes.toolbarNavigationItens}>
            <ul>
            <li><a href="a">Profile</a></li>
            <li><a href="a">Feed</a></li>
            </ul>
         </div>
      </nav>
      </header>
   </div>
);

export default Toolbar;