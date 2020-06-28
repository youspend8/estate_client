import React from 'react';
import TradeContext from './context/useTradeContext';
import useTradeContext from './context/useTradeContext';

const SearchBox = props => {
  const { searchQuery, search } = useTradeContext();
  const { state, action } = searchQuery;
  const { setName } = action;

  return (
    <div>
      이름  <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
      지역 
      <select>
        <option>서울시</option>
      </select>
      <select>
        <option>종로구</option>
        <option>중구</option>
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