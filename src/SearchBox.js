import React, { useEffect, useState } from 'react';
import TradeContext from './context/useTradeContext';
import useTradeContext from './context/useTradeContext';
import Axios from 'axios';

const SearchBox = props => {
  const { searchQuery, search } = useTradeContext();
  const { state, action } = searchQuery;
  const { setName, setRegion, setSigungu } = action;
  const [ regionList, setRegionList ] = useState([]);
  const [ sigunguList, setSigunguList ] = useState([]);

  const fetchCityCode = async(type) => {
    const response = await Axios.get('http://localhost:8000/city/search', {
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
    console.log('result', result)
  }

  useEffect(() => {
    fetchCityCode(0);
  }, [ state.region]);
  
  useEffect(() => {
    fetchCityCode(1);
  }, [ state.sigungu ]);

  return (
    <div>
      이름  <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
      지역 
      <select onChange={e => {
        setRegion(e.target.value);
      }}>
        {
          regionList.map((item, index) => {
            return (
              <option value={ item.region }> { item.name } </option>
            )
          })
        }
      </select>
      <select onChange={e => {
        setSigungu(e.target.value);
      }}>
        {
          sigunguList.map((item, index) => {
            return (
              <option value={ item.sigungu }> { item.name } </option>
            )
          })
        }
      </select>
      <br/>
      면적  <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
      거래일  <input type="date" name="name" onChange={e => setName(e.target.value)} /><input type="date" name="name" onChange={e => setName(e.target.value)} /><br/>
      거래종류
      <select>
        <option>아파트</option>
        <option>오피스텔</option>
        <option>연립다세대</option>
        <option>단독/다가구 주택</option>
      </select>
      거래유형
      <select>
        <option>매매  </option>
        <option>전월세</option>
      </select> <br />
      <button type="button" onClick={e => search()}>검색</button>
    </div>
  )
}

export default SearchBox;