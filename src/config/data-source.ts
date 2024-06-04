import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { registerAs } from '@nestjs/config';

dotenv.config({
  path: '.env.development.local',
});

const PostgresDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
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

export const PostgresDataSource = new DataSource(PostgresDataSourceOptions);
