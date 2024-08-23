exports.up = function(knex) {
    return knex.schema.createTable('mentors', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.json('areaOfInterest').notNullable(); // Store array of interests
        table.json('availableSlots').notNullable(); // Store array of available slots
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mentors');
};
