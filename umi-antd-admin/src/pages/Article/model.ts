
import { Subscription } from 'umi';


export interface ArticleModelType {
  namespace: 'article';
  subscriptions: { setup: Subscription };
}

const ArticleModel:ArticleModelType = {
  namespace: 'article',  // 命名空间


  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
            payload: {
              page: 1,
              per_page: 5,
            },
          });
        }
      });
    },
  },
};
export default ArticleModel
