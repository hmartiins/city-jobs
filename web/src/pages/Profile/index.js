import React from 'react';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
   Avatar, 
   Card, 
   CardActions, 
   CardContent,
   Button, 
   Typography
} from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors';
import { 
   FaFacebook, 
   FaInstagram, 
   FaLinkedin, 
   FaTwitter, 
   FaRegEnvelope,
   FaPhone,
   FaDiscord
} from 'react-icons/fa';

import NavigationBar from '../NavBar/NavigationBar';

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
         <div className={classes.cardContainer}>
         <Card className={classes.root}>
            <CardContent>
               <Typography className={classes.title} color="textSecondary" gutterBottom>
                  História fornecida por Henrique Martins
               </Typography>
               <Typography variant="h5" component="h2">
                  História
               </Typography>
               <Typography variant="body2" component="p">
                  <div className={classes.historyText}>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eligendi tenetur nihil porro cupiditate quasi impedit veniam, vel, temporibus adipisci obcaecati qui distinctio eum esse, natus neque quisquam quam officia!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ducimus quo dolor ullam ea, officia nam tempora unde atque, ipsam, sequi nihil. Dicta eligendi unde voluptates quaerat amet vel provident!
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime perspiciatis eveniet maiores tenetur velit molestias impedit illo facere architecto explicabo, magni deleniti eos quo aliquid sit a fugiat voluptatum est?
                  </div>
               </Typography>
            </CardContent>
         </Card>
         <Card className={classes.root2}>
            <CardContent>
               <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Contatos fornecidos por Henrique Martins
               </Typography>
               <Typography variant="h5" component="h2">
                  Entre em contato
               </Typography>
               <div className={classes.contato}>
                  <FaRegEnvelope className={classes.iconEmail} color="#adadad"/>
                  <span className={classes.iconsTitleCntt}>Email:</span>
                  <p className={classes.textIconsCntt}>hmartins224@gmail.com</p><br/>
                  <FaPhone className={classes.iconEmail} color="#adadad"/>
                  <span className={classes.iconsTitleCntt}>Telefone:</span>
                  <p className={classes.textIconsCntt}>(13) 99667-0465</p><br/>
                  <FaDiscord className={classes.iconEmail} color="#adadad"/>
                  <span className={classes.iconsTitleCntt}>Discord:</span>
                  <p className={classes.textIconsCntt}>Henriquinho dos Game #06391</p>
                  <br />
               </div>
            </CardContent>
            </Card>
         </div>
      </div>   
   );
}