
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nutrition').del()
    .then(function () {
      // Inserts seed entries
      return knex('nutrition').insert([
        {id: 1, user_id: 1, date:'2020-07-05', food_name:"cereal", food_servings:"1 cup", food_protein:10, food_carbs:40, food_fat:5}
      ]);
    });
};
