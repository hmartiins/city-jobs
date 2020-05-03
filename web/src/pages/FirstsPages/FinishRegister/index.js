import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaBabyCarriage, FaAward, FaCommentMedical } from 'react-icons/fa';

import api from '../../../services/api';

import img1 from './img/finishRegister.svg';

import classes from './styles.module.css';
import '../global.css';

export default function FinishRegister(){
   return(
      <div className={classes.container}>
         <div className={classes.registerContainer}>
            <section className={classes.form}>
               <form>
                  <h2>Cadastro</h2>
                  {/* <span>
                     Visando a experiência do seu cliente, informe alguns dados 
                     a mais antes de podermos prosseguir, a sua data de nascimento,
                     e uma breve descrição sobre o seu serviço.
                  </span> */}
                  <div className={[classes.inputDiv, classes.one].join(' ')}>
                     <i className="i">
                        <FaBabyCarriage size={17} /> 
                     </i>
                     <div className={classes.div}>
                        <input 
                           placeholder="nascimento"
                           type="date" 
                           className="input"
                        />
                     </div>
                  </div>
                  <div className={classes.space}/>
                  <div className={[classes.inputDiv, classes.one].join(' ')}>
                     <i className="i">
                        <FaAward size={17} />
                     </i>
                     <div className={classes.div}>
                        <input 
                           placeholder="especialidade"
                           type="text" 
                           className="input"
                        />
                     </div>
                  </div>
                  <div className={[classes.inputDiv, classes.one].join(' ')}>
                     <i className="i">
                        <FaCommentMedical size={17} />
                     </i>
                     <div className={classes.div}>
                        <input 
                           placeholder="descrição"
                           type="text" 
                           className="input"
                        />
                     </div>
                  </div>
                  <a href="coe">Meus dados estão seguros ?</a>
                  <button className="button" type="submit">Confirmar</button>
               </form>
            </section>
         </div>
         <div className={classes.img}>   
            <img src={img1} alt="icon"/>
         </div>
      </div>
   );
}