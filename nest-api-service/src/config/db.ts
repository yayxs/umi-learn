import { join } from 'path';
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'blog',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')], // 使用实体
  synchronize: true,
};
