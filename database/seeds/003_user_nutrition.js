
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_nutrition').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_nutrition').insert([
        {id: 1, user_id: 1, weekly_kcal:17500, diet_type:0, weekly_protein:1400, weekly_carbs:1400, weekly_fat:350}
      ]);
    });
};
