import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import SearchTable from './SearchTable';
import Axios from 'axios';
import { TradeContext } from './context/useTradeContext';
import { REQUEST_URL } from './common/Constant';

const App = () => {
  const [ data, setData ] = useState([]);
  
  const search = async() => {
    console.log()
    console.log(searchQuery)
    const response = await Axios.get(`https://mask.thereright.co.kr/estate/search/`);
    const result = await response.data;

    setData(response.data)
    console.log(result)
  }

  const [ name, setName ] = useState('');

  const searchQuery = {
    state: {
      name: name,
    },
    action: {
      setName: setName
    }
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <TradeContext.Provider value={{
      searchQuery: searchQuery,
      search: search
    }}>
      <div className="App">
        <SearchBox />
        <SearchTable data={data} />
      </div>
    </TradeContext.Provider>
  );
}

export default App;
