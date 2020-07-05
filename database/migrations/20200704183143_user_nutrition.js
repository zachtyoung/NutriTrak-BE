exports.up = function(knex) {
    return knex.schema
    .createTable('user_nutrition', user_nutrition => {
      user_nutrition.increments("id")
      user_nutrition.integer("user_id").references("id").inTable("users")
      user_nutrition.integer("weekly_kcal",4)
      user_nutrition.varchar("diet_type",255)
      user_nutrition.integer("weekly_protein",4)
      user_nutrition.integer("weekly_carbs",4)
      user_nutrition.integer("weekly_fat",4)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('user_nutrition')
  };
  