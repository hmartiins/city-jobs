const connection = require('../database/connection');

module.exports = {
   async create(request, response) {
      const { id } = request.body;

      const user = await connection('users')
         .where('id', id)
         .select('name')
         .first();

      const password = await connection('users')
         .where('id', id)
         .select('password')
         .first();

      if(!user) {
         return response.status(400).json({error: 'No user found with this ID'});
      }
      return response.json(user);
   }
}