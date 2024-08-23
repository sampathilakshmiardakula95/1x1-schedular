exports.seed = function(knex) {
    return knex('schedules').del()
        .then(function () {
            return knex('schedules').insert([
                {
                    student: 1,
                    mentor: 1,
                    date: new Date('2024-08-24T10:00:00Z'),
                    duration: 30
                },
                {
                    student: 2,
                    mentor: 2,
                    date: new Date('2024-08-24T13:00:00Z'),
                    duration: 45
                }
            ]);
        });
};
