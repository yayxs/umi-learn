// 用户实体
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PhotoEntity } from './photo.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  status: boolean;
  @OneToMany(
    () => PhotoEntity,
    photo => photo.user,
  )
  photos: [];
}