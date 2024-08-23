exports.up = function(knex) {
    return knex.schema.createTable('schedules', function(table) {
        table.increments('id').primary();
        table.integer('student').unsigned().references('id').inTable('students').onDelete('CASCADE');
        table.integer('mentor').unsigned().references('id').inTable('mentors').onDelete('CASCADE');
        table.timestamp('date').notNullable();
        table.integer('duration').notNullable(); // in minutes
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('schedules');
};
