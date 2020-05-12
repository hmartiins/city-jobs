import React from 'react';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors';
import { 
   FaFacebook, 
   FaInstagram, 
   FaLinkedin, 
   FaTwitter, 
} from 'react-icons/fa';

import NavigationBar from '../NavBar/NavigationBar';
import Cards from './cards/index.js';

import classes from './styles.module.css';

//import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
   purple: {
     color: theme.palette.getContrastText(deepPurple[500]),
     backgroundColor: deepPurple[500],
     height: 130,
     width:  130,
   }
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
               <Avatar className={stylesMUI.purple}>HM</Avatar>
            </div>
            <div className={classes.info}>
               <h2>
                  Henrique Martins 
                  <span className={classes.spanName}> 
                     (NodeJs developer)
                  </span>                   
               </h2>
               <h3 className={classes.born}>
                  Nascimento:
                  <span className={classes.date}>
                     19/03/2004
                  </span>
               </h3>
               <h3 className={classes.description}>
                  Descrição: 
                  <span className={classes.descriptionText}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum saepe recusandae mollitia, tempore ad illo, nulla provident a dolorum accusamus? Vero asperiores, perferendis autem tempora vitae laborum eos iusto!
                  </span>
               </h3>
               <div className={classes.iconsSocial}>
                  <FaFacebook />
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitter />
               </div>
            </div>
         </div>
         <Cards />
      </div>   
   );
}