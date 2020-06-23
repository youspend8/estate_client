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
      지역  <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
      면적  <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
      거래일  <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
      거래유형  <input type="text" name="name" onChange={e => setName(e.target.value)} /><br/>
      <button type="button" onClick={e => search()}>검색</button>
    </div>
  )
}

export default SearchBox;