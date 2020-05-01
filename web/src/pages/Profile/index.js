import React from 'react';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors';

import NavigationBar from '../NavBar/NavigationBar';

import classes from './styles.module.css';

//import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
   purple: {
     color: theme.palette.getContrastText(deepPurple[500]),
     backgroundColor: deepPurple[500],
     height: 100,
     width:  100,
   },
 }));

export default function Profile(){
   const stylesMUI = useStyles();
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
      <div className="container" onLoad={verifyLogin()}>
         <div className={classes.header}>
            <NavigationBar />
         </div>
         <div className={classes.content}>  
            <div className={classes.avatar}>
               <Avatar className={stylesMUI.purple}>OP</Avatar>
            </div>
         </div>
      </div>   
   );
}