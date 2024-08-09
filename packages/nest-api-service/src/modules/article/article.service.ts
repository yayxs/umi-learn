import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ArticleEntity } from './entity/article.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { QueryArticleDto } from './dto/query-article.dto';
import { IArticleRes } from './interfaces/article.interface';

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

  async fetch(dto: QueryArticleDto): Promise<IArticleRes> {
    const { pageSize = 10, currentPage = 1 } = dto;
    const builder = await getRepository(ArticleEntity)
      .createQueryBuilder('article')
      .skip(pageSize * (currentPage - 1))
      .take(pageSize)
      .getManyAndCount(); // 联合查询
    // const builder = this.articleRepository.createQueryBuilder('article');
    // const total = await builder
    //   .where('article.title like :title', { title: '%' + keywords + '%' })
    //   .getCount();
    // const data = await builder
    //   .where('article.title like :title', { title: '%' + keywords + '%' })
    //   .orderBy('title', 'DESC')
    //   .skip(limit * (page - 1))
    //   .take(limit)
    //   .getMany();
    return {
      data: builder[0],
      meta: {
        total: builder[1],
        pageSize,
        currentPage,
      },
    };
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
