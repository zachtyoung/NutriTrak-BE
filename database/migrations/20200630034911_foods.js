exports.up = function(knex) {
    return knex.schema
    .createTable('foods', food => {
      food.increments();
      food.integer('servings').unsigned().notNullable();
      food.string('name', 255).notNullable();
      food.integer('total_cal', 255).notNullable();
      food.integer('grams_protien', 255).notNullable();
      food.integer('grams_carbs', 255).notNullable();
      food.integer('grams_fat', 255).notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('foods')
  };
  