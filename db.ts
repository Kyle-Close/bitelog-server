import { Pool } from 'pg';

export const dbPool = new Pool({
  user: 'kclose',
  host: '',
  database: 'bitelog',
  password: '',
  port: 5432,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: {
    rejectUnauthorized: false,
  },
});
