
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'ztyoung59@yahoo.com', password:"password", age:23, gender:"male", height_inches:72, weight_lbs:235, activity_level:5, weight_goal:0}
      ]);
    });
};
