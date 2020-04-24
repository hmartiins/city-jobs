import React, { useState } from 'react';

import { FaAt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import api from '../../../services/api';

import forgotPassword from './img/forgotPassword.svg';

import classes from './styles.module.css'
import '../global.css';

export default function ForgotPassword(){
  const[email, setEmail] = useState();

  const history = useHistory();

  async function handleForgotPassword(e){
    e.preventDefault();

    try {
      await api.post('/auth/forgot_password/', { email });

      history.push('/resetPassword');
      
      console.log('Token sent successfully!');
    } catch (err) {
      console.log(err);
      alert('Falha ao tentar enviar a requisição, verifique os campos corretamente')
    }
  }

  return(
    <div className={classes.container}>
      <div className={classes.img}>
        <img src={forgotPassword} alt="icon"/>
      </div>
      <div className={classes.passwordContainer}>
        <section className={classes.form}>
          <form onSubmit={handleForgotPassword}>
            <h2>Esqueci Minha Senha</h2>
            <div className={classes.text}>
              <span className={classes.textPass}>
                Esqueceu sua senha ? Não tem problema !<br />
                Nós iremos enviar um token no email digitado, para poder
                redefinir a senha da sua conta.
              </span>
            </div>
            <div className={[classes.inputDiv, classes.one].join(' ')}>
              <i className="i">
                <FaAt size={18} />
              </i>
              <div className={classes.div}>
                {/* <h5>Password</h5> */}
                <input  
                   id= {email}
                   onChange= {e => setEmail(e.target.value)}
                   placeholder="email"
                   type="email" 
                   className={classes.input}
                 />
              </div>
            </div>
            <button className="button" type="submit">Confirmar</button>
          </form>
        </section>
      </div>
    </div>
  );
};
