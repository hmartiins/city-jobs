import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAddressCard, FaAt, FaLock } from 'react-icons/fa';

import api from '../../../services/api';

import img1 from './img/img.svg';

import classes from './styles.module.css';
import '../global.css';

export default function Register(){

   const[name, setName] = useState();
   const[email, setEmail] = useState();
   const[password, setPassword] = useState();
   const[passwordConfirm, setPasswordConfirm] = useState();
   
   const history = useHistory();
   
   async function handleRegister(e){
      e.preventDefault();
      
      const dataName = name;
      const dataEmail = email;
      const dataPassword = password;

      try {
         if(password === passwordConfirm){

            sessionStorage.setItem('dataName', dataName);
            sessionStorage.setItem('dataEmail', dataEmail);
            sessionStorage.setItem('dataPassword', dataPassword);

            history.push('/finishregister');
         }
         else if(password !== passwordConfirm){
            alert('As senhas não são iguais');
         }
      } catch (err) {
         console.log(err);
         alert('Erro no cadastro, verifique os campos e tente novamente');
      }
   } 
   return(
      <div className={classes.container}>
         <div className={classes.registerContainer}>
            <section className={classes.form}>
               <form onSubmit={handleRegister}>
                  <h2>Cadastro</h2>
                  <div className={[classes.inputDiv, classes.one].join(' ')}>
                     <i className="i">
                        <FaAddressCard size={17} /> 
                     </i>
                     <div className={classes.div}>
                        <input 
                           placeholder="nome"
                           type="text" 
                           className="input"
                           value={name}
                           onChange={e => setName(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={[classes.inputDiv, classes.one].join(' ')}>
                     <i className="i">
                        <FaAt size={17} />
                     </i>
                     <div className={classes.div}>
                        <input 
                           placeholder="email"
                           type="email" 
                           className="input"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={[classes.inputDiv, classes.pass].join(' ')}>
                     <i className="i">
                        <FaLock size={16} />
                     </i>
                     <div className={classes.div}>
                        <input  
                           placeholder="senha"
                           type="password" 
                           className="input"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={[classes.inputDiv, classes.pass].join(' ')}>
                     <i className="i">
                        <FaLock size={16} />
                     </i>
                     <div className={classes.div}>
                        <input  
                           placeholder="confirme sua senha"
                           type="password" 
                           className="input"
                           value={passwordConfirm}
                           onChange={e => setPasswordConfirm(e.target.value)}
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