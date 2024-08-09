import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
class AuthEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @ApiProperty({ description: '用户名' })
  username: string;
  @Column()
  @ApiProperty({ description: '密码' })
  password: string;
  /**
   * Start date of this item catalog related event.
   */
  @Column('timestamp')
  public startTime: Date;
 
}

export default AuthEntity;
