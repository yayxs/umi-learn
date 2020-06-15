import { join } from 'path';
export default {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || '62.234.111.140',
  port: parseInt( process.env.DB_PORT,10 ) || 3306,
  username: process.env.DB_USER_NAME || 'root',
  password: process.env.DB_PASS_WORD || 'Yxs0924...',
  database: process.env.DB_DATA_BASE || 'umi_nest',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')], // 使用实体
  synchronize: true,
};
