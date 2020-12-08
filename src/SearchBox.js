import React, { useEffect, useState } from 'react';
import TradeContext from './context/useTradeContext';
import useTradeContext from './context/useTradeContext';
import Axios from 'axios';
import RadioBox from './component/atoms/radio/RadioBox';
import Row from './component/atoms/container/Row';
import Label from './component/atoms/label/Label';
import SearchInputName from './SearchInputName';
import Button from './component/atoms/button/Button';
import Select from './component/atoms/select/Select';

const SearchBox = props => {
  const { searchQuery, search, searchProcess, baseURL } = useTradeContext();
  const { state, action } = searchQuery;
  const { 
    setName, 
    setRegion, 
    setSigungu, 
    setTradeType,
    setStartDate,
    setEndDate 
  } = action;

  const [ regionList, setRegionList ] = useState([]);
  const [ sigunguList, setSigunguList ] = useState([]);

  const fetchCityCode = async(type) => {
    const response = await Axios.get(`${baseURL}/city/search`, {
      params: {
        type: type,
        region: state.region,
        sigungu: state.sigungu
      }
    });
    const result = await response.data;

    if (type == 0) {
      setRegionList(result);
    } else if (type == 1) {
      setSigunguList(result);
    }
    return result;
  }

  useEffect(() => {
    fetchCityCode(0);
  }, [ ]);
  
  useEffect(() => {
    fetchCityCode(1);
  }, [ state.region ]);

  return (
    <div className="search-box-sub">
      <Row>
        <Label width={'20%'}>단지명</Label>
        <SearchInputName name="name" onChange={e => setName(e.target.value)} onKeyUp={e => e.keyCode == 13 ? searchProcess() : ''} style={{width: '80%'}}/>
      </Row>
      {/* 면적<br /> */}
      {/* <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      
      <Row margin={'10px 0'}>
        <Label width={'20%'}>거래일</Label>
        <Select style={{marginRight: '5px'}} onChange={e => setStartDate(e.target.value)}>
          <option value={'2020-12'}>2020년 12월</option>
          <option value={'2020-11'}>2020년 11월</option>
          <option value={'2020-10'}>2020년 10월</option>
          <option value={'2020-09'}>2020년 9월</option>
          <option value={'2020-08'}>2020년 8월</option>
          <option value={'2020-07'}>2020년 7월</option>
          <option value={'2020-06'}>2020년 6월</option>
          <option value={'2020-05'}>2020년 5월</option>
          <option value={'2020-04'}>2020년 4월</option>
          <option value={'2020-03'}>2020년 3월</option>
          <option value={'2020-02'}>2020년 2월</option>
          <option value={'2020-01'} selected>2020년 1월</option>
          <option value={'2019-12'}>2019년 12월</option>
          <option value={'2019-11'}>2019년 11월</option>
        </Select>
        <Select onChange={e => setEndDate(e.target.value)}>
          <option value={'2020-12'}>2020년 12월</option>
          <option value={'2020-11'}>2020년 11월</option>
          <option value={'2020-10'}>2020년 10월</option>
          <option value={'2020-09'}>2020년 9월</option>
          <option value={'2020-08'}>2020년 8월</option>
          <option value={'2020-07'}>2020년 7월</option>
          <option value={'2020-06'}>2020년 6월</option>
          <option value={'2020-05'}>2020년 5월</option>
          <option value={'2020-04'}>2020년 4월</option>
          <option value={'2020-03'}>2020년 3월</option>
          <option value={'2020-02'}>2020년 2월</option>
          <option value={'2020-01'}>2020년 1월</option>
          <option value={'2019-12'}>2019년 12월</option>
          <option value={'2019-11'}>2019년 11월</option>
        </Select>
      </Row>
      {/* <input type="date" name="name" onChange={e => setName(e.target.value)} /><input type="date" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      {/* 거래종류<br /> */}
      {/* <select>
        <option>아파트</option>
        <option>오피스텔</option>
        <option>연립다세대</option>
        <option>단독/다가구 주택</option>
      </select> */}
      <Row>
        <Label width={'20%'}>거래유형</Label>
        <RadioBox items={[
          {
            name: '매매',
            value: 'trade'
          },
          {
            name: '전월세',
            value: 'rent'
          }
        ]} onChange={item => setTradeType(item.value)} />
      </Row>

      <Row align={'right'}>
        <Button onClick={searchProcess}>조회</Button>
      </Row>
    </div>
  )
}

export default SearchBox;