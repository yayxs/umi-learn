import request from 'umi-request';

const queryDataByPagination = async () => request('/api/article');

export { queryDataByPagination };
