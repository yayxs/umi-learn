import { Injectable } from '@nestjs/common';
/**
 * 压缩和解压的库 npm:https://www.npmjs.com/package/compressing
 * tar gzip tgz zip
 */
import { zip } from 'compressing';
import { ConfigService } from 'nestjs-config';

@Injectable()
export class AlbumService {
  constructor(private readonly configService: ConfigService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async uploadAlbum(file): Promise<void> {
    console.log(file);
  }

  async downloadAlbum(): Promise<any> {
    const uploadDir = this.configService.get('file').root;
    const zipStream = new zip.Stream();
    await zipStream.addEntry(uploadDir);
    return { filename: 'me.zip', zipStream };
  }
}
