import bCrypt from 'bcryptjs';
import { log } from 'handlebars';
// NPM Modules
import knex from 'knex';
import knexConfigs from '../../knex.configs';
import config from '../../src/config/variables.config';
console.log(`${process.env.SERVER_HOST}/upload/9345417a-ff94-490c-9bba-cfd61fe1bdc9.jpg`,"asasd");
const { ADMIN_PASSWORD, PRIMEMINISTER_PASSWORD,  PARLAMENT_PRESIDENT_PASSWORD } = config;
console.log(process.env.SERVER_HOST,"seree");
async function seed(pg) {
    // Deletes ALL existing entries
    await pg('users').truncate();
    // Deletes ALL existing entries with cascade.

    // Inserts seed entries

    await pg('users').insert([
        {
            fullname: 'Նիկոլ Փաշինյան',
            username: 'pashinyan',
            position: 'ՀՀ Վարչապետ',
            picture:`${process.env.SERVER_HOST}/upload/9345417a-ff94-490c-9bba-cfd61fe1bdc9.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },

        {
            fullname: 'Մհեր Գրիգորյան',
            username: 'grigoryan',
            position: 'ՀՀ փոխվարչապետ',
            picture:`${process.env.SERVER_HOST}/upload/ead51cdf-7e3f-40e1-9a18-b086fc73ca42.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },

        {
            fullname: 'Տիգրան Խաչատրյան',
            username: 'matevosyan',
            position: 'ՀՀ փոխվարչապետ',
            picture: `${process.env.SERVER_HOST}/upload/fd4602d7-b336-478a-956b-6c3ed5e5c7ed.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Նարեկ Մկրտչյան',
            username: 'mkrtchyan',
            position: 'Աշխատանքի եւ սոցիալական հարցերի նախարար',
            picture: `${process.env.SERVER_HOST}/upload/9c129079-0431-4fa5-b1af-450dd36809b3.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Անահիտ Ավանեսյան',
            username: 'avanesyan',
            position: 'Առողջապահության նախարար',
            picture: `${process.env.SERVER_HOST}/upload/75b32f92-9d07-4856-89ca-7cf7bb4cf676.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Գրիգոր Մինասյան',
            username: 'abrahamyan',
            position: 'Արդարադատության նախարար',
            picture: `${process.env.SERVER_HOST}/upload/9daa832e-6f25-478b-9274-0a41374cf2d1.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Արմեն Փամբուխչյան',
            username: 'pambukhchyan',
            position: 'Արտակարգ իրավիճակների նախարար',
            picture: `${process.env.SERVER_HOST}/upload/3ed7217f-ab21-4aeb-8c46-3d4098e776f5.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Արարատ Միրզոյան',
            username: 'mirzoyan',
            position: 'Արտաքին գործերի նախարար',
            picture: `${process.env.SERVER_HOST}/upload/879e6793-5068-41c8-9fee-e2b06921ccb8.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Ռոբերտ Խաչատրյան',
            username: 'khachatryan',
            position: 'Բարձր տեխնոլոգիական արդյունաբերության նախարար',
            picture: `${process.env.SERVER_HOST}/upload/812e53a0-e063-4e50-b233-9dca77a64b6c.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Ժաննա Անդրեասյան',
            username: 'dumanyan',
            position: 'Կրթության, գիտության, մշակույթի և սպորտի նախարար',
            picture: `${process.env.SERVER_HOST}/upload/ca03ee74-4e66-4ec0-8591-d660aaa08c9d.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահե Ղազարյան',
            username: 'ghazaryan',
            position: 'Ներքին գործերի նախարար',
            picture: `${process.env.SERVER_HOST}/upload/45110aff-c9bb-4885-96b9-e7911a641221.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահան Քերոբյան',
            username: 'qerobyan',
            position: 'Էկոնոմիկայի նախարար',
            picture: `${process.env.SERVER_HOST}/upload/78d3d3a6-534e-43a9-9eae-22c736cf0ba3.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Հակոբ Սիմիդյան',
            username: 'simidyan',
            position: 'Շրջակա միջավայրի նախարար',
            picture: `${process.env.SERVER_HOST}/upload/5e720f6d-cbb6-451b-aac5-d326ee527a53.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Սուրեն Պապիկյան',
            username: 'papikyan',
            position: 'Պաշտպանության նախարար',
            picture: `${process.env.SERVER_HOST}/upload/d9b9238b-ab99-4044-a66f-6d3e54286da3.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Գնել Սանոսյան',
            username: 'sanosyan',
            position: 'Տարածքային կառավարման և ենթակառուցվածքների նախարար',
            picture: `${process.env.SERVER_HOST}/upload/28e2f717-1798-455d-bd26-ad1502b2d1fc.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        {
            fullname: 'Վահե Հովհաննիսյան',
            username: 'hovhannisyan',
            position: 'Ֆինանսների նախարար',
            picture: `${process.env.SERVER_HOST}/upload/0fb889da-7346-4e4b-bf64-4911677f135e.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'member',
            status: 'active'
        },
        
    ]);
    await pg('login_users').insert([
        {
            fullname: 'Admin Admin',
            username: 'admin',
            password: bCrypt.hashSync(ADMIN_PASSWORD, bCrypt.genSaltSync(10), null),
            position: 'admin',
            picture:'',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'admin',
            status: 'active'
        },

        {
            fullname: 'Parlament President',
            username: 'headofassembly',
            password: bCrypt.hashSync(PARLAMENT_PRESIDENT_PASSWORD, bCrypt.genSaltSync(10), null),
            position: 'parlamentpresident',
            picture:'',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'parlamentpresident',
            status: 'active'
        },
        {
            fullname: 'Նիկոլ Փաշինյան',
            username: 'prime',
            password: bCrypt.hashSync(PRIMEMINISTER_PASSWORD, bCrypt.genSaltSync(10), null),
            position: 'ՀՀ Վարչապետ',
            picture: `${process.env.SERVER_HOST}/upload/9345417a-ff94-490c-9bba-cfd61fe1bdc9.jpg`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            role: 'primeminister',
            status: 'active'
        },
    ]);
}

async function init() {
    try {
        const options = process.env.NODE_ENV === 'production'
            ? knexConfigs.production
            : knexConfigs.development;
        const pg = knex(options);
        await seed(pg);
        console.log('Successfully inserted all data ... ');
    } catch (error) {
        console.error(error.message);
    }
}

init();
