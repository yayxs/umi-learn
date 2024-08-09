// import request from 'umi-request';
import request from '@/utils/request';
import { ArticleListParams } from './data';

const queryDataByPagination = async (params: ArticleListParams) => {
  console.log(params);
  return request('/api/article', {
    params,
  });
};

export { queryDataByPagination };
