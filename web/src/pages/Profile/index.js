import React, { Component } from 'react';

import { useHistory } from 'react-router-dom';

import './styleProfile.css';

import api from '../../services/api';

export default function Profile(){

    return (
      <div className="containerProfile">
        <header className="toolbar">
          <nav className="toolbarNavigation">
            <div className=""></div>
            <div className="toolbarLogo"><a href="/">Logo</a></div>
            <div className="toolBarNavigationItems">
              <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Feed</a></li>
              </ul>
            </div>
          </nav>
        </header>
       </div>
   );
}