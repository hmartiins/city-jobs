import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

import api from '../../services/api';

import avatar from './img/avatar.svg';
import emailImg from './img/email.svg'

import './style.css';

export default function Login(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();

   async function handleLogin(e) {
      e.preventDefault();

      try {
         await api.post('/auth/authenticate/', { email, password });

         //console.log(response.data.email);

         localStorage.setItem('userEmail', email);
         
         history.push('/profile');
      } catch (err) {
         console.error('Error when logging in');
         alert('Falha ao tentar realizar o login, \nverifique se os campos estão preenchidos corretamente')
      }
   }

   return(
      <div className="container">
         <div className="img">
            <img src={emailImg} alt="icon" />
         </div>
         <div className="loginContainer">
            <section className="form">
               <img className="avatar" src={avatar} alt="avatar"/>
               <form onSubmit={handleLogin}>
                  <h2>Bem-vindo</h2>
                  <div className="inputDiv one">
                     <i className="i">
                        <FaUser size={16} />
                     </i>
                     <div className="div">
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
                  <div className="inputDiv pass">
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
                           className="input"
                        />
                     </div>
                  </div>
                  <a href="forgotpassword">Esqueceu sua senha ?</a>
                  <button className="button" type="submit">Entrar</button>
               </form>
            </section>
         </div>
      </div>
   );
}