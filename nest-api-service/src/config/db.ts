import { join } from 'path';
export default {
  type: 'mysql',
  host: '62.234.111.140',
  port: 3306,
  username: 'umi-nest',
  password: '',
  database: 'umi-nest',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')], // 使用实体
  synchronize: true,
};
