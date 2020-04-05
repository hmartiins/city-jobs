const express = require('express');

const UsersController = require('./controller/UsersController');
const SessionsController = require('./controller/SessionsController');

const routes = express.Router();

routes.post('/sessions', SessionsController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

module.exports = routes;