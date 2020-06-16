import { ApiProperty } from '@nestjs/swagger';

// 登录DTO
export class LoginDto {
  // 用户名
  @ApiProperty({ description: 'admin' })
  username: string;
  // 密码
  @ApiProperty({ description: '123456' })
  password: string;
}
