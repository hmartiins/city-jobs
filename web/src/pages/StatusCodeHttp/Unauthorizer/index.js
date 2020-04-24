import React from 'react';

import img401 from './img/unauthorized.svg';

import classes from './styles.module.css';
import '../../../global.css';

export default function Login(){
   return(
      <div className={classes.container}>
         <div className={classes.img}>
            <img src={img401} alt="Error 401, unauthorized"/>
         </div>
         <div className={classes.text}>
            <h2>Error 401, se autentique para poder prosseguir :P</h2>
         </div>
      </div>
   );
}