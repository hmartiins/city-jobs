import React from 'react';
import { useHistory } from 'react-router-dom';

import NavigationBar from '../NavBar/NavigationBar';

import api from '../../services/api';

export default function Profile(){
   const history = useHistory();

   async function verifyLogin(){
      try {
         const login = localStorage.getItem('login');
   
         if(login !== 'true'){
            history.push('/unauthorized');
         }

      } catch (err) {
         history.push('/unauthorized');
      }
   }
      
   return(
      <div className="container" onLoad={verifyLogin()}>
         <NavigationBar />
      </div>
   );
}