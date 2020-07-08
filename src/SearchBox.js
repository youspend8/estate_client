import React, { useEffect, useState } from 'react';
import TradeContext from './context/useTradeContext';
import useTradeContext from './context/useTradeContext';
import Axios from 'axios';
import Button from './component/atoms/button/Button';
import ButtonBox from './component/organisms/box/ButtonBox';
import Label from './component/atoms/label/Label';
import { Cascader } from 'antd';

const SearchBox = props => {
  const { searchQuery, search, baseURL } = useTradeContext();
  const { state, action } = searchQuery;
  const { setName, setRegion, setSigungu } = action;
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
    <div>
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
      이름<br />
      {/* <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      면적<br />
      {/* <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      거래일<br />
      {/* <input type="date" name="name" onChange={e => setName(e.target.value)} /><input type="date" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      거래종류<br />
      {/* <select>
        <option>아파트</option>
        <option>오피스텔</option>
        <option>연립다세대</option>
        <option>단독/다가구 주택</option>
      </select> */}
      거래유형<br />
      {/* <select>
        <option>매매  </option>
        <option>전월세</option>
      </select> <br /> */}
      <Button type="button" onClick={e => search()}>검색</Button>
    </div>
  )
}

export default SearchBox;