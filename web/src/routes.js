import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/FirstsPages/Login';
import Register from './pages/FirstsPages/Register';

import ForgotPassword from './pages/FirstsPages/ForgotPassword';
import ResetPassword from './pages/FirstsPages/ResetPassword';

import Profile from './pages/Profile';

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