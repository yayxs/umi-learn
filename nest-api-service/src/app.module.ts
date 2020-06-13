import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './modules/album/album.module';

@Module({

  imports: [
    // 导入config 文件夹下的配置 
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    // 加载数据库连接
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('db'),
      inject: [ConfigService],
    }),
    ArticleModule, AuthModule, UserModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes('article');
  // }
}
