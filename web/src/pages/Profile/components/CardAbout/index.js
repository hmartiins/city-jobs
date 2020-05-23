import React from 'react';

import { Card, Typography } from '@material-ui/core';
import {  } from 'react-icons/fa';

import classes from './styles.module.css';

//import api from '../../services/api';
export default function CardAbout(){
   return(
      <div className={classes.container}>
        <Card className={classes.cardContainer}>
         <Typography 
           variant = 'h6' 
           gutterBottom
           style={{marginLeft: 30}}
         >
            Sobre o usuário
         </Typography>
        </Card>
      </div>
   );
}