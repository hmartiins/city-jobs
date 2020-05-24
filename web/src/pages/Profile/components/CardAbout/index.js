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
           style={{marginLeft: 30, marginTop: 10, fontSize: 20}}
         >
            Sobre:
         </Typography>
         <Typography
            variant= 'body2'
            style={{
               marginTop: 10, 
               paddingLeft: 22, 
               color: '#4d4d4d',
               paddingRight: 10.5
            }}
            
         >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, fugiat est. Sunt rem tempore veritatis tenetur modi similique magnam vitae laborum esse, iure ducimus nam quam culpa exercitationem molestias commodi.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam possimus magnam ratione quam commodi repellendus, soluta officia in corporis sapiente nesciunt dolor doloremque adipisci quibusda?
         </Typography>
        </Card>
      </div>
   );
}