import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ArticleEntity } from './entity/article.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article.dto';

// interface IQuery {
//   skip?: string ;
//   take?: string;
//   keywords?: string;
// }

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>,
  ) {}

  async fetch(skip = '0', take = '10', keywords = ''): Promise<any> {
    const builder = this.articleRepository.createQueryBuilder('article');
    const total = await builder
      .where('article.title like :title', { title: '%' + keywords + '%' })
      .getCount();
    const data = await builder
      .where('article.title like :title', { title: '%' + keywords + '%' })
      .orderBy('title', 'DESC')
      .skip(Number(skip))
      .take(Number(take))
      .getMany();

    return {
      data: data,
      meta: {
        total,
        per_page: take,
        cur_page: skip,
      },
    };
    // return await this.articleRepository.find();
  }

  async create(dto: CreateArticleDto): Promise<any> {
    return await this.articleRepository.save(dto);
  }

  // update(id: string, message: string): string {
  //   return `Update Hello Done. ${id}：${message}`;
  // }

  // remove(id: number): string {
  //   return `${id} Record Was Removed.`;
  // }
}
