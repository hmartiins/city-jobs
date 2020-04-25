import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa'

import DrawerToggleButton from '../SideDrawer/drawerToggleButton';

import classes from './styles.module.css';
import '../../../global.css';


export default function Toolbar(props){
   const history = useHistory();
   
   function handleLougout(){
      localStorage.clear();
      history.push('/');
   }
   return(
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
               <li><a className={classes.a} href="a">Feed</a></li>
            </ul>
         </div>
         <button onClick={handleLougout} className={classes.button} type="button">
            <FaPowerOff size={25} color="#E02041" />
         </button>
      </nav>
      </header>
   </div>
)};
