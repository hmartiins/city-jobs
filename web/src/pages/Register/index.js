import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAddressCard, FaAt, FaLock } from 'react-icons/fa';

import api from '../../services/api';

import img1 from './img/img.svg'

import './style.css'

export default function Register(){
   return(
      <div className="container">
         <div className="registerContainer">
            <section className="form">
               <form>
                  <h2>Cadastro</h2>
                  <div className="inputDiv one">
                     <i className="i">
                        <FaAddressCard size={17} /> 
                     </i>
                     <div className="div">
                        {/* <h5>Username</h5> */}

                        <input 
                           placeholder="nome"
                           type="text" 
                           className="input"
                        />
                     </div>
                  </div>
                  <div className="inputDiv one">
                     <i className="i">
                        <FaAt size={17} />
                     </i>
                     <div className="div">
                        {/* <h5>Username</h5> */}

                        <input 
                           placeholder="email"
                           type="email" 
                           className="input"
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
                           placeholder="senha"
                           type="password" 
                           className="input"
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
                           placeholder="confirme sua senha"
                           type="password" 
                           className="input"
                        />
                     </div>
                  </div>
                  <a href="coe">Meus dados estão seguros ?</a>
                  <button className="button" type="submit">Confirmar</button>
               </form>
            </section>
         </div>
         <div className="img">
            <img src={img1}/>
         </div>
      </div>
   );
}