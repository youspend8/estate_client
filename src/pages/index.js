import React, { useState, useEffect, createContext } from 'react';
import SearchBox from '../SearchBox';
import SearchTable from '../SearchTable';
import Axios from 'axios';
import { TradeContext } from '../context/useTradeContext';
import NaverMap from '../NaverMap';
import Pagination from '../component/pagination/Pagination';
import Chart from '../component/chart/Chart';
import AggregationTable from '../AggregationTable';
import {withRouter} from 'next/router';
import Header from '../Header';

const Index = props => {
  const [ data, setData ] = useState([]);
  const [ statsData, setStatsData ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ size, setSize ] = useState(15);
  const [ totalPage, setTotalPage ] = useState(0);
  const [ sortType, setSortType ] = useState('amount');
  const [ sortMode, setSortMode ] = useState('desc');

  const [ name, setName ] = useState('');
  const [ region, setRegion ] = useState('11');
  const [ sigungu, setSigungu ] = useState('110');

  const baseURL = 'https://mask.thereright.co.kr/estate';
  // const baseURL = 'http://localhost:8000';

  const search = async() => {
    console.log('searchQuery', searchQuery)
    const response = await Axios.get(`${baseURL}/trade/search`, {
      params: {
        name: name,
        region: region,
        sigungu: sigungu,
        page: page,
        size: size,
        sortType: sortType,
        sortMode: sortMode
      }
    });
    const result = await response.data;
    
    const data = result.list;
    const totalPage = result.totalPage;

    setData(data)
    setTotalPage(totalPage)
    
    console.log('result', result)
  }

  const stats = async() => {
    console.log('searchQuery', searchQuery)
    const response = await Axios.get(`${baseURL}/trade/stats`, {
      params: {
        name: name,
        region: region,
        sigungu: sigungu,
        page: page,
        size: size
      }
    });
    const result = await response.data;
    
    setStatsData(result)

    console.log('result', result)
  }

  const searchQuery = {
    state: {
      name: name,
      region: region,
      sigungu: sigungu
    },
    action: {
      setName: setName,
      setRegion: setRegion,
      setSigungu: setSigungu
    }
  }

  useEffect(() => {
    search();
    stats();
  }, [ ]);
  
  useEffect(() => {
    search();
  }, [ page, size, sigungu, sortType, sortMode ]);

  useEffect(() => {
    stats();
  }, [ sigungu ]);

  return (
    <TradeContext.Provider value={{
      searchQuery: searchQuery,
      search: search,
      baseURL: baseURL
    }}>
      <div className="page-wrapper">
        <Header />
        <SearchBox />
        <Chart data={statsData} />
        <AggregationTable data={statsData} />
        
        <div style={{margin: '50px 0'}} />

        <SearchTable data={data} pagination={{
          page: page,
          totalPage: totalPage,
          size: size,
          onSizeChange: e => setSize(e.target.value),
          onPageChange: page => setPage(page),
          onSortChange: sort => {
            setSortType(sort.type);
            setSortMode(sort.mode);
          }
        }} />
        <br/>
        <br/>
        <NaverMap />
      </div>
    
    </TradeContext.Provider>
  );
}

Index.getInitialProps = async ctx => {
  // console.log('query', ctx.query.region)
  return {
    // ctx: 'asd'
  }
}

export default withRouter(Index);
