exports.seed = function (knex) {
  return knex('todo').del()
    .then(() => {
      const todos = [{
        title: 'Build a CRUD APP',
        priority: 1,
      },
      {
        title: 'Do the dishes',
        priority: 3,
      },
      {
        title: 'Render a view',
        priority: 2,
      },
      {
        title: 'Walk the dog',
        priority: 5,
      }];

      return knex('todo').insert(todos);
    });
};
