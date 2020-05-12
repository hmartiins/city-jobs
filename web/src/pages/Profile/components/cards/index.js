import React from 'react';

import classes from './styles.module.css';

import {
  Card,  
  CardContent,
  Typography
} from '@material-ui/core'

import {   
  FaRegEnvelope,
  FaPhone,
  FaDiscord
} from 'react-icons/fa';

export default function Cards(){
   return(
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
)};
