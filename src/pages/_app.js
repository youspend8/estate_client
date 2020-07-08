
import React from 'react';

import 'antd/dist/antd.css';
import '../common.css';
import '../component/pagination/Pagination.css';
import '../component/organisms/table/Table.css';
import '../component/atoms/button/Button.css';
import '../component/atoms/label/Label.css';
import '../component/atoms/container/Container.css';
import '../component/organisms/box/ButtonBox.css';

import Head from 'next/head';
import Header from './Header';

const EstateApp = props => {
  const { Component, pageProps } = props;
  return (
    <div class="page-wrapper">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default EstateApp;