exports.seed = function(knex) {
    return knex('students').del()
        .then(function () {
            return knex('students').insert([
                {
                    name: 'Bob Johnson',
                    email: 'bob@example.com',
                    areaOfInterest: 'Marketing',
                    preferredMentor: 1
                },
                {
                    name: 'Eve Wilson',
                    email: 'eve@example.com',
                    areaOfInterest: 'Technology',
                    preferredMentor: 2
                }
            ]);
        });
};
