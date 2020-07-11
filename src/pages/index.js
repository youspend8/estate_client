import React, { useState, useEffect, createContext, useRef } from 'react';
import SearchBox from '../SearchBox';
import SearchTable from '../SearchTable';
import Axios from 'axios';
import { TradeContext } from '../context/useTradeContext';
import NaverMap from '../NaverMap';
import Chart from '../component/chart/Chart';
import AggregationTable from '../AggregationTable';
import {withRouter} from 'next/router';
import Header from '../pages/common/Header';
import Label from '../component/atoms/label/Label';
import Collapse from '../component/organisms/collapse/Collapse';

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
  const [ searchKeyword, setSearchKeyword ] = useState('서울특별시 종로구');

  // const baseURL = 'https://mask.thereright.co.kr/estate';
  const baseURL = 'http://localhost:8000';

  const searchHistory = async() => {
    Axios.post(`${baseURL}/search/history`, {
      keyword: searchKeyword
    }, {
      withCredentials: true,
    })
  }

  const search = async() => {
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
    searchHistory();
  }

  const stats = async() => {
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
  }

  const searchQuery = {
    state: {
      name: name,
      region: region,
      sigungu: sigungu,
      searchKeyword: searchKeyword, 
    },
    action: {
      setName: setName,
      setRegion: setRegion,
      setSigungu: setSigungu,
      setSearchKeyword: setSearchKeyword
    }
  }
  
  useEffect(() => {
    if (searchKeyword.split(' ').length >= 2) {
      search();
    }
  }, [ page, size, sigungu, sortType, sortMode ]);

  useEffect(() => {
    if (searchKeyword.split(' ').length >= 2) {
      stats();
    }
  }, [ sigungu ]);

  const rollLeftRef = useRef();
  const rollRightRef = useRef();

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const top = Number.parseInt(rollLeftRef.current.style.top.replace('px', ''));
  //     if (top <= (-29 * 19)) {
  //       rollLeftRef.current.style.top = '0px';
  //     } else {
  //       rollLeftRef.current.style.top = (top - 29) + 'px'; 
  //     }
  //     rollLeftRef.current.style.transition = 'all 1s ease 0s';
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, [ ])

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const top = Number.parseInt(rollRightRef.current.style.top.replace('px', ''));

  //     if (top <= (-29 * 19)) {
  //       rollRightRef.current.style.top = '0px';
  //     } else {
  //       rollRightRef.current.style.top = (top - 29) + 'px'; 
  //     }
  //     rollRightRef.current.style.transition = 'all 1s ease 0s';
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, [ ]);

  return (
    <TradeContext.Provider value={{
      searchQuery: searchQuery,
      search: search,
      baseURL: baseURL
    }}>
      <Header />
      <div className="page-wrapper">
        <SearchBox />
        {/* <div style={{display: 'flex'}}>
          <div style={{
            flexGrow: 1,
            height: '29px',
            overflow: 'hidden'
          }}>
            <div ref={rollLeftRef} style={{
              display: 'flex', 
              flexDirection: 'column', 
              position: 'relative',
              top: '0px'
            }}>
              <div><Label isBold={true}>1.</Label><Label>530000		한남더힐</Label></div>
              <div><Label isBold={true}>2.</Label><Label>527000		한남더힐</Label></div>
              <div><Label isBold={true}>3.</Label><Label>493000		한남더힐</Label></div>
              <div><Label isBold={true}>4.</Label><Label>480000		타워팰리스2</Label></div>
              <div><Label isBold={true}>5.</Label><Label>480000		현대6차(78~81,83,84,86,87동)</Label></div>
              <div><Label isBold={true}>6.</Label><Label>475000		래미안퍼스티지</Label></div>
              <div><Label isBold={true}>7.</Label><Label>475000		한양8(81동한개동)</Label></div>
              <div><Label isBold={true}>8.</Label><Label>463000		현대7차(73~77,82,85동)</Label></div>
              <div><Label isBold={true}>9.</Label><Label>450000		로덴하우스 웨스트빌리지</Label></div>
              <div><Label isBold={true}>10.</Label><Label>430000		도곡렉슬</Label></div>
              <div><Label isBold={true}>11.</Label><Label>430000		갤러리아 포레</Label></div>
              <div><Label isBold={true}>12.</Label><Label>423000		반포 주공1단지</Label></div>
              <div><Label isBold={true}>13.</Label><Label>400000		아이파크</Label></div>
              <div><Label isBold={true}>14.</Label><Label>380000		래미안퍼스티지</Label></div>
              <div><Label isBold={true}>15.</Label><Label>379000		래미안퍼스티지</Label></div>
              <div><Label isBold={true}>16.</Label><Label>379000		개포우성2</Label></div>
              <div><Label isBold={true}>17.</Label><Label>375000		갤러리아 포레</Label></div>
              <div><Label isBold={true}>18.</Label><Label>370000		한보미도맨션1</Label></div>
              <div><Label isBold={true}>19.</Label><Label>370000		신현대9차</Label></div>
              <div><Label isBold={true}>20.</Label><Label>370000		현대2차(10,11,20,23,24,25동)</Label></div>
            </div>
          </div>
          
          <div style={{
            flexGrow: 1,
            height: '29px',
            overflow: 'hidden'
          }}>
            <div ref={rollRightRef} style={{
              display: 'flex', 
              flexDirection: 'column', 
              position: 'relative',
              top: '0px'
            }}>
              <div><Label isBold={true}>1.</Label><Label>176460	강남구</Label></div>
              <div><Label isBold={true}>2.</Label><Label>161677	서초구</Label></div>
              <div><Label isBold={true}>3.</Label><Label>155074	용산구</Label></div>
              <div><Label isBold={true}>4.</Label><Label>135965	송파구</Label></div>
              <div><Label isBold={true}>5.</Label><Label>132297	과천시</Label></div>
              <div><Label isBold={true}>6.</Label><Label>107043	성동구</Label></div>
              <div><Label isBold={true}>7.</Label><Label>101118	광진구</Label></div>
              <div><Label isBold={true}>8.</Label><Label>100502	마포구</Label></div>
              <div><Label isBold={true}>9.</Label><Label>90480 동작구</Label></div>
              <div><Label isBold={true}>10.</Label><Label>90035	양천구</Label></div>
              <div><Label isBold={true}>11.</Label><Label>89980	영등포구</Label></div>
              <div><Label isBold={true}>12.</Label><Label>89391	분당구</Label></div>
              <div><Label isBold={true}>13.</Label><Label>88885	중구</Label></div>
              <div><Label isBold={true}>14.</Label><Label>86143	강동구</Label></div>
              <div><Label isBold={true}>15.</Label><Label>78788	종로구</Label></div>
              <div><Label isBold={true}>16.</Label><Label>76181	서대문구</Label></div>
              <div><Label isBold={true}>17.</Label><Label>73542	수정구</Label></div>
              <div><Label isBold={true}>18.</Label><Label>70859	동대문구</Label></div>
              <div><Label isBold={true}>19.</Label><Label>70722	하남시</Label></div>
              <div><Label isBold={true}>20.</Label><Label>65318	관악구</Label></div>
            </div>
          </div>
        </div> */}
        <Collapse title={'지역별 평당가격'}>
          <Chart data={statsData} />
          <AggregationTable data={statsData} />
        </Collapse>

        <Collapse title={'실거래 내역'}>
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
        </Collapse>
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
