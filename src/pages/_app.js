
import React from 'react';

import '../component/pagination/Pagination.css';
import Head from 'next/head';
import Header from './Header';

const EstateApp = props => {
  const { Component, pageProps } = props;
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default EstateApp;