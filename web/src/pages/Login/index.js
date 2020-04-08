import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

import api from '../../services/api';

import avatar from './img/avatar.svg';
import emailImg from './img/email.svg'

import './style.css';

export default function Login(){
   const [email, setEmail] = useState('');
   const history = useHistory();

   async function handleLogin(e) {
      e.preventDefault();

      try {
         const response = await api.post('sessions', { email });

         console.log(response.data.name);

         localStorage.setItem('userEmail', email);
         localStorage.setItem('userName', response.data.email);

         history.push('/profile');
      } catch (err) {
         alert('Falha ao tentar realizar o login, \nverifique se os campos estão preenchidos corretamente')
      }
   }

   return(
      <div className="container">
         <div className="img">
            <img src={emailImg} />
         </div>
         <div className="loginContainer">
            <section className="form">
               <img className="av   atar" src={avatar} alt="avatar"/>
               <form onSubmit={handleLogin}>
                  <h2>Welcome</h2>
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
                           placeholder="password"
                           type="password" 
                           className="input"
                        />
                     </div>
                  </div>
                  <a href="#">Esqueceu sua senha ?</a>
                  <button className="button" type="submit">Entrar</button>
               </form>
            </section>
         </div>
      </div>
   );
}