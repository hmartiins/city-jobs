const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

const User = require('../models/user');

const router = express.Router();

function generateToken(params = {}){
   return jwt.sign(params, authConfig.secret, {
      expiresIn: 86399,
   });
}

router.post('/register', async (request, response) => {
   const { email } = request.body;

   try {
      if(await User.findOne({ email })){
         return response.status(400).send({ error: 'User already exist' });
      }

      const user = await User.create(request.body);

      user.password = undefined;

      return response.send({ 
         user, 
         token: generateToken({ id: user.id }),
      });
   } catch (err) {
      return response.status(400).send({ error: 'Registration failed' });
   }
});

router.post('/authenticate', async (request, response) => {
   const { email, password } = request.body;

   const user = await User.findOne({ email }).select('+password');

   if(!user){
      return response.status(400).send({ error: 'User not found' });
   }

   if(!await bcrypt.compare(password, user.password)){
      return response.status(400).send({ error: 'Invalid password' });
   }

   user.password = undefined

   const token = 

   response.send({ 
      user, 
      token: generateToken({ id: user.id }), 
   });
});

module.exports = app => app.use('/auth', router);