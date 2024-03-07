"use strict";
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
module.exports = [
    {
        name: 'default',
        type: 'mysql',
        host: process.env.DEFAULT_DB_HOST,
        username: process.env.DEFAULT_DB_USERNAME,
        password: process.env.DEFAULT_DB_PASSWORD,
        database: process.env.DEFAULT_DB_NAME,
        options: {
            instanceName: process.env.DEFAULT_DB_INSTANCE,
            enableArithAbort: false,
        },
        dropSchema: false,
        synchronize: false,
        migrations: [(0, path_1.join)(__dirname, '..', 'model/migration/*.{ts,js}')],
        cli: {
            migrationsDir: 'src/model/migration',
        },
        entities: [
            (0, path_1.join)(__dirname, '..', '*.entity.{ts,js}'),
        ],
    },
    {
        name: "trucklagbe_db",
        type: 'mysql',
        host: process.env.TL_MASTER_DB_HOST,
        username: process.env.TL_MASTER_DB_USER,
        password: process.env.TL_MASTER_DB_PASS,
        database: process.env.TL_MASTER_DB_DATABASE,
        options: {
            instanceName: process.env.OTHER_DB_INSTANCE,
            enableArithAbort: false,
        },
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        dropSchema: false,
        synchronize: false,
        migrationsRun: false,
    },
];
//# sourceMappingURL=ormconfig.js.map