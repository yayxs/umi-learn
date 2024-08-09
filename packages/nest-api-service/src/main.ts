import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  // 使用nest工厂创建app实例
  const app = await NestFactory.create(AppModule);
  // docs 配置
  const options = new DocumentBuilder()
    .setTitle('NestJS-API')
    .setDescription('@yayxs 2020-06')
    .setVersion('1.0')
    // .addTag('s')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
