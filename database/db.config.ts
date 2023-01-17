import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './dbConfig.inerface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    type: process.env.DB_TYPE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    // dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST,
    // dialect: process.env.DB_DIALECT,
  },
};
