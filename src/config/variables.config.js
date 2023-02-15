// import dotenv from 'dotenv';
require("dotenv").config()
console.log(process.env.PSQL_USER,'asasd');
const config = {
    UPLOAD_IMAGES: '../../upload',
    LOCALTUNEL:'yes',
    ADMIN_PASSWORD: 'gov!@#$',
    PRIMEMINISTER_PASSWORD: 'prime!@#$',
    PARLAMENT_PRESIDENT_PASSWORD: 'head!@#$',
    LOG_LEVEL: process.env.LOG_LEVEL,
    PORT: process.env.PORT || 3030,
    ONE_WAY_HASH_SECRET: process.env.ONE_WAY_HASH_SECRET,
    DISABLE_REQUEST_LOG: process.env.DISABLE_REQUEST_LOG,
    CORS: process.env.CORS?.split(',') || '*',
    PSQL: {
        URL: process.env.PSQL_URL,
        PORT: process.env.PSQL_PORT || 5432,
        HOST: process.env.PSQL_HOST,
        USER: process.env.PSQL_USER,
        DATABASE: process.env.PSQL_DATABASE,
        PASSWORD: process.env.PSQL_PASSWORD,
    },

    AUTH: {
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        ACCESS_TOKEN_ACTIVE_TIME: process.env.ACCESS_TOKEN_ACTIVE_TIME || '1h',
        REFRESH_TOKEN_ACTIVE_TIME: process.env.REFRESH_TOKEN_ACTIVE_TIME || '1d'
    }

};

export default config;
