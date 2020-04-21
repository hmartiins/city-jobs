import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/FirstsPages/Login/index.js';
import Register from './pages/FirstsPages/Register/index.js';

import ForgotPassword from './pages/FirstsPages/ForgotPassword/index.js';
import ResetPassword from './pages/FirstsPages/ResetPassword/index.js';

import Profile from './pages/Profile/index.js';

export default function Routes(){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/' exact component={ Login } />
            <Route path='/register' component={ Register } />
            <Route path='/forgotPassword' component={ ForgotPassword } />
            <Route path='/resetPassword' component={ ResetPassword } />
            <Route path='/profile' component={ Profile } />
         </Switch>
      </BrowserRouter>
   )
}