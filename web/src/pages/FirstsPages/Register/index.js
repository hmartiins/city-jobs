import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAddressCard, FaAt, FaLock } from 'react-icons/fa';

import api from '../../../services/api';

import img1 from './img/img.svg'

import './style.css'

export default function Register(){

   const[name, setName] = useState();
   const[email, setEmail] = useState();
   const[password, setPassword] = useState();
   const[passwordConfirm, setPasswordConfirm] = useState();
   
   const history = useHistory();

   async function handleRegister(e){
      e.preventDefault();
      
      const data = {
         name,
         email,
         password,
      }
      try {
         if(password === passwordConfirm){
            await api.post('auth/register', data);
            
            alert(`Cadastrado com sucesso!`);
            console.log('Cadastrado com sucesso no banco');

            history.push('/');
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
      <div className="container">
         <div className="registerContainer">
            <section className="form">
               <form onSubmit={handleRegister}>
                  <h2>Cadastro</h2>
                  <div className="inputDiv one">
                     <i className="i">
                        <FaAddressCard size={17} /> 
                     </i>
                     <div className="div">
                        <input 
                           placeholder="nome"
                           type="text" 
                           className="input"
                           value={name}
                           onChange={e => setName(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="inputDiv one">
                     <i className="i">
                        <FaAt size={17} />
                     </i>
                     <div className="div">
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
                        <input  
                           placeholder="senha"
                           type="password" 
                           className="input"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                        />
                     </div>
                  </div>
                  <div className="inputDiv pass">
                     <i className="i">
                        <FaLock size={16} />
                     </i>
                     <div className="div">
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
         <div className="img">   
            <img src={img1} alt="icon"/>
         </div>
      </div>
   );
}