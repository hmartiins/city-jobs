import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaBabyCarriage, FaAward, FaCommentMedical } from 'react-icons/fa';

import api from '../../../services/api';
 
import img1 from './img/finishRegister.svg';

import classes from './styles.module.css';
import '../global.css';

export default function FinishRegister(){
   const[born, setBorn] = useState();
   const[specialty, setSpecialty] = useState();
   const[description, setDescription] = useState();

   const name = sessionStorage.getItem('dataName');
   const password = sessionStorage.getItem('dataPassword');
   const email = sessionStorage.getItem('dataEmail');

   const history = useHistory();
   
   async function handleRegister(e){
      e.preventDefault();
      
      const data = {
         name,
         email,
         password,
         specialty,
         born,
         description,
      }
      try {
         await api.post('auth/register', data);
      
         alert(`Cadastrado com sucesso!`);
         console.log('Cadastrado com sucesso no banco');

         
         history.push('/');
      } catch (err) {
         console.error(err);
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
                        <FaBabyCarriage size={17} /> 
                     </i>
                     <div className={classes.div}>
                        <input 
                           placeholder="nascimento"
                           type="text" 
                           className="input"
                           value={born || ''}   
                           onChange={e => setBorn(e.target.value)}
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
                           value={specialty || ''}
                           onChange={e => setSpecialty(e.target.value)}
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
                           value={description || ''}
                           onChange={e => setDescription(e.target.value)}
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