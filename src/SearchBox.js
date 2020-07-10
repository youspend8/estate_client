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
      {/* 이름<br /> */}
      {/* <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      {/* 면적<br /> */}
      {/* <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      {/* 거래일<br /> */}
      {/* <input type="date" name="name" onChange={e => setName(e.target.value)} /><input type="date" name="name" onChange={e => setName(e.target.value)} /><br/> */}
      {/* 거래종류<br /> */}
      {/* <select>
        <option>아파트</option>
        <option>오피스텔</option>
        <option>연립다세대</option>
        <option>단독/다가구 주택</option>
      </select> */}
      {/* 거래유형<br /> */}
      {/* <select>
        <option>매매  </option>
        <option>전월세</option>
      </select> <br /> */}
    </div>
  )
}

export default SearchBox;