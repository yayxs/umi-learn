// 用户实体
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  subTitle: string;
  @Column()
  status: boolean;
  @Column()
  content: string;
}
