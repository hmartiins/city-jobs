import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

import api from '../../../services/api';

import avatar from './img/avatar.svg';
import emailImg from './img/email.svg'

import classes from './styles.module.css'
import '../global.css';

export default function Login(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   
   const history = useHistory();

   const login = localStorage.getItem('login');

   async function handleLogin(e) {
      e.preventDefault();

      try {
         await api.post('/auth/authenticate/', { email, password });

         localStorage.setItem('userEmail', email);
         localStorage.setItem('login', 'true');
         
         history.push('/profile');
      } catch (err) {
         console.error('Error when logging in');
         alert('Falha ao tentar realizar o login, \nverifique se os campos estão preenchidos corretamente')
      }
   }
   
   function verifyLogin(){
      if(login === 'true'){
         history.push('/profile');
      }
   }

   return(
      <div className={classes.container} onLoad={verifyLogin()}>
         <div className={classes.img}>
            <img src={emailImg} alt="icon" />
         </div>
         <div className={classes.loginContainer}>
            <section className={classes.form}>
               <img className={classes.avatar} src={avatar} alt="avatar"/>
               <form onSubmit={handleLogin}>
                  <h2>Bem-vindo</h2>
                  <div className={[classes.inputDiv, classes.one].join(' ')}>
                     <i className="i">
                        <FaUser size={16} />
                     </i>
                     <div className={classes.div}>
                        {/* <h5>Username</h5> */}

                        <input 
                           placeholder="email"
                           type="email" 
                           className="input"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className={classes.inputDiv}>
                     <i className="i">
                        <FaLock size={16} />
                     </i>
                     <div className="div">
                        {/* <h5>Password</h5> */}
                        <input  
                           value = {password}
                           onChange = {e => setPassword(e.target.value)}
                           placeholder="password"
                           type="password" 
                           className={classes.input}
                        />
                     </div>
                  </div>
                  <a href="forgotpassword" className={classes.aRegister}>Esqueceu sua senha ?</a>
                  <a href="register">Não tenho cadastro !</a>
                  <button className="button" type="submit">Entrar</button>
               </form>
            </section>
         </div>
      </div>
   );
}