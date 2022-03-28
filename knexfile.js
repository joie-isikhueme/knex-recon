// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
    development: {
        client: 'mssql',
        connection:{
            host:'localhost',
            port:3306,
            user:'sa',
            password:'Barcelona11*',
            database:'NameTestDB'

        },
        migrations:{
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    
    },
    production: {
        client : 'mssql',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
}


