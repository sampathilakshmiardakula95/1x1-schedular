module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'your_database_user',
            password: 'your_database_password',
            database: 'your_database_name'
        },
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeders'
        }
    }
};
