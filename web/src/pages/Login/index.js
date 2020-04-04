import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

import avatar from './img/avatar.svg';
import emailImg from './img/email.svg'

import './style.css';

export default function Login(){
   return(
      <div className="container">
         <div className="img">
            <img src={emailImg} />
         </div>
         <div className="loginContainer">
            <section className="form">
               <img className="av   atar" src={avatar} alt="avatar"/>
               <h2>Welcome</h2>
               <div className="inputDiv one">
                  <i className="i">
                     <FaUser size={16} />
                  </i>
                  <div className="div">
                     <h5>Username</h5>
                     <input type="text" className="input"/>
                  </div>
               </div>
               <div className="inputDiv pass">
                  <i className="i">
                     <FaLock size={16} />
                  </i>
                  <div className="div">
                     <h5>Password</h5>
                     <input type="password" className="input"/>
                  </div>
               </div>
               <a href="#">Esqueceu sua senha ?</a>
               <button className="button" type="submit">Entrar</button>
            </section>
         </div>
      </div>
   );
}