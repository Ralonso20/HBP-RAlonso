import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { registerAs } from '@nestjs/config';

dotenv.config({
  path: '.env.development.local',
});

const SqliteTestDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema: true,
};

const PostgresDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*{.ts,.js}'],
  subscribers: [],
  ssl: true,
};

export const postgresDataSourceConfig = registerAs(
  'postgres',
  () => PostgresDataSourceOptions,
);

export const sqliteDataSourceConfig = registerAs(
  'sqlite',
  () => SqliteTestDataSourceOptions,
);

export const SqliteDataSource = new DataSource(SqliteTestDataSourceOptions);
export const PostgresDataSource = new DataSource(PostgresDataSourceOptions);
