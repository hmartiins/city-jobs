import React from 'react';

import img404 from './img/pageNotFound.svg';

import classes from './styles.module.css';
import '../../../global.css';

export default function Login(){
   return(
      <div className={classes.container}>
         <div className={classes.img}>
            <img src={img404} alt="Error 404, not found"/>
         </div>
         <div className={classes.text}>
            <h2>Error 404, página não encontrada :P</h2>
         </div>
      </div>
   );
}