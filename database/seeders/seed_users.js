exports.seed = function(knex) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                {name: 'Admin User', email: 'admin@example.com', password: 'hashed_password'},
                {name: 'John Doe', email: 'john@example.com', password: 'hashed_password'},
            ]);
        });
};
