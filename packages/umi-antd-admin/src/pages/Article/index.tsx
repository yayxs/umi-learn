import * as React from 'react';
import ProTable, { ProColumns, IndexColumn } from '@ant-design/pro-table';
import { Input, Button, Table } from 'antd';
import { useState, useEffect, FC } from 'react';
import styles from './index.less';
import request from 'umi-request';
import { connect, Dispatch } from 'umi';
import { Loading, ArticleState } from './../../.umi/plugin-dva/connect';
import { TableListItem } from './data';
import { Popconfirm, message, Pagination } from 'antd';

export interface IArticleComProps {
  articles: ArticleState;
  dispatch: Dispatch;
  listLoading: boolean;
}

const Article: FC<IArticleComProps> = ({ articles, dispatch, listLoading }) => {
  const [articleList, setArticleList] = useState<TableListItem | undefined>(
    undefined,
  );

  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '副标题',
      dataIndex: 'subTitle',
      key: 'subTitle',
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '写作状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',

      dataIndex: 'option',
      valueType: 'option',
      key: 'option',
      render: (text: any, record: any) => (
        <>
          <a onClick={() => {}}>编辑</a>,
          <Popconfirm
            title="是否确定删除?"
            onConfirm={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <a>删除</a>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handlePageChange = (currentPage: number, pageSize?: number) => {
    dispatch({
      type: 'articles/getArticle',
      payload: { currentPage, pageSize },
    });
  };
  return (
    <div className={styles}>
      <ProTable
        dataSource={articles.data}
        columns={columns}
        loading={listLoading}
        rowKey="id"
        search={false}
        pagination={false}
      />
      <Pagination
        hideOnSinglePage={true}
        total={articles.meta.total}
        current={Number(articles.meta.currentPage)}
        pageSize={Number(articles.meta.pageSize)}
        showSizeChanger
        showQuickJumper
        onChange={handlePageChange}
        showTotal={total => `总共 ${total} 条`}
      />
    </div>
  );
};

export default connect(
  ({ articles, loading }: { articles: ArticleState; loading: Loading }) => ({
    articles,
    listLoading: loading.models.articles,
  }),
)(Article);
