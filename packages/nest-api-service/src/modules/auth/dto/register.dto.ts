import { ApiProperty } from '@nestjs/swagger';

// 注册DTO
export class RegisterDto {
  @ApiProperty({ description: 'admin' })
  username: string;
  @ApiProperty({ description: '123456' })
  password: string;
}
