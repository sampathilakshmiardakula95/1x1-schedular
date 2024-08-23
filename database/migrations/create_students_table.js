exports.up = function(knex) {
    return knex.schema.createTable('students', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('areaOfInterest').notNullable();
        table.integer('preferredMentor').unsigned().references('id').inTable('mentors').onDelete('SET NULL');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('students');
};
