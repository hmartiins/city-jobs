import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/FirstsPages/Login/index.js';
import Register from './pages/FirstsPages/Register/index.js';

import ForgotPassword from './pages/FirstsPages/ForgotPassword/index.js';
import ResetPassword from './pages/FirstsPages/ResetPassword/index.js';

import NotFound from './pages/StatusCodeHttp/NotFound/index.js';
import Unauthorizer from './pages/StatusCodeHttp/Unauthorizer/index.js';

import Profile from './pages/Profile/index.js';

export default function Routes(){
   return(
      <BrowserRouter>
         <Switch>
            <Route path='/' exact component={ Login } />
            <Route path='/register' exact component={ Register } />
            <Route path='/forgotPassword' exact component={ ForgotPassword } />
            <Route path='/resetPassword' exact component={ ResetPassword } />
            <Route path='/profile' exact component={ Profile } />
            <Route path='/unauthorized' exact component={ Unauthorizer } />
            <Route component={ NotFound } />
         </Switch>
      </BrowserRouter>
   )
}