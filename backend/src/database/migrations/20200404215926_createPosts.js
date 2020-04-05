
exports.up = function(knex) {
   return knex.schema.createTable('posts', function(table) {
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();

      table.string('usersId').notNullable();

      table.foreign('usersId').references('id').inTable('users');
   });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
