exports.up = function(knex) {
    return knex.schema
    .createTable('users', user => {
      user.increments("id")
      user.varchar("email",255)
      user.varchar("password",255)
      user.integer("age",4)
      user.varchar("gender",8)
      user.integer("height_inches",4)
      user.integer("weight_lbs",4)
      user.integer("activity_level",4)
      user.integer("weight_goal",4)
      
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
  };
  