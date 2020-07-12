
import React from 'react';

import 'antd/dist/antd.css';
import '../common.css';
import '../component/pagination/Pagination.css';
import '../component/organisms/table/Table.css';
import '../component/atoms/button/Button.css';
import '../component/atoms/label/Label.css';
import '../component/atoms/container/Container.css';
import '../component/organisms/box/ButtonBox.css';
import '../component/organisms/collapse/Collapse.css';
import '../common/Header.css';
import '../component/atoms/radio/Radio.css';
import '../component/atoms/input/Input.css';
import '../component/atoms/select/Select.css';

import FrameHeader from './FrameHeader';

const EstateApp = props => {
  const { Component, pageProps } = props;
  return (
    <div>
      <FrameHeader />
      <Component {...pageProps} />
    </div>
  )
}

export default EstateApp;