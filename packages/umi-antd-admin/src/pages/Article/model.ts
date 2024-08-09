import { Subscription, Effect, Reducer } from 'umi';
import { queryDataByPagination } from './service';
import { TableListItem } from './data';

export interface ArticleState {
  data: TableListItem[];
  meta: {
    total: number;
    pageSize: number;
    currentPage: number;
  };
}

export interface ArticleModelType {
  namespace: 'articles'; // 表示在全局 state 上的 key
  state: ArticleState; // 初始值，在这里是空数组
  reducers: {
    getList: Reducer<ArticleState>;
  }; // 等同于 redux 里的 reducer，接收 action，同步更新 state
  effects: {
    getArticle: Effect;
  };
  subscriptions: { setup: Subscription };
}

const ArticleModel: ArticleModelType = {
  namespace: 'articles', // 命名空间
  state: {
    data: [],
    meta: {
      total: 0,
      currentPage: 10,
      pageSize: 1,
    },
  },
  reducers: {
    getList(state, { payload }) {
      console.log(payload);
      return payload;
    },
  },
  effects: {
    *getArticle({ payload: { currentPage, pageSize } }, { put, call }) {
      const data = yield call(queryDataByPagination, { currentPage, pageSize });
      if (data) {
        yield put({
          type: 'getList',
          payload: data,
        });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/article') {
          dispatch({
            type: 'getArticle',
            payload: {
              pageSize: 10,
              currentPage: 1,
            },
          });
        }
      });
    },
  },
};
export default ArticleModel;
