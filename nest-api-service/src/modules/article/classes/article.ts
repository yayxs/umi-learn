import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Article {
  @ApiProperty({ example: 'yayxs', description: 'a boy' })
  name: string;

  @ApiProperty({ example: 18, description: '永远的18' })
  age: number;



  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
