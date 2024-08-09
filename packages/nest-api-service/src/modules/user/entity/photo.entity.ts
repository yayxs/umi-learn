import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { UserEntity } from './user.entity'
@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => UserEntity,
    user => user.photos,
  )
  user: UserEntity;

  @Column({ type: 'varchar', length: 80 })
  url: string;
}
