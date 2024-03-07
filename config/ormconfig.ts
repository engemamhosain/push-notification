
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { Injectable } from "@nestjs/common";
dotenv.config({ path:`.env.${process.env.NODE_ENV}`});

export = [
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
    
    migrations: [join(__dirname, '..', 'model/migration/*.{ts,js}')],
    cli: {
      migrationsDir: 'src/model/migration',
    },
    entities: [
      join(__dirname, '..', '*.entity.{ts,js}'),
    ],
  } as TypeOrmModuleOptions,
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

  } as TypeOrmModuleOptions,
];