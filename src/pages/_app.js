
import React from 'react';

import 'antd/dist/antd.css';
import '../common.css';
import '../Header.css';
import '../component/pagination/Pagination.css';
import '../component/organisms/table/Table.css';
import '../component/atoms/button/Button.css';
import '../component/atoms/label/Label.css';
import '../component/atoms/container/Container.css';
import '../component/organisms/box/ButtonBox.css';

import _Head from './_Head';

const EstateApp = props => {
  const { Component, pageProps } = props;
  return (
    <div>
      <_Head />
      <Component {...pageProps} />
    </div>
  )
}

export default EstateApp;