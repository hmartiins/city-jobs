import React from 'react';

import { useHistory } from 'react-router-dom';

import NavigationBar from '../NavBar/NavigationBar';
import CardProfile from './components/CardProfile/index.js';
import CardAbout from './components/CardAbout/index.js';

import classes from './styles.module.css';

//import api from '../../services/api';
export default function Profile(){
   const history = useHistory();

   function verifyLogin(){
      try {
         const login = localStorage.getItem('login');
   
         if(login !== 'true'){
            history.push('/unauthorized');
         }

      } catch (err) {
         history.push('/unauthorized');
      }
   }
      
   return(
      <div className={classes.container}>
         <div className={classes.z}></div>
         <div className={classes.containerBody} style={{marginTop: 10}} onLoad={verifyLogin()}>
            <div className={classes.header}>
               <NavigationBar />
            </div>  
            <div className={classes.containerContent}>
               <CardProfile />
               <CardAbout />
            </div>
         </div>
      </div>
   );
}