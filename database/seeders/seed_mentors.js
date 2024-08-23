exports.seed = function(knex) {
    return knex('mentors').del()
        .then(function () {
            return knex('mentors').insert([
                {
                    name: 'Jane Doe',
                    email: 'jane@example.com',
                    areaOfInterest: JSON.stringify(['Marketing', 'Finance']),
                    availableSlots: JSON.stringify(['2024-08-24T10:00:00Z', '2024-08-24T11:00:00Z'])
                },
                {
                    name: 'Alice Smith',
                    email: 'alice@example.com',
                    areaOfInterest: JSON.stringify(['Technology', 'Operations']),
                    availableSlots: JSON.stringify(['2024-08-24T13:00:00Z', '2024-08-24T14:00:00Z'])
                }
            ]);
        });
};
