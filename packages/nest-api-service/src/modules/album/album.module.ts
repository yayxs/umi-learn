import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { ConfigService } from 'nestjs-config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: (config: ConfigService) => config.get('file'),
      inject: [ConfigService],
    }),
  ],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class AlbumModule {}
