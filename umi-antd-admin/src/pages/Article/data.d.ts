export interface TableListItem {
  key?: number;
  id: number;
  title: string;
  subTitle: string;
  status: boolean;
  content: string;
}

export interface ArticleListParams {
  pageSize: number;
  currentPage: number;
  keywords: string;
}
