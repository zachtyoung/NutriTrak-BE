exports.up = function(knex) {
    return knex.schema
    .createTable('nutrition', nutrition => {
      nutrition.increments("id")
      nutrition.integer("user_id").references("id").inTable("users")
      nutrition.date("date")
      nutrition.varchar("food_name",255)
      nutrition.varchar("food_servings",255)
      nutrition.integer("food_protein",4)
      nutrition.integer("food_carbs",4)
      nutrition.integer("food_fat",4)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('nutrition')
  };
  