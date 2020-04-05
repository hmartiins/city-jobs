const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

   async index(request, response) {
      const users = await connection('users').select('*');
   
      return response.json(users);
   },

   async create(request, response) {
      const { name, email, password, phone, sex, birth } = request.body;

      const id = crypto.randomBytes(4).toString('HEX');

      await connection('users').insert({
         id,
         name,
         password,
         email,
         phone,
         sex,
         birth,
      })

      return response.json({ id });
   }
}