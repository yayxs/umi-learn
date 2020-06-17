import * as React from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Input, Button ,Table} from 'antd';
import { useState, useEffect } from 'react';
import styles from './index.less';
import request from 'umi-request';
export interface IArticleProps {}

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
export default function Article(props: IArticleProps) {
  request
  .get('/api/article')
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{console.log(err)});

 useEffect(()=>{
   console.log(123)
 },[])
  return (
    <div className={styles}>
     <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}
