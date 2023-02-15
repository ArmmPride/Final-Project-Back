// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function up(pg) {
    return pg.schema
        .createTable('users', (table) => {
            table.increments('id').primary();
            table.string('fullname').notNullable();
            table.string('username');
            table.string('position').notNullable();
            table.string('picture');
            table.dateTime('created_at');
            table.dateTime('updated_at');
            table.string('role');
            table.enum('status', ['active', 'passive']).defaultTo('active');
        })
        .createTable('login_users', (table) => {
            table.increments('id').primary();
            table.string('fullname').notNullable();
            table.string('username');
            table.string('password');
            table.string('position').notNullable();
            table.string('picture');
            table.dateTime('created_at');
            table.dateTime('updated_at');
            table.enum('role', ['admin', 'primeminister', 'parlamentpresident']);
            table.enum('status', ['active', 'passive']).defaultTo('active');
        });
}

async function init() {
    try {
        const options = process.env.NODE_ENV === 'production'
            ? knexConfigs.production
            : knexConfigs.development;
        const pg = knex(options);
        await up(pg);
        console.log('Successfully created all tables ... ');
    } catch (error) {
        LoggerUtil.error(error.message);
    }
}

init();
