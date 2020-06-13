import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async upload(@UploadedFile() file): Promise<boolean> {
    console.log(file)
    await this.albumService.uploadAlbum(file);
    return true;
  }

  @Get('download')
  async downloadAlbum(@Res() res: Response): Promise<void> {
    const { filename, zipStream } = await this.albumService.downloadAlbum();
    await res.setHeader('Content-Type', 'application/octet-stream');
    await res.setHeader(
      'Content-Disposition',
      `attachment; filename=${filename}`,
    );
    await zipStream.pipe(res);
  }
}
