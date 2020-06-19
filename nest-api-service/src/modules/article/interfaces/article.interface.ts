import { ArticleEntity } from '../entity/article.entity';

export interface IArticleRes {
  data: ArticleEntity[];
  meta: {
    total: number;
    currentPage: number;
    pageSize: number;
  };
}

export interface IPageInfo {
  pageSize?: number;
  currentPage?: number;
}
