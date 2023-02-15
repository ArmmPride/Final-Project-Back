// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

    //Droping tables
function down(pg) {
    return pg.schema
        .dropTableIfExists('users')
        .dropTableIfExists('login_users');
}

async function init() {
    try {
        const options = process.env.NODE_ENV === 'production'
            ? knexConfigs.production
            : knexConfigs.development;
        const pg = knex(options);
        await down(pg);
        console.log('Successfully dropped all tables ... ');
    } catch (error) {
        LoggerUtil.error(error.message);
    }
}

init();
