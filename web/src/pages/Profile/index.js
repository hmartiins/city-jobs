import React, { Component } from 'react';

import { useHistory } from 'react-router-dom';
import  { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap' ;

import './style.css';
import '../../global.css';

import api from '../../services/api';

export default function Profile(){

    return (
      <div className="containerProfile">
        <div className="wrapper">
          <Navbar className="nav" variant="dark">
          <Nav.Link className="brand" href="#home">City Info</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="navFont1" href="#home">Home</Nav.Link>
                <Nav.Link className="navFont" href="#link">Profile</Nav.Link>
                <Nav.Link className="navFont" href="#Configs">Configurações</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="digite aqui.." className="mr-sm-2" />
              <Button variant="dark">Pesquisar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="infos">
        <p></p>
      </div>
    </div>
   );
}